var express = require('express');
var mongoose = require('mongoose');
var migrate = require('migrate');
var bodyParser = require('body-parser');

var customer = require('./public/lib/models/customerModel.js');
var product = require('./public/lib/models/productModel.js');
var order = require('./public/lib/models/orderModel.js');

var addProduct = require('./migrations/1423872387134-add-product.js');
var customerCtrl = require('./public/lib/controllers/customerCtrl.js');
var orderCtrl = require('./public/lib/controllers/orderCtrl.js');
var productCtrl = require('./public/lib/controllers/productCtrl.js');

var customerService = require('./public/lib/services/customerService.js');
var productService = require('./public/lib/services/productService.js');
var orderService = require('./public/lib/services/orderService.js');

var app = express();
var port = 8666;
var mondoUri = "mongodb://localhost:27017/ecommerce";

mongoose.connect(mondoUri);
mongoose.connection.once('open', function() {
	console.log('connected to database at ' + mondoUri);
})

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.post('/api/customer', customerCtrl.post);
app.get('/api/customer', customerCtrl.get);

app.post('/api/product/', productCtrl.post);
app.get('/api/product/', productCtrl.get);

app.post('/api/order', orderCtrl.post);
app.get('/api/order', orderCtrl.get);

app.listen(port, function() {
	console.log('listening on port ' + port);
})