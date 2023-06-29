const express = require('express');
const app = express();

const app_ip = process.env.APPLICATION_HOST;
const app_port = process.env.APPLICATION_PORT;

const logger = require('./helper/logger.js');

app.listen(app_port, app_ip, () => {
    logger.info('App is listening on ' + app_ip + ' at ' + app_port);
});
