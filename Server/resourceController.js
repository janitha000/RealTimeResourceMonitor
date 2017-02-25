var cpu = require('./cpuInfoHandler');
var memory = require('./memoryInfoHandler');
var general = require('./generalInfoHandler');

module.exports.getGeneralInfo = function(){
  console.log('Getting general info');

  var obj = new Object();
  obj.general = getGeneralInfo();
  obj.memory = getMemoryInfo();
  obj.cpu = getCPUInfo();
  return obj;
};

module.exports.getCPUInfo = function(core){
  return cpu.getCPUModel(core);
}

getGeneralInfo = function(){
  var generalInfo = new Object();
  generalInfo.hostName = general.getHostName();
  generalInfo.upTime = general.getUpTime();
  return generalInfo;
}
getMemoryInfo = function(){
  var memoryInfo = new Object();
  memoryInfo.totalMemory = memory.getTotalMemory();
  return memoryInfo;
}

getCPUInfo = function(){
  var cpuInfo = new Object();
  cpuInfo.model = cpu.getCPUModel(0).model;
  return cpuInfo;
}
