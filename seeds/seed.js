const sequelize = require("../config/connection");
const { User, Venue, Concert } = require("../models");

const userData = require("./userData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Venue.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Concert.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
