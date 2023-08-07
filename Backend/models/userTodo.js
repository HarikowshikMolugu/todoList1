const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const User = require('./user'); // Import User model

const UserTodo = sequelize.define('userTodo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true
  },
  created_at: {
    type: DataTypes.STRING,
    allowNull: true

  },
  completed_at:{
    type: DataTypes.STRING,
    allowNull: true
  
  }
}, {
  tableName: 'userTodo', // Set the table name explicitly
  timestamps: false      // Disable automatic timestamp fields
});

module.exports = UserTodo;
