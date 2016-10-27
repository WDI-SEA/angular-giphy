
var app = angular.module('GiphyApp', [])



app.controller("giphyCtrl", ["$scope", "$http", function($scope, $http){
  $scope.searchTerm = "";
  $scope.giphs = [];
  $scope.error = "";


  $scope.search = function(){
    if(!$scope.searchTerm){
      $scope.error = "You need to provide something to search for";
      return;
    }
    else if(!isAlphaNumeric($scope.searchTerm)){
     $scope.error = "Invalid characters detected.";
      return; 
    };

    $http({
      method: "GET",
      url: "http://api.giphy.com/v1/gifs/search",
      params: {
        q: $scope.searchTerm,
      	api_key: "dc6zaTOxFJmzC",
      	limit: 30
      }
    }).then(function success(results){
      //it worked
      $scope.error = "";
      $scope.giphs = results.data.data;
      console.log(results.data.data);
    }, function error(res){
      //it didn't work
      $scope.error = "the request failed. see console for details";
      console.log(res);
    }); 

  }

}]);



//Return true if input is only alphanumeric + space + underscores
function isAlphaNumeric(input){
  return /^[a-z\d\-_\s]+$/i.test(input);
}

