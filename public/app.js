var app = angular.module('eCom', ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/templates/homeTmpl.html',
		controller: 'mainCtrl'
	})
	.when('/customer', {
		templateUrl: 'templates/customerTmpl.html',
		controller: 'mainCtrl'
	})
	.otherwise({
		redirectTo: '/'
	})
})