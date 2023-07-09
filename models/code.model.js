module.exports = (sequelize, Sequelize) => {
    const Code = sequelize.define("code", {
        code_id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        code_value: {
            type: Sequelize.INTEGER
        }
    });
  
    return Code;
};