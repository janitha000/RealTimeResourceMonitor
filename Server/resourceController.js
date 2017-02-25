var cpu = require('./cpuInfoHandler');
var memory = require('./memoryInfoHandler');
var general = require('./generalInfoHandler');

module.exports.getGeneralInfo = function(){
  console.log('Getting general info');

  var obj = new Object();
  obj.general = getGeneralInfo();
  obj.memory = getMemoryInfo();

  return obj;
}

getGeneralInfo = function(){
  var generalInfo = new Object();
  generalInfo.hostName = general.getHostName();
  generalInfo.upTime = general.getUpTime();
  return generalInfo;
}
var getMemoryInfo = function(){
  var memoryInfo = new Object();
  memoryInfo.totalMemory = memory.getTotalMemory();
  return memoryInfo;
}
