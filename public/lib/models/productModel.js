var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	name: {type: String, required: true, index: true},
	description: {type: String, required: true},
	price: {type: Number, required: true},
	active: {type: Boolean, required: true},
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('product', schema);