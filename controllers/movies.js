var movies = angular.module("movies", []); //quotes are name of this file
movies.controller("movieController", function ($http, $scope){ //quotes are name of function called in index
     
     $http.jsonp("http://api.rottentomatoes.com/api/public/v1.0.json?apikey=[wq98h8vn4nfnuc3rt2293vru]").sucess(function(data){$scope.movies = data}).error(function(data){});
       
       
        
     }
    )
