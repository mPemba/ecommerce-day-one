var orderModel = require('../models/orderModel.js');
var q = require('q');

module.exports.save = function(product) {
	var dfd = q.defer();
	orderModel(order).save(function(err, response) {
		if (!err) {
			dfd.resolve(response);
		} else {
			dfd.reject(err);
		}
	})
	return dfd.promise;
}

module.exports.find = function(query) {
	var dfd = q.defer();
	orderModel.find(query, function(err, results) {
		if (!err) {
			dfd.resolve(results);
		} else {
			dfd.reject(err);
		}
	})
	return dfd.promise;
}

// module.exports.find = function(query) {
// 	var dfd = q.defer();
// 	orderModel.find(query).populate('customer').exec(function(err, results) {
// 		if (!err) {
// 			dfd.resolve(results);
// 		} else {
// 			dfd.reject(err);
// 		}
// 	})
// 	return dfd.promise;
// }