var resourceController = require('./resourceController');

module.exports = function(app){
  app.get('/generalinfo', function(req,res){
    console.log("GET generalinfo");
    var obj = resourceController.getGeneralInfo();
      console.log(obj);
      res.json(obj);
  })
}
