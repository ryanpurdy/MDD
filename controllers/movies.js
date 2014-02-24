var movies = angular.module('movies', ['ngRoute']);



movies.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/nowShowing',{
			templateUrl:'views/nowShowing.html',
			controller: 'movieController'})
		.when('/comingSoon',{
			templateUrl:'views/comingSoon.html',
			controller: 'movieController2'})
		.when('/contact',{
			templateUrl:'views/contact.html'})	
		.when('/confirm',{
			templateUrl:'views/confirm.html'})		

		.otherwise({
			redirectTo: '/nowShowing'
		});
}]);

movies.controller('movieController', function ($scope, $http) {

    $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/771303861.json', {
        params: {
            apikey: 'wq98h8vn4nfnuc3rt2293vru',
            callback: 'JSON_CALLBACK'
        }
    })
    
    .success(function (data) {
        $scope.movies = data;
    });
    
});

movies.controller('movieController2', function ($scope, $http) {

    $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/771305753.json', {
        params: {
            apikey: 'wq98h8vn4nfnuc3rt2293vru',
            callback: 'JSON_CALLBACK'
        }
    })
    
    .success(function (data) {
        $scope.movies = data;
    });
    
});



