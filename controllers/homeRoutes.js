const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    res.status(200);
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/newband", async (req, res) => {
  try {
    res.status(200);
    res.render("userForm");
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/newconcert", async (req, res) => {
  try {
    res.status(200);
    res.render("concertForm");
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/newvenue", async (req, res) => {
  try {
    res.status(200);
    res.render("venueForm");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
