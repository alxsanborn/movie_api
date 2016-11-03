var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
    response.json({hello: 'world'})
    console.log('sending response')
    response.render('index', {title: 'index'})
  })

module.exports = router;
