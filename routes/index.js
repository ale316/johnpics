var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  var images = fs.readdirSync('public/images');
  var image = images[Math.floor(Math.random()*images.length)];
  res.render('index', { pic: image });
});

module.exports = router;
