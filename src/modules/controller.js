var logger= require('./logger');

module.exports = {

  read: function(httpRequest,httpResponse){
  logger.info('read is called');
  httpResponse.send('Hello World');
  },

  post: function(httpRequest,httpResponse){    
  httpResponse.send('Hello POST');
  },

  delete: function(httpRequest,httpResponse){
  httpResponse.send('Hello Delete');
  }

};
	  
