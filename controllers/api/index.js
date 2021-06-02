const router = require("express").Router();

const userRoutes = require("./userRoutes");
const concertRoutes = require("./concertRoutes");
const venueRoutes = require("./venueRoutes");

router.use("/users", userRoutes);
router.use("/concerts", concertRoutes);
router.use("/venues", venueRoutes);

module.exports = router;
