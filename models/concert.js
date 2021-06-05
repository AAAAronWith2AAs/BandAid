const { Model, DataTypes } = require("sequelize");

// const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Concert extends Model {
  // checkPassword(loginPw) {
  //   return bcrypt.compareSync(loginPw, this.password);
  // }
}

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
    // headliner: {
    //   type: DataTypes.STRING,
    // },
    guarantee: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    presale_amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    presale_sold: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    twenty_one_plus: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    actual_payout: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    merch_sales: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
