var GiphyApp = angular.module('GiphyApp', ['infinite-scroll'])

GiphyApp.controller('myCtrl', ['$scope', '$http', function($scope, $http) {
  console.log('in the controller');
  // $scope.searchGifs = 'seahawks';

  $scope.gifSearch = function() {
    $http.get('http://api.giphy.com/v1/gifs/search?', {
      params: {
        q: $scope.searchGifs,
        api_key: 'dc6zaTOxFJmzC',
        limit: 50
      }
    }).then(function success(res) {
      $scope.gifs = res.data.data;
    }, function error(res) {
      console.log(res);
    });

    }

  $scope.$watch('searchGifs', function(newVal, oldVal) {
    $http.get('http://api.giphy.com/v1/gifs/search?', {
      params: {
        q: $scope.searchGifs,
        api_key: 'dc6zaTOxFJmzC',
        limit: 50
      }
    }).then(function success(res) {
      $scope.gifs = res.data.data;
      }, function error(res) {
        console.log('There is an error in your search');
      });
    })

}]);
