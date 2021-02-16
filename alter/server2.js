var http = require('http');
var qs = require('querystring');
var express = require('express');
var path = require('path');
var server2=express();
server2.use(express.static(path.join(__dirname, './')));
//var el = document.createElement( 'html' );
//el.innerHTML = "<html><head><title>titleTest</title></head><body><p>hello world!</p></body></html>";
var pageHTML2 = "<!DOCTYPE HTML ><html><head><title>titleTest</title></head><body><p>hello world!</p></body></html>";
var pageHTML = `<html lang="pl"><head><meta charset="utf-8"> <title>belka-obciążenia </title><meta name="description" content="The HTML5">
  <meta name="Maciej_Marosz" content="IT POL"><link rel='stylesheet' href='.//belka.css' />
  <link rel="shortcut icon" href="#"><link rel="icon" href="data:;base64,iVBORw0KGgo=">
  </script><script src = "./jquery-3.4.1.min.js"></script>
</head>
<body>

<div id = "a2">Obliczanie  belki żelbetowej</div>
<br>
<div class="comments" >podaj dane</div>
<br>

<div id="form1" >
<form id="formula" >
hbelki [mm]:  &nbsp &nbsp <input type="text" name="hbelki" id="hbelki"><br>
szer-belki [m]: &nbsp <input type="text" name="szbelki" id="szbelki"><br>
otulina [mm]:   &nbsp <input type="text" name="otulina" id="otulina"><br>
błąd [mm]: &nbsp &nbsp &nbsp <input type="text" name="blad" id="blad"><br>
fi [mm]: &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp <input type ="text" name="fi" id="fi"><br>
moment zginający [MNm]: <input type = "text" name = "mz" id="mz"><br>
 <input type="button" onclick="myFunction()" value = "OBLICZ">
</form>
</div>


<div id="form2">Podaj klasę betonu wg Eurokodu 2: <br>
	 <form id="e2">
  <input type="radio" id="0" name="klbetonu" value="C12/15">
  <label for="C12/15">C12/15</label><br>
  <input type="radio" id="1" name="klbetonu" value="C16/20">
  <label for="C16/20">C16/20</label><br>
  <input type="radio" id="2" name="klbetonu" value="C20/25">
  <label for="C20/25">C20/25</label><br>
    <input type="radio" id="3" name="klbetonu" value="C25/30">
  <label for="C25/30">C25/30</label><br>
    <input type="radio" id="4" name="klbetonu" value="C30/37">
  <label for="C30/37">C30/37</label><br>
    <input type="radio" id="5" name="klbetonu" value="C35/45">
  <label for="C35/45">C35/45</label> <br>
  <input type="radio" id="6" name="klbetonu" value="C40/50">
  <label for="C40/50">C40/50</label><br>
    <input type="radio" id="7" name="klbetonu" value="C45/55">
	  <label for="C45/55">C45/55</label><br>
   <input type="radio" id="8" name="klbetonu" value="C50/60">
	  <label for="C50/60">C50/60</label><br>
	   <input type="radio" id="9" name="klbetonu" value="C55/65">
	  <label for="C55/65">C55/65</label><br>
	   <input type="radio" id="10" name="klbetonu" value="C60/70">
	  <label for="C60/70">C60/70</label><br><br>
</form>
</div>
<div id="form3">
	<form id= "klbetonu">
	  <input type="radio" id="0" name="cechab" value="Wytrzymałość gwarantowana fG c,cube">
	  <label for="klb2">Wytrzymałość gwarantowana fG c,cube</label><br>
	   <input type="radio" id="1" name="cechab" value="Wytrzymałość charakterystyczna fck">
	  <label for="klb3">Wytrzymałość charakterystyczna fck</label><br>
	   <input type="radio" id="2" name="cechab" value="Wytrzymałość obliczeniowa fcd(beton zbrojony)">
	  <label for="klb4">Wytrzymałość obliczeniowa fcd(beton zbrojony)</label><br>
	  <input type="radio" id="3" name="cechab" value="Wytrzymałość obliczeniowa f*cd (beton niezbrojony)">
	  <label for="klb5">Wytrzymałość obliczeniowa f*cd (beton niezbrojony)</label><br><br>
</form>
</div>
	<form id= "klStali">
	  <input type="radio" id="0" name="klS" value="St0S0-b">
	  <label for="St0S0-b">St0S0-b</label><br>
	   <input type="radio" id="1" name="klS" value="St3SX-b">
	  <label for="St3SX-b">St3SX-b</label><br>
	   <input type="radio" id="2" name="klS" value="St3SY-b">
	  <label for="St3SY-b">St3SY-b</label><br>
	  <input type="radio" id="3" name="klS" value="St3S-b">
	  <label for="St3S-b">St3S-b</label><br>
	  	  <input type="radio" id="4" name="klS" value="PB 240">
	  <label for="PB 240">PB 240</label><br>
	  	  <input type="radio" id="5" name="klS" value="St50B'">
	  <label for="St50B">St50B</label><br>
	  	  <input type="radio" id="6" name="klS" value="18G2-b">
	  <label for="18G2-b">18G2-b</label><br>
	  	  <input type="radio" id="7" name="klS" value="20G2Y-b">
	  <label for="20G2Y-b">20G2Y-b</label><br>
	   <input type="radio" id="8" name="klS" value="25G2S">
	  <label for="25G2S">25G2S</label><br>
	   <input type="radio" id="9" name="klS" value="35G2Y">
	  <label for="35G2Y">35G2Y</label><br>
	   <input type="radio" id="10" name="klS" value="20G2Y-b">
	  <label for="20G2Y-b">20G2Y-b</label><br>
	   <input type="radio" id="11" name="klS" value="34GS">
	  <label for="34GS">34GS</label><br>
	    <input type="radio" id="12" name="klS" value="RB400">
	  <label for="RB400">RB400</label><br>
	    <input type="radio" id="RB400W" name="klS" value="RB400W">
	  <label for="RB400W">RB400W</label><br>
	    <input type="radio" id="13" name="klS" value="20G2VY-b">
	  <label for="20G2VY-b">20G2VY-b</label><br>
	    <input type="radio" id="14" name="klS" value="RB500">
	  <label for="klb5">RB500</label><br>
	   <input type="radio" id="15" name="klS" value="RB500 W">
	  <label for="RB500 W">RB500 W</label><br><br>


</form>


</div>

<div id="wyniki_1">
<a href="belka-wyniki.html">Tu wyniki</a>
 <!-- <button type="button" class="button1" onclick="location.href = "file:///home/maciej/javascript/js1/belka/belka-wyniki.html">Drukuj wyniki</button>
 <button onclick="window.location.href='belka-wyniki.html'>CLICK ME</button>  -->
 </div>`
	console.log('server at 1337');
	var server = http.createServer(function (req, res) {
    var requestData = '';
   
    // check HTTP method and show the right content
      
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(pageHTML2); // serve our HTML code
    
   
   
  });
   
  server.listen(1337, '127.0.0.1'); 
      