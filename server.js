var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var customer = require('./public/lib/models/customerModel.js');

var app = express();
var port = 8666;
var mondoUri = "mongodb://localhost:27017/ecommerce";

mongoose.connect(mondoUri);
mongoose.connection.once('open', function() {
	console.log('connected to database at ' + mondoUri);
})

app.use(bodyParser.json());

app.post('/api/customer', function(req, res) {
	customer.create(req.body).then(function(response) {
		res.status(200).json(response);
	}, function(err) {
		res.status(420).json(err);
	})
})

app.get('/api/customer', function(req, res) {
	customer.find({}, function(err, docs) {
		if (!err) {
			if (docs.length === 0) {
				res.status(404).send("no docs found yo!");
			} else {
				res.status(200).json(docs);
			}
		} else {
			res.status(418).json(err);
		}
	})
})




app.listen(port, function() {
	console.log('listening on port ' + port);
})