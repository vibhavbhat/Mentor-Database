// NPM Packages
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { check, oneOf, validationResult } = require('express-validator/check');
//Local Imports
const Mentor = require('./mentor');
// const db = process.env.MONGOLAB_URI;
const db = 'mongodb://sxTalent:sxTalentDB@ds231228.mlab.com:31228/startup_exchange';

mongoose.Promise = global.Promise;
mongoose.connect(db);
console.log(db);

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));


  
router.route('/')
    .get((req, res) => {
        console.log("reached the '/' ");
    })

router.use('/mentor', Mentor);

module.exports = router;