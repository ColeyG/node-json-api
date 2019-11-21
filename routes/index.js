const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Music Collection', genre: req.query.genre });
});

module.exports = router;
