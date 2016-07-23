var app = angular.module('GiphyApp', ['infinite-scroll']);

app.controller('GiphySearch', ['$scope', '$http', function($scope, $http) {
  $scope.userSearch = '';

  $scope.searchForGifs = function() {
    $http.get('http://api.giphy.com/v1/gifs/search?', {
      params: {
        q: $scope.userSearch,
        api_key: "dc6zaTOxFJmzC"
      }
    })
    .then(function success(response) {
      console.log(response);
      $scope.gifs = response.data.data

    }, function error(response) {
      console.log('we got an error response: ');
    });
  };

  $scope.$watch('userSearch', function(newValue, oldValue) {
    $http.get('http://api.giphy.com/v1/gifs/search?', {
      params: {
        q: $scope.userSearch,
        limit: 5,
        api_key: "dc6zaTOxFJmzC"
      }
    })
    .then(function success(response) {
      console.log(response);
      $scope.gifs = response.data.data

    }, function error(response) {
      console.log('we got an error response: ');
    });
  });

  $scope.searchMore = function() {
    $http.get('http://api.giphy.com/v1/gifs/search?', {
      params: {
        q: $scope.userSearch,
        offset: 5,
        api_key: "dc6zaTOxFJmzC"
      }
    })
    .then(function success(response) {
      console.log(response);
      $scope.gifs = response.data.data

    }, function error(response) {
      console.log('we got an error response: ');
    });
  }
}]);


