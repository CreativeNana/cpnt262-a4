// Load dependencies
const path = require('path');
const express = require('express');
const ejs = require('ejs');

// Import models
const foods = require('./public/js/foods');

// Require and configure dotenv which is a zero-dependency module
require('dotenv').config()

// Create express app
const app = express();

// Set view engine
app.set('view engine', 'ejs');

// Invoke the express.static middleware function to use sources in the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse object or array data to URL encoding format(from post request data)
app.use(express.urlencoded({ extended: true }));

// Create Index GET endpoint
app.get('/', function(request, response){
    response.render('pages/index', 
      { title: "Home", current: "c_index", h_title: "Delicacy", h_description: "Delicious, Delightful and Differentiated" })
});

// Create Gallery GET endpoint
app.get('/gallery', function(request, response){
  response.render('pages/gallery', 
    { title: "Gallery", current: "c_gallery", h_title: "Gallery", h_description: "Flavour, Mood, and Memory" })
});

// Create Subscribe GET endpoint
app.get('/subscribe', function(request, response){
  response.render('pages/subscribe', 
    { title: "Subscribe", current: "c_subscribe", h_title: "Subscribe", h_description: "Hello, Let's start your journey with us" })
});

// Create Gallery virtual JSON API
app.get('/api/v0/gallery', function(request, response){
  response.json(foods);
});

// Return 404 errors when a file cannot be found
app.use(function(request, response, next) {
  response.status(404);
  response.send('404: File Not Found');
});

// Set port preferrence with default
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});