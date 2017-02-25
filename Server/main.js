var express = require('express');
var app = express();
var socketio = require('socket.io');
var routes = require('./routes.js')

routes(app);
var io = socketio.listen(app.listen(8081));



io.sockets.on('connection', function(socket){
  console.log('A user connected');

  setInterval(function(){socket.emit('message', {message: totalMemory()});},5000);

  socket.on('disconnect', function(){
    console.log('A user disconnected');
  })
})
console.log('listening on port 8081');

function sendData(){
  socket.emit('message', {message: 'Socketio is working'});
}
