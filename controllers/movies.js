var movies = angular.module('movies', []);

movies.controller('movieController', function ($scope, $http) {

    $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/155655062.json', {
        params: {
            apikey: 'wq98h8vn4nfnuc3rt2293vru',
            callback: 'JSON_CALLBACK'
        }
    })
    .success(function (data) {
        $scope.movies = data;
    });
     
     
     
      //$scope.apiKey = "[wq98h8vn4nfnuc3rt2293vru]";
      
      //$http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/155655062.json?apikey=' + $scope.apiKey + '/?callback=JSON_CALLBACK')
      //.success(function(data) 
          // { $scope.movies = data;})
       // .error(function(error) {});
 
     });
