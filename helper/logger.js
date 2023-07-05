const winston = require("winston");
const { combine, timestamp, json, printf } = winston.format;

//define custom levels to log sequelize generated messages accordingly
//the default log level is info - this means that all log levels below it will also be considered.
const customLogLevels = {
  levels: {
    error: 1,
    warning: 2,
    info: 3,
    sequelize: 4,
  }
};

const logger = winston.createLogger({
  levels: customLogLevels.levels,
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSS',
    }),
    printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)),  //adapt the actual log output 
  //depending on the defined log level, it will either print the sequelize logs in the console and json file or not.
  transports: [
    new winston.transports.Console({level: process.env.LOG_LEVEL}),
    new winston.transports.File({
      filename: './logs/logs.json',
      level: process.env.LOG_LEVEL,
      format: json()
    })
  ]
});

module.exports = logger;