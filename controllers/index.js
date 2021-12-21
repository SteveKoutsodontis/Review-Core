const router = require('express').Router();

//TODO: Link routes
const htmlRoutes = require('./htmlRoutes')
const apiRoutes = require('./api');

//TODO: Use routes
router.use('/', htmlRoutes)
router.use('/api', apiRoutes);

module.exports = router;