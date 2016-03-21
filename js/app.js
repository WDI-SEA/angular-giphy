var giphyApp = angular.module('GiphyApp', [])

giphyApp.controller('GifCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.searchTerm = '';
  $scope.gifs = [];

  $scope.search = function() {
    var req = {
      url: "http://api.giphy.com/v1/gifs/search",
      method: 'GET',
      params: {
        q: $scope.searchTerm,
        api_key: 'dc6zaTOxFJmzC'
      }
    }

    $http(req).then(function success(res) {
      if (res.status === 200) {
        $scope.gifs = res.data.data;
      }
      console.log(res.data.data);
      console.log($scope.gifs);
    }, function error(res) {
      console.log(res);
    });
  };
  

}]);
