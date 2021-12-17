const router = require('express').Router();

//TODO: Link routes
const userRoutes = require('./userRoutes');
const gameRoutes = require('./gameRoutes');
const commentRoutes = require('./commentRoutes');
const reviewRoutes = require('./reviewRoutes');

//TODO: Use routes
router.use('/users', userRoutes);
router.use('/game', gameRoutes);
router.use('/review', reviewRoutes);
router.use('/comment', commentRoutes);

module.exports = router;