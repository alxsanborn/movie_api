var mongoose = require('mongoose')

var bcrypt = require('bcrypt');
const saltRounds = 10;
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("my password", salt, function(err, hash) {
        // Store hash in your password DB.
    });
});

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

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

userSchema.pre('save', function(next) {
    var user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

var User = mongoose.model('User', userSchema);

module.exports = User;
