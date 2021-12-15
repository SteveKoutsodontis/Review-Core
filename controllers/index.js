const router = require('express').Router();

//TODO: Link routes
const apiRoutes = require('./api');

//TODO: Use routes

router.use('/api', apiRoutes);

module.exports = router;