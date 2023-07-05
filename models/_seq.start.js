const Sequelize = require("sequelize");
const logger = require('../helper/logger.js');

//initialise the connection with certain start parameters (see docs)
const sequelizeConnection = new Sequelize(process.env.DB_NAME_PROD, process.env.DB_USER_PROD, process.env.DB_PASSWORD_PROD, {
    host: process.env.DB_HOST_PROD,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: process.env.OPERATORALIASES,
    schema: process.env.DB_NAME_PROD,
    pool: {
        max: parseInt(process.env.DB_MAX_CONN),
        min: parseInt(process.env.DB_MIN_CONN),
        acquire: parseInt(process.env.DB_ACQUIRE),
        idle: parseInt(process.env.DB_IDLE)
    },
    define: {
        timestamps: false   //createdAt and updatedAt are added as columns if true
    },
    logging: msg => {
        logger.sequelize(msg);
    }
});

const db = {};

//in order to be able to access the two variables in the models
db.Sequelize = Sequelize;
db.sequelize = sequelizeConnection;

//add the models to the database so that the controller can access it
db.users = require("./user.model.js")(sequelizeConnection, Sequelize);
db.codes = require("./code.model.js")(sequelizeConnection, Sequelize);
db.players = require("./player.model.js")(sequelizeConnection, Sequelize);

db.players.belongsTo(db.users, {
    foreignKey: {
      name: 'user_id',
      allowNull: false
    }
});

module.exports = db;