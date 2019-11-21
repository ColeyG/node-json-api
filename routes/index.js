const express = require('express');
const decode = require('unescape');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Music Collection', genre: decode(req.query.genre) });
});

module.exports = router;
