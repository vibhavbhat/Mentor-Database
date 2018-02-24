var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mentorSchema = new Schema({
  name: {
    type: String, 
    required: true
  }, 
  skills: {
    type: String, 
    required: true
  }, 
  organization: {
    type: String,
    required: true 
  }, 
  linkedin: {
    type: String,
    required: true 
  },
}, { timestamps: true });

module.exports = mongoose.model('mentors', mentorSchema);