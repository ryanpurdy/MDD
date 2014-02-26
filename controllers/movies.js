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
		.when('/terms',{
			templateUrl:'views/terms.html'})	
		.when('/help',{
			templateUrl:'views/help.html'})	
		.when('/copyright',{
			templateUrl:'views/copyright.html'})	

		.otherwise({
			redirectTo: '/nowShowing'
		});
}]);

movies.controller('movieController', function ($scope, $http) {

    $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/771351626.json', {
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

    $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/771247277.json', {
        params: {
            apikey: 'wq98h8vn4nfnuc3rt2293vru',
            callback: 'JSON_CALLBACK'
        }
    })
    
    .success(function (data) {
        $scope.movies = data;
    });
    
});


  	

