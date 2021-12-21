const router = require('express').Router();
// const fetch = require('node-fetch');
const { Game } = require('../../models');
// get games
router.get('/', async (_req, res) => {
    try{
        let gameData = await Game.findAll();
        res.status(200).json(gameData);
    } catch(error){
        res.status(500).json(error);
    }
});

router.get('/:id', async (req, res) => {
    try{
        //if req.params.id !== null
        //data = Game.findOne({where: {id: req.params.id}})
        //else
        //data = Game.findOne({where: {name: req.body.name}})
        //if !data
        //api request
        //Game.create(api info)
        res.status(200).json({message:"Nothing to see here"});
    } catch(error){
        res.status(500).json({message:"IDK how this is error"});
    }
});

module.exports = router;