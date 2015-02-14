var customerModel = require('../models/customerModel.js');
var q = require('q');

module.exports.save = function(customer) {
	var dfd = q.defer();
	customerModel(customer).save(function(err, res) {
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
	customerModel.find(query, function(err, results) {
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
	customerModel.findOne(query, function(err, results) {
		if (!err) {
			dfd.resolve(results);
		} else {
			dfd.reject(err);
		}
	})
	return dfd.promise;
}