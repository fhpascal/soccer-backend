const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const app_ip = process.env.APPLICATION_HOST;
const app_port = process.env.APPLICATION_PORT;

const logger = require('./helper/logger.js');
const db = require('./models/_seq.start.js');

const userRouter = require("./routes/user.routes.js");
const gameRouter = require("./routes/game.routes.js");
const codeRouter = require("./routes/code.routes.js");
const playerRouter = require("./routes/player.routes.js");
const participationRouter = require("./routes/participation.routes.js");
const jwtRouter = require("./routes/jwt.routes.js");

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'NodeJS express REST API for the soccer app',
      version: '1.0.0',
      description: 'This is a REST API for the soccer app developed in the lecture Medizinische Smarte Sensoren'
    },
    servers: [
      {
        url: 'http://' + app_ip + ':' + app_port
      },
    ],
    //this is needed to be able to define the JWT auth for swagger 
    components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            in: 'header',
            name: 'Authorization',
            description: 'Bearer Token',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
    } 
};
  
const swaggerSpec = swaggerJSDoc({ swaggerDefinition, apis: ['./routes/*.js'] });

app.use(express.json());

app.use("/user", userRouter);
app.use("/code", codeRouter);
app.use("/game", gameRouter);
app.use("/player", playerRouter);
app.use("/participation", participationRouter);

app.use("/auth", jwtRouter); //only for testing and not for prod. yet
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(app_port, app_ip, () => {
    logger.info('App is listening on ' + app_ip + ' at ' + app_port);
    db.sequelize.sync().then(() =>{ logger.sequelize("Sequelize sync was successful!"); }).catch((err)=>{ logger.error("While sequelize sync: " + err); });
});

//redirect to the swagger docs. Could also be done with the webserver directly.
app.get('/', (req, res) => {
    res.redirect('/docs');
});

