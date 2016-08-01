//var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
module.exports = {

  //method to find the users
  findRestaurants: function(db, httpRequest, httpResponse) {
    var database = db;
    console.log("Fetching data");
    var usr = database.collection('users').find().toArray(function(err, users) {
      if (err) throw err;
      httpResponse.setHeader('Content-Type', "application/json");
      httpResponse.send(users);
    });
  },

  createUsers: function(db, httpRequest, httpResponse) {
    var response = {};
    // Add strict validation when you use this in Production.
    users = httpRequest.body;
    db.userEmail = users.email;
    // Hash the password using SHA1 algorithm.
    db.userPassword = "pwd";
    db.collection('users').insertOne(users, function(err, result) {
      if (err) throw err;
      console.log("Inserted a document into the restaurants collection.");
    });
    httpResponse.send("User is created successfully");
  }

};