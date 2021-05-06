const router = require('express').Router();

const parentRoutes = require('./parent-routes');

router.use('/parents', parentRoutes);

module.exports = router;