var app = angular.module('GiphyApp', ['infinite-scroll']);

app.controller('GiphySearch', ['$scope', '$http', function($scope,$http) {

  $scope.userSearch = '';

  $scope.$watch('userSearch', function(newVal, oldVal) {
    console.log($scope.userSearch)
    $http.get('http://api.giphy.com/v1/gifs/search?', {
      params: {
        q: $scope.userSearch,
        api_key: 'dc6zaTOxFJmzC',
        limit: 6
      }
    })
    .then(function success(response) {
      console.log(response.data.data);
      $scope.giphyResults = response.data.data;

    }, function error(response) {
      console.log(response);
    });
  });

  $scope.page = 0;

  $scope.searchForMoreGifs = function() {
    $scope.page += 1;
    $http.get('http://api.giphy.com/v1/gifs/search?', {
      params: {
        q: $scope.userSearch,
        api_key: 'dc6zaTOxFJmzC',
        limit: 6,
        offset: $scope.page
      }
    })
    .then(function success(response) {
      console.log(response.data.data);
      $scope.giphyResults = response.data.data;

    }, function error(response) {
      console.log(response);
    });
  };

}]);
