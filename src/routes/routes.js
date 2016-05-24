var controller = require('../modules/controller');
var routes = (function (app) {

app.get('/', function (request, response) {
   controller.read(request,response);
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