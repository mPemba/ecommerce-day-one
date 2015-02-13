var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	orderName: {type: String, required: true},
	orderNumber: {type: Number, required: true},
	billingAddress: {},
	shippingAddress: {},
	paymentInfo: {},
	items: {},
	subtotal: {type: Number, required: true},
	total: {type: Number, required: true}
})