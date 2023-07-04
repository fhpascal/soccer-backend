const express = require('express');
const app = express();

const app_ip = process.env.APPLICATION_HOST;
const app_port = process.env.APPLICATION_PORT;

const logger = require('./helper/logger.js');
const db = require('./models');

const userRouter = require("./routes/user.routes.js");

app.use(express.json());

app.use("/user", userRouter);

db.sequelize.sync().then(() =>{ logger.info("sync was ok"); }).catch((err)=>{ logger.error(err); });

app.listen(app_port, app_ip, () => {
    logger.info('App is listening on ' + app_ip + ' at ' + app_port);
});

app.get('/', (req, res) => {
    res.json({info: 'Node.js, Express, and Postgres API'});
})