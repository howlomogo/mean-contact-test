var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');


var app = express();

const route = require('./routes/route');

// Port Number
const port = 3000;

// Testing Server
app.get('/', (req, res)=>{
	res.send('foobar');
});

app.listen(port, ()=>{
	return console.log('Server Started at port: ' + port);
});