var app = angular.module('GiphyApp', []);

app.controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.userSearch = '';

  $scope.searchForGifs = function() {
    $http.get('http://api.giphy.com/v1/gifs/search?', {
      params: {
        q: $scope.userSearch,
        api_key: 'dc6zaTOxFJmzC'
      }
    })
    .then(function success(res) {
      $scope.giphyResults = res.data.data;
      console.log($scope.giphyResults);
    }, function error(res) {
      console.log(res);
    });
  };
}]);
