var http = require('http');
var qs = require('querystring');
var express = require('express');
var path = require('path');
var app=express();

//var el = document.createElement( 'html' );
//el.innerHTML = "<html><head><title>titleTest</title></head><body><p>hello world!</p></body></html>";
//var pageHTML2 = "<!DOCTYPE HTML ><html><head><title>titleTest</title></head><body><p>hello world!</p></body></html>";

	console.log('server at 1338');
	
	app.use(express.static(__dirname + "/"));
	app.get('/', function (req,res) {
			res.sendFile(path.join(__dirname + '/menu.html'));
	});
	//var server = http.createServer(function (req, res) {
   // var requestData = '';
	
   
    // check HTTP method and show the right content
      
     // res.writeHead(200, {'Content-Type': 'text/html'});
     // res.end(pageHTML); // serve our HTML code
    
   
   
  
   app.listen(1338);
 // server.listen(1338, '127.0.0.1'); 
      