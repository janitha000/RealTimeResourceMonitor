var os = require('os');

module.exports.getTotalMemory = function(){
  var Memory = (os.totalmem()/1024)/1024;
  return Memory +" MB";
}

module.exports.getFreeMemory = function(){
  var fMemory = (os.freemem()/1024)/1024;
  return fMemory + " MB";
}
