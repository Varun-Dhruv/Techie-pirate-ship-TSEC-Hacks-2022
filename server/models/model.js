const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    index: {unique: true}
  }, 
   email: {
      type: String,
      index: { unique: true }
    },
    password: String
    
  });
  
  module.exports = mongoose.model('User', UserSchema);
  
  