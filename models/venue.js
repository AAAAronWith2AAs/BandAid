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
    venueName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    venueCity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    venueState: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
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
