const router = require("express").Router();

const parentRoutes = require("./parent-routes");
const nannyRoutes = require("./nanny-route");

router.use("/parents", parentRoutes);
router.use("/nannies", nannyRoutes);

module.exports = router;
