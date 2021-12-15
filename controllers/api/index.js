const router = require('express').Router();

const userRoutes = require('./userRoutes');
const gameRoutes = require('./gameRoutes');
const commentRoutes = require('./commentRoutes');
const reviewRoutes = require('./reviewRoutes');

router.use('/Users', userRoutes);
router.use('/Game', gameRoutes);
router.use('/Review', reviewRoutes);
router.use('/Comment', commentRoutes);

module.exports = router;