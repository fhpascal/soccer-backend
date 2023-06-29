const winston = require("winston");
const { combine, timestamp, json, printf } = winston.format;

const logger = winston.createLogger({
  level: "debug",
  format: combine(
            timestamp({
              format: 'YYYY-MM-DD HH:mm:ss.SSS',
            }),
            printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: './logs/logs.json',
      format: json()
    })
  ]
});

module.exports = logger;