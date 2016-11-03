var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user = require('../models/user.js');
/* GET /users listing. */
router.get('/:id', function(req, res, next) {
  user.findById(req.params.id, function (err, user) {
    if (err) return next(err);
    res.render(`/users/${req.params.id}`);
  });
});

router.post('/', function(req, res, next) {
  var newUser = new user(req.body.user)
  newUser.save(function(err, user){
    res.render(`/users/${req.params.id}`)
  })
});


router.put('/:id', function(req, res, next) {
  user.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.delete('/:id', function(req, res, next) {
  user.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
