'use strict'

let https = require('https')
var express = require('express')
var app = express()
var server = require('http').Server(app)
var bodyParser = require('body-parser')
var io = require('socket.io')(server)

var port = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(express.static('dist'))
app.use('/:optionalRepo', express.static('dist'))

startServer()

app.post('/github', function (req, res) {
  res.send({status: 200})

  const org = req.body.name.split('/')[0]
  const repo = req.body.name.split('/')[1]

  const options = {
    hostname: 'api.github.com',
    path: `/repos/${org}/${repo}/commits/${req.body.sha}/status`,
    headers: {
      'Authorization': `token ${process.env.GITHUB_OAUTH_TOKEN}`,
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

      pushBuildUpdateToClient({
        repo: repo,
        outcome: req.body.state,
        branch: branch,
        author: req.body.commit.commit.author.name,
        coauthor: req.body.commit.commit.committer.name
      })
    })
  }).on('error', (e) => {
    console.log(`Got error: ${e}`)
  })
})

function pushBuildUpdateToClient (buildData) {
  console.log(buildData)
  io.sockets.emit('action', {type: 'message', data: buildData})
}

function startServer () {
  server.listen(port, function () {
    console.log('Express server is up and running!')
  })
}
