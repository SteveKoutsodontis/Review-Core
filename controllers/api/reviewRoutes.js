//TODO Steve: Create api routes for getting, posting, and deleting comment information from the server //No reference yet maybe wait on this one
const router = require('express').Router();
const { User, Review, Game, Comment } = require('../../models');

// The `/api/categories` endpoint
router.get('/', (req, res) => {
    Review.findAll().then(response => res.json(response))
    
});
    // create a single review
router.post('/', async (req, res) => {
  try {
      const reviewData = await Review.create(req.body);
      res.status(200).json(reviewData)
  } catch (err) {
      res.status(500).json(err);
  }
});
// GET a single review // attach for search review
router.get('/:id', async (req, res) => {
   Review.findByPk(req.params.id,
    {include: [{model: User},{model: Game},{model: Comment}]})
});

//   // create a new category
router.post('/', async (req, res) => {
      const reviewData = await Review.create(req.body);
      res.status(200).json(reviewData); 
  });


router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
    const reviewData = await Review.destroy({
        where: {
            id: req.params.id
        }
    });

    if (!reviewData) {
        res.status(404).json({ message: 'No review found with this id!'});
    }
});

module.exports = router;
