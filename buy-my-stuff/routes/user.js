var express = require('express');
var router = express.Router();

var User = require('../models/user')

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/users', function(req, resp){
  var newUser = new User(req.body.user)
  newUser.save(function(err, user){
    res.json(user)
  })
})

module.exports = router;
