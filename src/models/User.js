const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
  
const User = sequelize.define('user', {
    
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.STRING,
    }
   
});

module.exports = User;