const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Concert extends Model {}

Concert.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    guarantee: {
      type: DataTypes.STRING,
    },
    presale_amount: {
      type: DataTypes.STRING,
    },
    presale_sold: {
      type: DataTypes.STRING,
    },
    twenty_one_plus: {
      type: DataTypes.BOOLEAN,
    },
    actual_payout: {
      type: DataTypes.STRING,
    },
    merch_sales: {
      type: DataTypes.STRING,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    venue_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "venue",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: "concert",
  }
);

module.exports = Concert;
