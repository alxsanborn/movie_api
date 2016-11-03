var express = require ('express')
    morgan = require('morgan')
    bodyParser = require('body-parser')
    app = express()

var mongoose = require('mongoose')
      mongoose.connect('mongodb://localhost/sample')

var index = require('./routes/index');
var users = require('./routes/user');
var searches = require('./routes/search');



app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(function(req,res, next){
  console.log("this is middlware")
  next() //tells the application to proceed in the order in which it was called (i.e. runs app.get...)
}) //runs middleware

app.use('/', index);
app.use('/users', users);
app.use('/searches', searches);

app.listen(3000, function(err){
    if (err) console.log("could not start server")
    if (!err) console.log("Server is running on port 3000")
  })
