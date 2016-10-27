var API_URL = "http://api.giphy.com/v1/gifs/search?"
var app = angular.module("GiphyApp", ['infinite-scroll']);

app.controller("GiphyCtrl", ['$scope', '$http', function($scope, $http){

  $scope.giphys = [];
  $scope.searchTerm = "";
  $scope.oldSearchTerm = "";
  $scope.count = 0;

  $scope.search = function(){
    $http({
      url: API_URL,
      method: 'GET',
      params: {
        q: $scope.searchTerm,
        api_key: 'dc6zaTOxFJmzC',
        offset: $scope.offset,
        limit: 10
      }
    }).then(function(results){
      $scope.giphys = results.data.data;
      console.log(results.data.data);
    })
  }
  $scope.scroll = function (){
    $scope.oldSearchTerm = $scope.searchTerm;
    $scope.offset = 30 + $scope.count;
    $scope.search();
    $scope.count++;
  };

}]);
