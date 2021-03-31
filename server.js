// 'use strict';
// var http = require('http');
// var port = process.env.PORT || 1337;
// var path = require('path');
// var express = require('express')
// var session = require('express-session')
// var bodyParser = require('body-parser')

// var publicDir = require('path').join(__dirname,'/public');

// var app = express();
// app.use(express.static(publicDir))//images
// app.use(session({
// 	secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true
// }));
// app.use(bodyParser.urlencoded({extended : true}));
// app.use(bodyParser.json());


// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'launchingsoon/html' });
//     //res.end('Launching Soon\n');
//     res.redirect('/alerts');
// }).listen(port);


// app.get('/alerts', function (request, response) {
// 	response.sendFile(path.join(__dirname + '/launchingsoon.ejs'));
// });

var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var publicDir = require('path').join(__dirname,'/public');

var app = express();
app.set('port',process.env.PORT||8080)
app.set('view engine','ejs');
app.use(express.static(publicDir))//images
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/views/launchingsoon.html'));
});

app.listen(PORT);


