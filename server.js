//Dependencies
var express = require ('express');
var bodyParser = require('body-parser');
var path = require('path');

//Express Configuration Basic properties for our express server
var app = express();
//Initial Port
var PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());


//Routes===============================================

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);





//Listener to start the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});