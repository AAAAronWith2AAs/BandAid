const router = require("express").Router();
const { Concert } = require("../../models");

// The `/api/concerts` endpoint

router.get("/", async (req, res) => {
  try {
    const concertData = await Concert.findAll();
    res.status(200).json(concertData);
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

    res.status(200).json(concertData);
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

module.exports = router;
