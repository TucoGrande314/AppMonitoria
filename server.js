
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongdb://localhost/rest_test');

var app = express();
app.use(bodyParser.urlenconded({ extended: true}));
app.use(bodyParser.json());

app.use('/api', require('./route/api'));

app.listen(3000);
console.log('API is running on port 3000')