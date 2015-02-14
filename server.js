var express = require('express');
var mongoose = require('mongoose');
var migrate = require('migrate');
var bodyParser = require('body-parser');
var customer = require('./public/lib/models/customerModel.js');
var product = require('./public/lib/models/productModel.js');
var order = require('./public/lib/models/orderModel.js');
var addProduct = require('./migrations/1423872387134-add-product.js');

var app = express();
var port = 8666;
var mondoUri = "mongodb://localhost:27017/ecommerce";

mongoose.connect(mondoUri);
mongoose.connection.once('open', function() {
	console.log('connected to database at ' + mondoUri);
})

app.use(express.static(__dirname + '/public'));
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
			res.status(420).json(err);
		}
	})
})

app.post('/api/product', function(req, res) {
	product.create(req.body).then(function(response) {
		res.status(200).json(response);
	}, function(err) {
		res.status(420).json(err);
	})
})

app.get('/api/product', function(req, res) {
	product.find({}, function(err, docs) {
		if (!err) {
			if (docs.length === 0) {
				res.status(404).send("no docs found yo!");
			} else {
				res.status(200).json(docs);
			}
		} else {
			res.status(420).json(err);
		}
	})
})

app.post('/api/order', function(req, res) {
	order.create(req.body).then(function(response) {
		res.status(200).json(response);
	}, function(err) {
		res.status(420).json(err);
	})
})

app.get('/api/order', function(req, res) {
	order.find({}, function(err, docs) {
		if (!err) {
			if (docs.length === 0) {
				res.status(404).send('no docs found yo!');
			} else {
				res.status(200).json(docs);
			}
		} else {
			res.status(420).json(err);
		}
	})
})

app.listen(port, function() {
	console.log('listening on port ' + port);
})