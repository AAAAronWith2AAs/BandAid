const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Concert extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Concert.init(
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
    contactEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.date,
      allowNull: false,
    },
    headliner: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    guarantee: {
      type: DataTypes.STRING,
    },
    presaleAmount: {
      type: DataTypes.INTEGER,
    },
    presaleSold: {
      type: DataTypes.INTEGER,
    },
    twentyOnePlus: {
      type: DataTypes.BOOLEAN,
    },
    actualPayout: {
      type: DataTypes.INTEGER,
    },
    merchSales: {
      type: DataTypes.INTEGER,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "concert",
  }
);

module.exports = Concert;
