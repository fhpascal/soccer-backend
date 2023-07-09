module.exports = (sequelize, Sequelize) => {
    const Participation = sequelize.define("participates_in", {
        participation_id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        location_time: {
            type: Sequelize.TIME
        },
        location_x: {
            type: Sequelize.DECIMAL(10, 7)
        },
        location_y: {
            //total number of digits, after decimal point
            type: Sequelize.DECIMAL(10, 7)
        }
    },
    {
        tableName: 'participates_in' //sequelize will add an 's' to the table otherwise. That's ok for all other tables, but not for this one.
    });
  
    return Participation;
};