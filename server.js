var express = require("express");
var bodyParser = require("body-parser");
var path = require ("path");

var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());


// Start listening on PORT
app.listen(PORT, function() {
    console.log('Listening: ' + PORT);
  });