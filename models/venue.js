const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Venue extends Model {}

Venue.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    venue_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    venue_city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    venue_state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mgmt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    engineer: {
      type: DataTypes.STRING,
    },

    rating: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: "venue",
  }
);

module.exports = Venue;
