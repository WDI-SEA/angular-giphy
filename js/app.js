var app = angular.module('GiphyApp', ['infinite-scroll','ngclipboard']);

app.controller('GiphySearch', ['$scope', '$http' ,
  function($scope,$http) {

  $scope.userSearch = 'Cats';
  $scope.loadMoreGifs = 10;
  $scope.active = true;

  $scope.$watch('userSearch', function(newVal, oldVal) {
    console.log($scope.userSearch)
    $http.get('http://api.giphy.com/v1/gifs/search?', {
      params: {
        q: $scope.userSearch,
        api_key: 'dc6zaTOxFJmzC',
        limit: 10
      }
    })
    .then(function success(response) {
      $scope.giphyResults = response.data.data;
    }, function error(response) {
      console.log(response);
    });
  });

  $scope.searchForMoreGifs = function() {
    console.log($scope.loadMoreGifs);
    console.log('scope.numberOfGifs' + $scope.numberOfGifs);
    $http.get('https://api.giphy.com/v1/gifs/search?', {
      params: {
        q: $scope.userSearch,
        api_key: 'dc6zaTOxFJmzC',
        limit:  $scope.loadMoreGifs
      }
    })
    .then(function success(response) {
      $scope.giphyResults = response.data.data;
      $scope.loadMoreGifs += 10;
      console.log($scope.loadMoreGifs)
    }, function error(response) {
      console.log(response);
    });
  };

}]);
