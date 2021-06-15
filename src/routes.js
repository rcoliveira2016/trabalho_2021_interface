var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/home');
});

router.get('/fala', (req, res) => {
    res.render('pages/fala');
});

router.get('/playlist', (req, res) => {
    res.render('pages/playlist');
});

module.exports = router;