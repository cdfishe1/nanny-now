const router = require("express").Router();
const { Nanny } = require("../../models");
const { sequelize } = require("../../models/Nanny");

// search for nannies
router.get("/:location", async (req, res) => {

  try {
    const dbNannyData = await Nanny.findAll({
      where: {
        location: req.params.location,
      },
    })
    
    if (dbNannyData.length > 1) {
      const allNanny = dbNannyData.map((nanny) => nanny.get({ plain: true }));
      allNanny.sort((a, b) => b.years_experience - a.years_experience);
      res.render("nanny", { allNanny, loggedIn: req.session.loggedIn });
    } else {
      console.log('hi mom');
      res.render("noResults")
    }
    
  } catch (err) {
    res.status(500).json({ msg: "City is not in our Database!" });
  }
});

module.exports = router;
