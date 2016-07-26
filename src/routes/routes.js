var controller = require('../modules/controller');
var database = require('../modules/database');
var routes = (function (app,db) {

app.get('/', function (request, response) {
   controller.read(request,response);
})

//get the data
app.get('/data/*', function (request, response) {   
   database.findRestaurants(db,request,response);
})

// This responseponds a POST request
app.post('/*', function (request, response) {
     controller.post(request,response); 
   
})

// This responseponds a DELETE request
app.delete('/*', function (request, response) {
      controller.delete(request,response);
})

});

module.exports=routes;