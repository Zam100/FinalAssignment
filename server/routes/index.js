var express = require('express');
var router = express.Router();

/* GET home page.*/
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home'  
  });
});


/* GET home page. */
router.get('/supercar', function(req, res, next) {
  res.render('index', { 
    title: 'Supercar Inventory'  
  });
});





/* GET Contact page. */
router.get('/about', function(req, res, next) {
  res.render('home.ejs', { 
    title: 'About'  
  });
});

module.exports = router;
