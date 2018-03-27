var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.info(req)
  console.info(next)
  res.render('index', { title: 'Express' });
});

module.exports = router;
