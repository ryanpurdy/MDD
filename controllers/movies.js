var movies = angular.module('movies', ['ngRoute']);



movies.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/nowShowing',{
			templateUrl:'views/nowShowing.html',
			controller: 'movieController'})
		.when('/comingSoon',{
			templateUrl:'views/comingSoon.html',
			controller: 'movieController2'})
		.when('/confirm',{
			templateUrl:'views/confirm.html'})	
		.when('/fail',{
			templateUrl:'views/fail.html'})	
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
        if ($scope.movies.title == "") {
	        $scope.movies.title = "No Title Provided";
        }
        if ($scope.movies.mpaa_rating == "") {
	        $scope.movies.mpaa_rating = "No Rating Provided";
        }
        if ($scope.movies.runtime == "") {
	        $scope.movies.runtime = "No Runtime Provided";
        }
        if ($scope.movies.synopsis == "") {
	        $scope.movies.synopsis = "No Synopsis Provided";
        }
    });
    
    
    
});

movies.controller('movieController2', function ($scope, $http) {

    $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/9414.json', {
        params: {
            apikey: 'wq98h8vn4nfnuc3rt2293vru',
            callback: 'JSON_CALLBACK'
        }
    })
    
    .success(function (data) {
        $scope.movies = data;
        if ($scope.movies.title == "") {
	        $scope.movies.title = "No Title Provided";
        }
        if ($scope.movies.mpaa_rating == "") {
	        $scope.movies.mpaa_rating = "No Rating Provided";
        }
        if ($scope.movies.runtime == "") {
	        $scope.movies.runtime = "No Runtime Provided";
        }
        if ($scope.movies.synopsis == "") {
	        $scope.movies.synopsis = "No Synopsis Provided";
        }
    });
    
});


  	

