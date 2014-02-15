var movies = angular.module('movies', []);

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

