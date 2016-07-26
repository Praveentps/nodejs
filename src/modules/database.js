//var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
module.exports = {
 findRestaurants : function(db,httpRequest,httpResponse) {
 	var data={};
   console.log("Fetching data");
   var cursor =db.collection('users').find();
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null && doc["username"]) {
         data="username"+":"+doc["username"];                  
         console.log(data);
         console.log(doc);
      } else {
         httpResponse.end("Error occuered");                 
      }
   });
         
         httpResponse.setHeader('Content-Type', "text/plain");
         httpResponse.end("data");
         //httpRequest.end();
}

};