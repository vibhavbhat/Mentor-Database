// NPM Imports
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const app = express();

// Local Imports & Constants
require('dotenv').config(); // load env vars
const PORT = process.env.PORT || 3000;
const api = require('./backend/routes');
const db = 'mongodb://sxTalent:sxTalentDatabase@ds231228.mlab.com:31228/startup_exchange';

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(db);

app.use(express.static(path.join(__dirname, 'public')));


// Route API Calls to seperate router
app.use('/api', api);

// Render React page
app.get('/*', (request, response) => {
  response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

app.listen(PORT, error => {
  error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});


module.exports = app;