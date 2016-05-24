var winston = require('winston');
winston.emitErrs = true;

var logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: './logs/all-logs.log',
            handleExceptions: true,
            json: false,
            maxsize: 512111,
            maxFiles: 5,
            colorize: false
        })
    ],
    exitOnError: true
});

module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};

module.exports = logger;