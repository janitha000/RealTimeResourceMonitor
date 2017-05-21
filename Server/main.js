var express = require('express');
var app = express();
var socketio = require('socket.io');
var passport = require('passport');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var routes = require('./routes.js')
var resources = require('./resourceController.js')

routes(app);

app.set('view engine', 'ejs');
app.use(session({ secret: 'thisconnectseverything' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./routes.js')(app, passport);

var io = socketio.listen(app.listen(8081));



io.sockets.on('connection', function(socket){
  console.log('A user connected');

  setInterval(function(){socket.emit('message', {message:"Janitha"});},5000);

  socket.on('disconnect', function(){
    console.log('A user disconnected');
  })
})
console.log('listening on port 8081');

function sendData(){
  socket.emit('message', {message: 'Socketio is working'});
}
