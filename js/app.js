var app = angular.module('GiphyApp', []);

app.controller("SearchCtrl", ['$scope', '$http', function($scope, $http) {
  $scope.searchTerm='';

  $scope.gifs=[];

  $scope.search = function() {
    var req = {
      url: 'http://api.giphy.com/v1/gifs/search',
      method: 'GET',
      params: {
        q: $scope.searchTerm,
        api_key: "dc6zaTOxFJmzC"
      }
    };

    $http(req).then(function success(res) {
      $scope.gifs = res.data.data;
      console.log($scope.gifs);
    }, function error(res) {
      console.log(res);
    });
  }

}]);
