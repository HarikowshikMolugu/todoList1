const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'user',    // Set the table name explicitly
  timestamps: false     // Disable automatic timestamp fields
});

module.exports = User;