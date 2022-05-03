var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("URL PARAMS:", req.query)
  var name = req.query.name || "World" // double pipes is an OR operator that allows us to use a default value if the url params are null / not specified
  var message = "Hello, " + name
  res.render('home', { message: message });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  console.log("URL PARAMS:", req.query)
  var name = req.query.name || "World" // double pipes is an OR operator that allows us to use a default value if the url params are null / not specified
  var message = "Hello, " + name
  res.render('home', { message: message });
});

module.exports = router;
