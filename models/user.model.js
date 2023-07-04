module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        user_id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING(320)
        },
        password_hash: {
            type: Sequelize.STRING(100)
        },
        firstname: {
            type: Sequelize.STRING(20)
        },
        lastname: {
            type: Sequelize.STRING(40)
        }
    });
  
    return User;
};