const router = require('express').Router();
// TODO: const fetch = require('node-fetch');
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
        let data;
        if (req.params.id !== 'none')
            data = await Game.findOne({where: {id: req.params.id}});
        else
            if (!req.body.name) {res.status("400").json({message: "No name given in request body."}); return;}
            data = await Game.findOne({where: {name: req.body.name}});
        //TODO: figure out how to use twitch api
        res.status(200).json({message:"Nothing to see here", game: data});
    } catch(error){
        res.status(500).json({message:"IDK how this is error"});
    }
});

module.exports = router;