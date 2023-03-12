const {DataTypes} = require('sequelize');
const {sequelize} = require('../DB/db_connect.js');

const product = sequelize.define('product', {
    // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(500),
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  articleNumber: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  gender:{
    type: DataTypes.STRING,
    allowNull: false
  },
  category:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  store:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
    img: {
    type: DataTypes.STRING(400),
    allowNull: false
  }

}, {
    // Other model options go here
})

const category = require('./categories.js');
const store = require('./stores.js');

product.hasMany(category);
category.belongsTo(product);

product.belongsToMany(store,{ through: 'storeProduct' });
store.belongsToMany(product,{ through: 'storeProduct' });

module.exports = product;