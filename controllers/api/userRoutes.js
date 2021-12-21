const router = require('express').Router();
const { User } = require('../../models');
const SUPERENCRYPTION = (_encryptionData) => {return 'Psych you thought we would return the actual password hash, what do you think we are stupid?';}

// The `/api/users` endpoint
router.get('/:id', async (req, res) => {
  try{
    const userData = await User.findOne({where: {id: req.params.id}})
    userData.password = SUPERENCRYPTION(userData.password);
    res.status(200).json(userData);
  } catch(err) {
    res.status(500).json(err);
  }
});

//Create a single user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      userData.password = SUPERENCRYPTION(userData.password);
      res.status(200).json({
        message: 'You are now logged in!', 
        user: userData,
        logged_in: true
      });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//Get a session logged into a user that has already been made
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;
      userData.password = SUPERENCRYPTION(userData.password);
      res.json({ user: userData, message: 'You are now logged in!', logged_in: true});
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

