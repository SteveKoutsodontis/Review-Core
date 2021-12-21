const router = require('express').Router();

const userRoutes = require('./userRoutes');
const gameRoutes = require('./gameRoutes');
const commentRoutes = require('./commentRoutes');
const reviewRoutes = require('./reviewRoutes');

router.use('/users', userRoutes);
router.use('/game', gameRoutes);
router.use('/review', reviewRoutes);
router.use('/comment', commentRoutes);

module.exports = router;