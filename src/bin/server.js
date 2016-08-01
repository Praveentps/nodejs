var express = require('express');
var routes = require('../routes/routes')
var app = express();
var bodyParser = require("body-parser");

// Retrieve
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;


app.use(bodyParser.json({
  limit: '50mb'
}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/MYDB", function(err, db) {
  if (err) {
    return console.dir(err);
  }
  console.log("We are connected");
  routes(app, db);
});

var server = app.listen(3000, function() {

  var host = server.address().address
  var port = server.address().port
    //register the routes
    //routes(app);
  console.log("Example app listening at http://%s:%s", host, port)

})

exports.closeServer = function() {
  server.close();
};