const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const app_ip = process.env.APPLICATION_HOST;
const app_port = process.env.APPLICATION_PORT;

const logger = require('./helper/logger.js');
const db = require('./models/_seq.start.js');

const userRouter = require("./routes/user.routes.js");
const codeRouter = require("./routes/code.routes.js");

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
};
  
const swaggerSpec = swaggerJSDoc({ swaggerDefinition, apis: ['./routes/*.js'] });

app.use(express.json());

app.use("/user", userRouter);
app.use("/code", codeRouter);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(app_port, app_ip, () => {
    logger.info('App is listening on ' + app_ip + ' at ' + app_port);
    db.sequelize.sync().then(() =>{ logger.sequelize("Sequelize sync was successful!"); }).catch((err)=>{ logger.error("While sequelize sync: " + err); });
});

app.get('/', (req, res) => {
    res.redirect('/docs');
});

app.post('/testplayer', (req, res) => {
  const Player = db.players;

  const newPlayer = {
    date_of_birth: req.body.date_of_birth,
    player_number: req.body.player_number,
    player_position: req.body.player_position,
    user_id: req.body.user_id
  };

  Player.create(newPlayer).then(data => {
      res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message: err.message || "An error occurred while creating a new player."
      });
  });
})

app.get('/testgetfk', (req, res) => {
  const Player = db.players;

  Player.findByPk(2, { include: ["user"] }).then((player) => {
    res.send(player);
  })
  .catch((err) => {
    logger.error("error: " + err);
  });
});