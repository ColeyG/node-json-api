const express = require('express');
const decode = require('unescape');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Music Collection', genre: decode(req.query.genre) });
});

router.get('/about', (req, res, next) => {
  res.render('about', { title: 'Music Collection' });
});

router.get('/tech', (req, res, next) => {
  res.render('tech', { title: 'Music Collection' });
});

module.exports = router;
