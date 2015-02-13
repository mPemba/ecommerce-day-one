var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	name: {type: String, required: true, index: true},
	description: {type: String, required: true},
	price: {type: Number, required: true},
	active: {type: Boolean, required: true}
})

module.exports = mongoose.model('product', schema);