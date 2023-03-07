const {DataTypes} = require("sequelize");
const {sequelize} = require('../DB/db_connect.js');

const category = sequelize.define('category', {
    // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
    // Other model options go here
})

module.exports = category;
