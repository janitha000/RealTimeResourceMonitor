window.onload = function(){
  var socket = io.connect('http://localhost:8081');

  var content = document.getElementById('content');


  socket.on('message', function(data){
    content.value = content.value + " "+ data.message;
  })
}
