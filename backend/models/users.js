const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  role: {
    type: String, 
    default: 'user'
  },
  passwordDigest: {
    type: String,
    required: true
  },
  joined: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);

