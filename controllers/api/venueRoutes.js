const router = require("express").Router();
const { Venue, Concert } = require("../../models");

// The `/api/venues` endpoint

router.get("/", async (req, res) => {
  try {
    const venueData = await Venue.findAll({
      include: [{ model: Concert }],
    });

    const venues = venueData.map((venue) => venue.get({ plain: true }));
    res.status(200);
    res.render("venueDisplayAll", { venues });
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

    const venue = venueData.get({ plain: true });
    res.status(200);
    res.render("venueDisplay", { venue });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/search/:name", async (req, res) => {
  const venueData = await Venue.findOne({
    where: { venue_name: req.params.name },
  });
  if (!venueData) {
    res.status(404).json({ message: "No venues found." });
    return;
  }

  const venue = venueData.get({ plain: true });
  res.status(200);
  res.render("venueDisplay", { venue });
});

router.post("/", async (req, res) => {
  try {
    const venueData = await Venue.create(req.body);
    res.status(200).json(venueData);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const venueData = await Venue.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!venueData[0]) {
      res.status(404).json({ message: "No venue with this id!" });
      return;
    }
    res.status(200).json(venueData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
