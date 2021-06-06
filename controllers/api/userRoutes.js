const router = require("express").Router();
const { User, Concert } = require("../../models");

// CREATE new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create(req.body);
    res.status(200).json(dbUserData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//update user
router.put("/:id", async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all users
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [{ model: Concert }],
    });
    const users = userData.map((user) => user.get({ plain: true }));
    res.status(200);
    res.render("userDisplayAll", { users });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get one user
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);

    if (!userData) {
      res.status(404).json({ message: "No user found with this id." });
      return;
    }

    const user = userData.get({ plain: true });
    res.status(200);
    res.render("userDisplay", { user });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/search/:name", async (req, res) => {
  console.log(req.params.name);
  const userData = await User.findOne({
    where: { band_name: req.params.name },
  });
  console.log(userData);
  if (!userData) {
    res.status(404).json({ message: "No concerts found for this user." });
    return;
  }

  const user = userData.get({ plain: true });
  res.status(200);
  res.render("userDisplay", { user });
});

module.exports = router;
