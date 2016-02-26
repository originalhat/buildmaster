var express = require('express')
var app = express()
var server = require('http').Server(app)
var bodyParser = require('body-parser')
var io = require('socket.io')(server)

app.use(bodyParser.json())
app.use(express.static('dist'))

startServer()

app.post('/', function (req, res) {
  io.sockets.emit('action', {type: 'message', data: req.body})
  res.send({status: 200})
})

function startServer () {
  server.listen(80, function () {
    console.log('Express server is up and running!')
  })
}
