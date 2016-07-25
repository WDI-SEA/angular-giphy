GiphyApp = angular.module('GiphyApp', ['infinite-scroll'])

// GiphyApp.run(function() {
//   console.log('App has loaded!');
//   Populate();
// });

GiphyApp.controller('GifSearch', ['$scope', '$http', function($scope, $http) {

  Populate();

  $scope.search = function(searchTerm) {
    $scope.term = searchTerm
    Search();
  }

  function Populate() {
    $http.get('http://api.giphy.com/v1/stickers/search', {
      params: {
        api_key: 'dc6zaTOxFJmzC',
        q: 'pokemon',
        limit: 6,
        offset: 20,
        rating: 'y'
      }
    })
    .then(function success(response) {
      $scope.gifs = response.data.data
    }, function error(response) {
      console.log(response);
    })
  }

  function Search() {
    $http.get('https://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: 'dc6zaTOxFJmzC',
        q: $scope.term,
        limit: 24
      }
    })
    .then(function success(response) {
      $scope.gifs = response.data.data
    }, function error(response) {
      console.log(response);
    })
  }

  function Search2() {
    $http.get('https://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: 'dc6zaTOxFJmzC',
        q: $scope.term,
        limit: 24,
        offset: 24
      }
    })
    .then(function success(response) {
      $scope.gifs = response.data.data
    }, function error(response) {
      console.log(response);
    })
  }


}])
