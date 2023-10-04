// Dependencies
// Sequelize constructor
const Sequelize = require('sequelize');
// dotenv for local environmental variables for user name and password
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize("mvc_tech_blog_db", "root", "Ss0114113@12", {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;