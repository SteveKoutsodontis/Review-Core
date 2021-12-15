const router = require('express').Router();

//TODO: Link routes
const userRoutes = require('./userRoutes');
const gameRoutes = require('./gameRoutes');
const commentRoutes = require('./commentRoutes');
const reviewRoutes = require('./reviewRoutes');

//TODO: Use routes
router.use('/Users', userRoutes);
router.use('/Game', gameRoutes);
router.use('/Review', reviewRoutes);
router.use('/Comment', commentRoutes);

module.exports = router;