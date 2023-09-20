var express = require('express');
var router = express.Router();   // create router 

router.get('/day', (req, res) => {
  res.send('<h1>Daily Report</h1>');
});

router.get('/month',
  (req, res) => {
    res.send('<h1>Monthy Report</h1>');
  })


// Catch all other urls
router.get('/*',
  (req, res) => {
    res.send('<h1>Reports - Unknown Operation</h1>');
  }
)

module.exports = router;
