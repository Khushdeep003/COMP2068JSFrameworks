const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'My Favorite Fashion Brands' });
});

router.get('/hm', function(req, res, next) {
    res.render('hm', { title: 'H&M' });
});

router.get('/zara', function(req, res, next) {
    res.render('zara', { title: 'Zara' });
});

router.get('/gucci', function(req, res, next) {
    res.render('gucci', { title: 'Gucci' });
});

router.get('/dior', function(req, res, next) {
    res.render('dior', { title: 'Dior' });
});

module.exports = router;
