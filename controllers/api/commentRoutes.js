const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', async (req, res) => {
    Comment.findAll()
    .then(commentData => res.status(200).json(commentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:reviewid', async (req, res) => {
    console.log("GET: api/comment/:reviewid");
    try{
        let commentData = await Comment.findAll({where: {review_id: req.params.reviewid}});
        res.status(200).json(commentData);
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/', (req, res) => {
        Comment.create({
            text: req.body.text,
            review_id: req.body.review_id,
            user_id: req.body.user_id,
        })
        .then(commentData => res.status(200).json(commentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
);

router.put('/:id', async (req, res) => {
    try{
        const requestData = await Comment.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(requestData)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    Comment.destroy({
        id: req.params.id
    })
        .then(commentData => {
            if (!commentData) {
                res.status(404).json({ message: 'No comments found with this id' });
                return;
            }
            res.json(commentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

module.exports = router;