var express = require('express');
var app = express();
var socketio = require('socket.io');

var io = socketio.listen(app.listen(8081));

console.log('listening on port 8081');
