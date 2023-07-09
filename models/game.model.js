module.exports = (sequelize, Sequelize) => {
    const Game = sequelize.define("game", {
        game_id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        game_name: {
            type: Sequelize.STRING(255)
        },
        game_date: {
            type: Sequelize.DATE
        },
        game_start: {
            type: Sequelize.TIME
        },
        game_end: {
            type: Sequelize.TIME
        }
    });
  
    return Game;
};