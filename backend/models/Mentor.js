var mongoose = require('mongoose');

var MentorSchema = new mongoose.Schema({
  name: String,
  skills: String,
  organization: String,
  linkedin: String,
});

module.exports = mongoose.model('Mentor', MentorSchema);