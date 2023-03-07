const {DataTypes} = require('sequelize');
const {sequelize} = require('../DB/db_connect.js');

const store = sequelize.define('store', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true

  },
  storeName	: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});


module.exports = store;



