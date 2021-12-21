const router = require('express').Router();
const path = require('path')

router.get('/reviews', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../public/reviewpage.html'))
  } catch (err) {
    res.status(404);
  }
});

router.get('/login', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../public/login.html'))
  } catch (err) {
    res.status(404);
  }
});

router.get('/index', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  } catch (err) {
    res.status(404);
  }
});

router.get('/review', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../public/review.html'))
  } catch (err) {
    res.status(404);
  }
});

router.get('/user', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../public/user.html'))
  } catch (err) {
    res.status(404);
  }
});




module.exports = router;
