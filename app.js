var express = require('express');
var app = express();
  

  

// use the jade templating engine
app.set('view engine', 'jade');


//setup static public directory
app.use(express.static(__dirname + '/public'));   
  
app.get('/', function(req,res) {

  res.render('home', { });
  console.log("GOT A REQUEST");

});                     

// The port on the DEA for communication with the application:
var port = 3000;
// Start server
app.listen(port);
console.log('App started on port ' + port);


