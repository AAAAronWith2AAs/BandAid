const { Model, DataTypes } = require("sequelize");
// const bcrypt = require("bcrypt");
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
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 5,
      },
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
