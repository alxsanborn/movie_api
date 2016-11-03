var express = require('express');
var router = express.Router();

var Search = require('../models/search')

/* GET searches listing. */
router.get('/searches', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/searches', function(req, resp){
  var newSearch = new Search(req.body.search)
  newSearch.save(function(err, search){
    res.json(search)
  })
})

module.exports = router;
