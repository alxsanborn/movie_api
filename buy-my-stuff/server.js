var express = require ('express')
    morgan = require('morgan')
    bodyParser = require('body-parser')
    app = express()

var mongoose = require('mongoose')
      mongoose.connect('mongodb://localhost/sample')


var users = require('./routes/users');
var searches = require('./routes/search');

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(function(req,res, next){
  console.log("this is middleware")
  next() //tells the application to proceed in the order in which it was called (i.e. runs app.get...)
}) //runs middleware

app.get('/', function(req, res){
  return res.render('index',{header: 'index'});
    if (req.session.state) {
        res.json({state: req.session.state});
        }
  })

app.use('/users', users)

app.listen(3000, function(err){
    if (err) console.log("could not start server")
    if (!err) console.log("Server is running on port 3000")
  })
