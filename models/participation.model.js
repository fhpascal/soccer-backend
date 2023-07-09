module.exports = (sequelize, Sequelize) => {
    const Participation = sequelize.define("participation", {
        participation_id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        location_time: {
            type: Sequelize.TIME
        },
        location_x: {
            type: Sequelize.DECIMAL(4,5)
        },
        location_y: {
            type: Sequelize.DECIMAL(4,5)
        }
    });
  
    return Participation;
};