 //create routers for the app routes
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeroutes');
// const sendMailRoute = require('./send')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
// router.use('/send', sendMailRoute);

module.exports = router;