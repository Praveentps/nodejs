var express = require('express');
var routes= require('../routes/routes')
var app = express();


var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port
	//register the routes
	routes(app);
  console.log("Example app listening at http://%s:%s", host, port)

})

exports.closeServer = function(){
  server.close();
};