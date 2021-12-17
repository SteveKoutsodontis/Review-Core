const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', async (req, res) => {
    Comment.findAll({})
        .then(commentData => res.json(commentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', async (req, res) => {
    if (req.session) {
        Comment.create({
            text: req.body.text,
            post_id: req.body.post_id,
            user_id: req.session.user_id,
        })
            .then(commentData => res.json(commentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});

router.put('/:id', async (req, res) => {
    const requestData = await Comment.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(req.body)
});

router.delete('/:id', async, (req, res) => {
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