var mongoose = require('mongoose');

var mentorSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true
  }, 
  skill: {
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
}
);

module.exports = mongoose.model('mentors', mentorSchema);