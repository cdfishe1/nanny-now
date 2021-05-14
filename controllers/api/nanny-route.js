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
      order: [["years_experience", "asc"]],
    });
    const allNanny = dbNannyData.map((nanny) => nanny.get({ plain: true }));
    res.render("nanny", { allNanny });
    console.log("All nannies:", allNanny);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/", async (req, res) => {
//   try {
//     res.render("nanny");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
