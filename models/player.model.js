module.exports = (sequelize, Sequelize) => {
    const Player = sequelize.define("player", {
        player_id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        date_of_birth: {
            type: Sequelize.DATE
        },
        player_number: {
            type: Sequelize.INTEGER(5)
        },
        player_position: {
            type: Sequelize.STRING(50)
        }
    });
  
    return Player;
};