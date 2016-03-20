var app = angular.module('GiphyApp', [])

app.controller('SearchCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.searchTerm = '';
  $scope.gifs = [];

    $scope.$watch('searchTerm', function (newValue, oldValue) {
      console.log('new value:', newValue);
      console.log('old value:', oldValue);
      console.log('--------------------');
      $scope.search();
    });
  
    $scope.search = function() {
      var req = {
        url: 'http://api.giphy.com/v1/gifs/search?q='+$scope.searchTerm+'&limit=100&api_key=dc6zaTOxFJmzC',
        method: 'GET',
      }; 

    $http(req).then(function success(res) {
      console.log(req);
      $scope.gifs = res.data.data;
      console.log(res.data.data)
    }, function error(res) {
      console.log(res)
    });
  }

}])

