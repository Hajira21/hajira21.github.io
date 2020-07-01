// Entry point for the application

// express application
var express = require('express');
// require the controller we make
var surveyController = require('./surveyController');

var app = express();

// set up template engine
app.set('view engine', 'ejs');

// static files serving
app.use(express.static('./public'));

// fire function from surveyController
surveyController(app);

// listen to port
app.listen(3000);
console.log('You are listening port 3000');