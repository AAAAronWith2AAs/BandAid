const router = require("express").Router();
const { Concert, Venue, User } = require("../../models");

// The `/api/concerts` endpoint

router.get("/", async (req, res) => {
  try {
    const concertData = await Concert.findAll({
      include: [
        {
          model: Venue,
        },
        { model: User },
      ],
    });
    const concerts = concertData.map((concert) => concert.get({ plain: true }));
    res.status(200);
    res.render("concertDisplayAll", { concerts });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const concertData = await Concert.findByPk(req.params.id);

    if (!concertData) {
      res.status(404).json({ message: "No concert found with this id." });
      return;
    }

    const concert = concertData.get({ plain: true });
    res.status(200);
    res.render("concertDisplay", { concert });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/search/:name", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { band_name: req.params.name },
      include: [{ model: Concert }],
    });
    if (!userData) {
      res.status(404).json({ message: "No concerts found for this user." });
      return;
    }

    const concerts = userData.get({ plain: true });
    res.status(200);
    console.log(concerts);
    res.render("userConcertDisplay", { concerts });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const concertData = await Concert.create(req.body);

    res.status(200).json(concertData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const concertData = await Concert.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!concertData[0]) {
      res.status(404).json({ message: "No concert with this id!" });
      return;
    }
    res.status(200).json(concertData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
