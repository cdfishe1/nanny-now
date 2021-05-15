const router = require("express").Router();
const { Nanny } = require("../../models");
const { sequelize } = require("../../models/Nanny");

// search for nannies
router.get("/:location", async (req, res) => {
  console.log("line 6", req.params.location);

  try {
    const dbNannyData = await Nanny.findAll(req.params, {
      where: {
        location: req.params.location,
      },
    });
    const allNanny = dbNannyData.map((nanny) => nanny.get({ plain: true }));
    allNanny.sort((a, b) => b.years_experience - a.years_experience);
    res.render("nanny", { allNanny, loggedIn: req.session.loggedIn });
    console.log("All nannies:", allNanny);
  } catch (err) {
    res.status(500).json({ msg: "City is not in our Database!" });
  }
});

module.exports = router;
