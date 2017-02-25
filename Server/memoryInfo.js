var os = require('os');

totalMemory = function(){
  var Memory = (os.totalmem()/1024)/1024;
  return Memory +" MB";
}
