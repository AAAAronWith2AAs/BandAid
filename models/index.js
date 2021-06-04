const User = require("./user");
const Concert = require("./concert");
const Venue = require("./venue");

Concert.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Concert, {
  foreignKey: "user_id",
});

Concert.belongsTo(Venue, {
  foreignKey: "venue_id",
});

Venue.hasMany(Concert, {
  foreignKey: "venue_id",
});

module.exports = { User, Concert, Venue };
