var Product = require('./../public/lib/models/productModel.js');
var server = require('./../server.js');

exports.up = function(next){
	var guitar = new Product({
		name: "Acoustic Guitar", 
		description: "Steel String Stella Harmony Lady Killa",
		price: 2.99,
		active: true
	});
	guitar.save(function(err) {
		if (err) {
			console.log(err);
			next(err);
		}
		else {
			console.log("seed data included");
			next();
		}
	})
};

exports.down = function(next){
  next();
};
