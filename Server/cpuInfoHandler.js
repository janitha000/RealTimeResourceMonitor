var os = require('os');

var cpus = os.cpus();

module.exports.getCPUModel = function(core){
  if(core == null){
    return cpus;
  }
  else
  {
      return cpus[core];
  }
}
