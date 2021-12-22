const router = require('express').Router();
const res = require('express/lib/response');
const { User, Review, Game, Comment } = require('../../models');
const SUPERENCRYPTION = (_encryptionData) => {return 'Psych you thought we would return the actual password hash, what do you think we are stupid?';}
const errorFunction = (err) => { console.log(err); res.status(500).json(err); }

// The `/api/review` endpoint
//Get all reviews
router.get('/', (req, res) => {
    console.log("GET: /api/review/");
    Review.findAll().then(response => res.json(response)) 
});

// GET a single review // attach for search review
router.get('/:id', async (req, res) => {
    console.log("GET: /api/review/:id")
    try{
        console.log(req.params.id);
        const reviewData = await Review.findByPk(req.params.id, 
        {include: [{model: User},{model: Game}]});
        console.log(reviewData);
        //reviewData.user.password = SUPERENCRYPTION(reviewData.user.password);
        res.status(200).json(reviewData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
 }); 

// create a single review
router.post('/', async (req, res) => {
  try {
    if (!req.body.review_header || !req.body.review_text || !req.body.star_rating || !req.body.game_id) {
        res.status(400);
        console.log("Review body was not great pog");
        console.log(req.body); 
        return;
    }
      const reviewData = await Review.create(req.body);
      console.log(reviewData);
      res.status(200).json(reviewData)
  } catch (err) {
      res.status(500).json(err);
  }
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
