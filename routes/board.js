var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('board', {
    title: 'Board Display'
  });
});

router.get('/gridbuild', (req, res) => {
  let query = req.query;
  console.log(`rows ${query.rows}`);
  console.log(`cols ${query.cols}`);
  res.render('board', { title: 'Board Display', query });
});

module.exports = router;
