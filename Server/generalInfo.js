var os = require('os');

module.exports.getHostName = function(){
  return os.hostname();
}

module.exports.getUpTime = function(){
  var upTime = os.uptime()/60;
  return upTime + " minutes";
}
