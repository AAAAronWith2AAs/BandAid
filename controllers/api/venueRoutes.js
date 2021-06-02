const router = require("express").Router();
const { Venue } = require("../../models");

// The `/api/venues` endpoint

router.get("/", async (req, res) => {
  try {
    const venueData = await Venue.findAll();
    res.status(200).json(venueData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const venueData = await Venue.findByPk(req.params.id);

    if (!venueData) {
      res.status(404).json({ message: "No venue found with this id." });
      return;
    }

    res.status(200).json(venueData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const venueData = await Venue.create(req.body);
    res.status(200).json(venueData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
