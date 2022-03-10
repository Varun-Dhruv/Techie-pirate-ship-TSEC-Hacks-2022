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
   password: String,
   Points_scored_DS :{type: Number, default: 0},
   Points_scored_OS :{type: Number, default: 0},
   Points_scored_CCN :{type: Number, default: 0},
  });
  
  module.exports = mongoose.model('User', UserSchema);
  
  