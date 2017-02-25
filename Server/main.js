var express = require('express');
var app = express();
var socketio = require('socket.io');

var io = socketio.listen(app.listen(8081));

io.sockets.on('connection', function(socket){
  console.log('A user connected');

  socket.emit('message', {message: 'Socketio is working'});

  socket.on('disconnect', function(){
    console.log('A user disconnected');
  })
})
console.log('listening on port 8081');
