const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const app_ip = process.env.APPLICATION_HOST;
const app_port = process.env.APPLICATION_PORT;

const logger = require('./helper/logger.js');
const db = require('./models');

const userRouter = require("./routes/user.routes.js");

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Express REST API for the soccer app',
      version: '1.0.0',
      description: 'This is a REST API for the soccer app developed in the lecture Medizinische Smarte Sensoren'
    },
    servers: [
      {
        url: 'http://' + app_ip + ':' + app_port
      },
    ],
};
  
const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
};
  
const swaggerSpec = swaggerJSDoc(options);

app.use(express.json());

app.use("/user", userRouter);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(app_port, app_ip, () => {
    logger.info('App is listening on ' + app_ip + ' at ' + app_port);
    db.sequelize.sync().then(() =>{ logger.info("sync was ok"); }).catch((err)=>{ logger.error(err); });
});

app.get('/', (req, res) => {
    res.redirect('/docs');
});