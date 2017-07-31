// ./node_modules/.bin/nodemon <-- nodemon

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');


var app = express();

const route = require('./routes/route');

// Connect to mongoDB
mongoose.connect('mongodb://localhost:27017/contactlist');

// On Connection
mongoose.connection.on('connected',()=>{
	console.log('Connect to database mongodb @ 27017');
});

mongoose.connection.on('error', (err)=>{
	if(err) {
		console.log('Error in Databse connection: ' + err);
	}
});

// Port Number
const port = 3000;

// Middleware - CORS
app.use(cors());

// Middleware - BodyParser
app.use(bodyparser.json());

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);

// Testing Server
app.get('/', (req, res)=>{
	res.send('foobar');
});

app.listen(port, ()=>{
	return console.log('Server Started at port: ' + port);
});