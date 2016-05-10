'use strict'

let https = require('https')
var express = require('express')
var app = express()
var server = require('http').Server(app)
var bodyParser = require('body-parser')
var io = require('socket.io')(server)

var cookieParser = require('cookie-parser');
var cookieEncrypter = require('cookie-encrypter');
var port = process.env.PORT || 4000
startServer()

const githubApplication = {
  client_id: process.env.GITHUB_APPLICATION_CLIENT_ID,
  redirect_uri: process.env.GITHUB_APPLICATION_REDIRECT_URI,
  client_secret: process.env.GITHUB_APPLICATION_CLIENT_SECRET
};

const cookieParams = {
  httpOnly: true,
  signed: true,
  maxAge: 300000,
};

const tokensPerRepo = {}

const cookieSecretKey = process.env.COOKIE_SECRET;

app.use(bodyParser.json())
app.use(cookieParser(cookieSecretKey));
app.use(cookieEncrypter(cookieSecretKey));

app.get('/githuboauthcallback', function(req, res) {
  let postRequest = https.request({
    hostname: 'github.com',
    method: 'POST',
    path: '/login/oauth/access_token',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  }, (response) => {
    console.log(`Got access_token response: ${response.statusCode}`);
    let body = '';
    response.on('data', (d) => body += d);
    response.on('end', () => {
      const json = JSON.parse(body);
      res.cookie('token', json.access_token, cookieParams);
      res.redirect(req.signedCookies.redirect);
    });
  }).on('error', (e) => {
    console.log(`Got error: ${e}`);
    res.end();
  });

  postRequest.write(JSON.stringify({
    client_id: githubApplication.client_id,
    client_secret: githubApplication.client_secret,
    redirect_uri: githubApplication.redirect_uri,
    code: req.query.code,
  }));
  postRequest.end();
});

app.post('/github', function (req, res) {
  res.send({status: 200})

  const fullName = req.body.name
  const org = fullName.split('/')[0]
  const repo = fullName.split('/')[1]

  console.log('pid', process.pid)
  console.log('DEBUG----- token used for github status req', Object.keys(tokensPerRepo))

  const options = {
    hostname: 'api.github.com',
    path: `/repos/${org}/${repo}/commits/${req.body.sha}/status`,
    headers: {
      'Authorization': `token ${tokensPerRepo[fullName]}`,
      'User-Agent': 'hookmaster'
    }
  }

  https.get(options, (res) => {
    console.log(`Got response: ${res.statusCode}`)
    let body = ''
    res.on('data', (d) => body += d)
    res.on('end', () => {
      // not sure which branch to use... just pick the first
      const branch = req.body.branches.length && req.body.branches[0].name
      if (!branch) return

      const statusData = JSON.parse(body);
      const combinedStatus = statusData.state;

      pushBuildUpdateToClient({
        fullName: fullName,
        repo: repo,
        outcome: combinedStatus,
        branch: branch,
        author: req.body.commit.commit.author.name,
        coauthor: req.body.commit.commit.committer.name,
        timestamp: (new Date()).getTime()
      })
    })
  }).on('error', (e) => {
    console.log(`Got error: ${e}`)
  })
})

app.get('/:orgName/:repo', authenticate)
app.use('/:orgName/:repo', express.static('dist'))

app.get('/logout', (req, res) => {
  res.clearCookie('token')
  res.clearCookie('redirect')
  res.send('logged out')
})

app.get('/:org?', (req, res) => {
  res.send("Use buildmaster.com/orgname/reponame")
})

app.post('/connecttoroom', (req, res) => {

  console.log('pid', process.pid)
  console.log('DEBUG------- on connect to room', Object.keys(req.signedCookies), req.signedCookies.token && req.signedCookies.token.length)

  checkAccessForRepo(req.body.room, req.signedCookies.token, (err, authorized) => {
    if (authorized) {
      saveOffTokenForRepo(req.body.room, req.signedCookies.token)
      io.sockets.connected['/#' + req.body.socketId].join(req.body.room)
      res.end()
    } else {
      res.sendStatus(403);
      console.log('user is not authorized')
    }
  })
})


function authenticate (req, res, next) {
  console.log('authenticate...')
  if(req.signedCookies.token) {
    console.log('user is authenticated')
    next()
  } else {
    console.log('need to authenticate')
    res.cookie('redirect', req.originalUrl, cookieParams)
    res.redirect('https://github.com/login/oauth/authorize?scope=repo&client_id=' + githubApplication.client_id + '&redirect_uri=' + encodeURIComponent(githubApplication.redirect_uri));
  }
}

function checkAccessForRepo (fullName, token, cb) {
  const options = {
    hostname: 'api.github.com',
    path: `/repos/${fullName}`,
    headers: {
      'Authorization': `token ${token}`,
      'User-Agent': 'hookmaster'
    }
  }

  https.get(options, (res) => {
    if (res.statusCode === 200) {
      cb(null, true)
    } else {
      cb(null, false)
    }
  })
}

function pushBuildUpdateToClient (buildData) {
  console.log(buildData)
  io.to(buildData.fullName).emit('action', {type: 'message', data: buildData})
}

function saveOffTokenForRepo (fullName, token) {
  tokensPerRepo[fullName] = token
}

function startServer () {
  server.listen(port, function () {
    console.log('Express server is up and running!')
  })
}
