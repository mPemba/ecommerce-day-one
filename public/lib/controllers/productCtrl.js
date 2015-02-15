var productService = require('../services/productService');

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