/* -- vanila express.js -- */

// var express = require('express')
// var app = express()

// app.post('/tracker-frontend', function (req, res) {
//   console.log()
//   res.send(req.body)
// })

// app.listen(4000, function () {
//   console.log('Express server is up and running!')
// })

/* -- socket.io -- */

var app = require('express')()
var server = require('http').Server(app)
var bodyParser = require('body-parser')
var io = require('socket.io')(server)

app.use(bodyParser.json())

startServer()
trackerFrontendPOST()

function startServer () {
  server.listen(4000, function () {
    console.log('Express server is up and running!')
  })
}

function trackerFrontendPOST () {
  app.post('/tracker-frontend', function (req, res) {
    io.sockets.emit('projectBuild', req.body)
  })
}
