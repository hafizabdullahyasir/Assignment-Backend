const sequelize = require("./dbConnection");
const users = require("./tables/user");

const models = { users };
sequelize.models = models;
module.exports = { sequelize, models };
