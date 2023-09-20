var express = require('express');
var router = express.Router();   // create router 

router.get('/', (req, res) => {
  res.send('<h1>Admin Operations </h1>');
});

router.get('/create',
  (req, res) => {
    res.send('<h1>Admin Operations - Creating New User</h1>');
  })


// Catch all other urls
router.get('/*',
  (req, res) => {
    res.send('<h1>Admin - Unknown Operation</h1>');
  }
)

module.exports = router;
