var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  business_name: String,
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  searches: [{type: Object, ref: 'User'}],
  created_at: Date,
  updated_at: Date
});

var User = mongoose.model('User', userSchema);

module.exports = User;
