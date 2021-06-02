const User = require("./User");
const Concert = require("./concert");
const Venue = require("./venue");

Concert.belongsTo(User, {
  foreignKey: "userId",
});

User.hasMany(Concert, {
  foreignKey: "userId",
});

Concert.belongsTo(Venue, {
  foreignKey: "venueId",
});

Venue.hasMany(Concert, {
  foreignKey: "venueId",
});

module.exports = { User, Concert, Venue };
