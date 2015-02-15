var productModel = require('../models/productModel.js');
var q = require('q');

module.exports.save = function(product) {
	var dfd = q.defer();
	productModel(product).save(function(err, res) {
		if (!err) {
			dfd.resolve(res);
		} else {
			dfd.reject(err);
		}
	})
	return dfd.promise;
}

module.exports.find = function(query) {
	var dfd = q.defer();
	productModel.find(query, function(err, results) {
		if (!err) {
			dfd.resolve(results);
		} else {
			dfd.reject(err);
		}
	})
	return dfd.promise;
}

module.exports.findOne = function(query) {
	var dfd = q.defer();
	productModel.findOne(query, function(err, results) {
		if (!err) {
			dfd.resolve(results);
		} else {
			dfd.reject(err);
		}
	})
	return dfd.promise;
}

