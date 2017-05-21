var resourceController = require('./resourceController');

module.exports = function(app){
  app.get('/', function(req,res){
    res.render('../Client/index.ejs');
  })

  app.get('/login', function(req,res){
    res.render('../Server/views/login.ejs' /*, {message: req.flash('loginMessage') }*/);
  })

  app.get('/generalinfo', function(req,res){
    //console.log("GET generalinfo");
    var obj = resourceController.getGeneralInfo();
      console.log(obj);
      res.json(obj);
  })

  app.get('/cpuinfo', function(req,res){
    console.log("GET cpuinfo");
    var obj = resourceController.getCPUInfo();
    //console.log(obj);
    res.json(obj);
  })


  app.get('/cpuinfo/:id', function(req,res){
    var core = req.params.id;
    console.log("GET cpuinfo " + core);
    var obj = resourceController.getCPUInfo(core);
    //console.log(obj);
    res.json(obj);
  })
}
