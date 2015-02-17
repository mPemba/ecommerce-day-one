var customerService = require('../services/customerService.js');
var customer = require('../models/customerModel.js');
var q = require('q');

// module.exports = {
// 	getCustomer: function(req, res) {
// 		customer.findOne({_id: req.params.id}).exec().then(function(err, user) {
// 			return res.json(user);
// 		})
// 	},
// 	getCustomers: function(req, res) {
// 		var sort = req.query.sort || '-createdAt';
// 		var skip = req.query.skip || 0;
// 		var limit = Number(req.query.limit) || 100;
// 		if (limit > 1000) {
// 			limit = 1000;
// 		}
// 		customer
// 		    .find()
// 		    .limit(limit)
// 		    .skip(skip)
// 		    .sort(sort)
// 		    .select('name email address')
// 		    .exec().then(function(err, users) {
// 		    	return res.json(users);
// 		    })
// 	}
// }




module.exports.post = function(req, res) {
    customerService.save(req.body).then(function(response) {
		res.status(200).json(response);
	}, function(err) {
		res.status(420).json(err);
	})
}

module.exports.get = function(req, res) {
	customerService.find(req.query).then(function(response) {
		if (response.length) {
			res.status(200).json(response);
		} else {
			res.status(200).json("absolutely nothing");
		}
	}, function(err) {
		  res.status(420).json(err);
	})
}