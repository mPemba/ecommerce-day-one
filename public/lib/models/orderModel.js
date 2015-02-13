var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	status: {type: String, enum: ['Filling', 'Shipped', 'Complete']},
	customer: {type: Schema.Types.ObjectId, ref: "Customer"},
	products: [{type: Schema.Types.ObjectId, ref: "Product"}],
	orderName: {type: String, required: true},
	orderNumber: {type: Number, required: true, uniqueness: true},
	addresses: [{
		billing: {
			street: {type: String, required: true},
			city: {type: String, required: true},
			state: {type: String, required: true},
			zip: {type: String, required: true}
		},
		shipping: {
			street: {type: String, required: true},
			city: {type: String, required: true},
			state: {type: String, required: true},
			zip: {type: String, required: true}
		}
	}],
	paymentInfo: {type: String, enum: ['Credit Card', 'Paypal']},
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now},
	subtotal: {type: Number, required: true},
	salesTax: {type: Number, required: true},
	total: {type: Number, required: true}
})

module.exports = mongoose.model('order', schema);


///////////////////////////////

// order = {
// orderName: "aldfjl;dasf",
// orderNumber: 123,
// customer: 2354345345,
// products: [2354, 145435, 24524524, 23542354];
// };

// Order.find({orderName: "aldfjl;dasf"}).populate("customer").exec(function(err, order){
// order.customer.name
// })


// var Mongoose = require('mongoose');
// var Schema = Mongoose.Schema;

// var schema = new Schema ({
// customer: {type: Schema.Types.ObjectId, ref: "Customer"},