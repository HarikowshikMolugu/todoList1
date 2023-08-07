const { Sequelize } = require('sequelize');
require('dotenv').config({ path: 'cred.env' });

// Create Sequelize connection
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to MySQL');
  })
  .catch((error) => {
    console.error('Failed to connect to MySQL:', error);
  });

module.exports = sequelize;
