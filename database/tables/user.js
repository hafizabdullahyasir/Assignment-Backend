const { Model, DataTypes } = require("sequelize");
const sequelize = require("../dbConnection");

class users extends Model {}
users.init(
  {
    userID: {
      type: DataTypes.STRING(64),
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(34),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(16),
      allowNull: false,
      inique: true,
    },
    email: {
      type: DataTypes.STRING(),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    paranoid: true,
    sequelize,
  }
);
module.exports = users;
