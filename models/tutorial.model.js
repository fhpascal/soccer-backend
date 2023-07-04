module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      tutorial_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Tutorial;
};