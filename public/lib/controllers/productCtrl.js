var productService = require('../services/productService');
var product = require('../models/productModel.js');

// module.exports = {
// 	post: function(req, res) {
// 		product.create(req.body, function(err, results) {
// 			if (err) {
// 				console.log(err);
// 				res.status(420).json(err);
// 			} else {
// 				res.status(200).json(results);
// 			}
// 		})
// 	}, getAll: function(req, res) {
// 		product.find(function(err, response) {
// 			if (err) {
// 				console.log(err);
// 				res.status(420).json(err);
// 			} else {
// 				res.status(200).json(response);
// 			}
// 		})
// 	}
// }




module.exports.post = function(req, res) {
	productService.save(req.body).then(function(response) {
		res.status(200).json(response);
	}, function(err) {
		res.status(420).json(err);
	})
}

module.exports.get = function(req, res) {
	productService.find(req.query).then(function(response) {
		if (response.length) {
			res.status(200).json(response);
		} else {
			res.status(200).json("absolutely nothing");
		}
	}, function(err) {
		res.status(420).json(err);
	})
}