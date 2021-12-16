//TODO Steve: Create api routes for getting, posting, and deleting comment information from the server //No reference yet maybe wait on this one

const router = require('express').Router();
const { User, Review } = require('../../models');

// The `/api/categories` endpoint
router.get('/', async (req, res) => {
    Review.findAll().then(response => res.json(response))
    //   try {
        //       const reviewData = await Review.findByPk(req.params.id);
        //   }
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
//   try {
//       const reviewData = await Review.findByPk(req.params.id);
//   }
});

// router.post('/', async (req, res) => {
//   // create a new category
// });


router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
