module.exports.post = function(req, res) {
	order.create(req.body).then(function(response) {
		res.status(200).json(response);
	}, function(err) {
		res.status(420).json(err);
	})
})

module.exports.get = function(req, res) {
	order.find({}, function(err, docs) {
		if (!err) {
			if (docs.length === 0) {
				res.status(404).send('no docs found yo!');
			} else {
				res.status(200).json(docs);
			}
		} else {
			res.status(420).json(err);
		}
	})
})