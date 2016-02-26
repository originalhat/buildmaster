var app = require('express')()
var server = require('http').Server(app)
var bodyParser = require('body-parser')
var io = require('socket.io')(server)

app.use(bodyParser.json())

startServer()

pushProjectBuild('/tracker-frontend')

function startServer () {
  server.listen(4000, function () {
    console.log('Express server is up and running!')
  })
}

function pushProjectBuild (route) {
  app.post(route, function (req, res) {
    io.sockets.emit('projectBuild', req.body)
    res.send({status: 200})
  })
}
