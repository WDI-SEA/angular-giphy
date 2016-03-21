var app = angular.module('GiphyApp', ['infinite-scroll']);

app.run(function($http) {
  console.log('App has loaded!');
});

app.controller('GiphyCtrl', [
  '$scope',
  '$http',
  function($scope, $http) {
    $scope.searchTerm = '';
    $scope.gifs = [];

    $scope.search = function() {
      $http.get("http://api.giphy.com/v1/gifs/search?q=" + $scope.searchTerm + "&api_key=dc6zaTOxFJmzC")
      .then(function success(response) {
        $scope.gifs = response.data.data;
        console.log($scope.gifs);
      }, function error(response) {
        console.log(response);
      });
    }

    // $scope.nextPage = function () {
    //   var last = $scope.gifs[$scope.gifs.length - 1];
    //   for (var i = 1; i < $scope.gifs.length; i++) {
    //     $scope.gifs.push($scope.gifs[i].data);
    //   }
    // };

  }
]);

