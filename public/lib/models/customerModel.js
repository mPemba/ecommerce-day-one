var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	name: {type: String, required: true, index: true},
	email: {type: String, required: true, uniqueness: true, lowercase: true},
	addresses: [{
		address: {type: String, required: true, uppercase: true},
		city: {type: String, required: true, uppercase: true},
		state: {type: String, required: true, uppercase: true},
		zip: {type: String, required: true},
		kind: {type: String, enum: ['Billing', 'Shipping', 'Both'], default: 'Both'}
	}], 
	phone: [{
		home: {type: Number, required: true},
		work: {type: Number}
	}],
	password: {type: String, required: true, uniqueness: true},
	active: {type: Boolean, required: true}
})

module.exports = mongoose.model('customer', schema);

///name, email address, addresses (billing and shipping), phone numbers (home, work, etc), password