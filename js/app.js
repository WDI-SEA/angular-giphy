angular.module('GiphyApp', ['infinite-scroll'])

.controller('GiphyCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.search = '';
  $scope.searchGiphy = searchGiphy;

function searchGiphy() {
  console.log('success!')
  $http.get('http://api.giphy.com/v1/gifs/search', {
    params: {
      q: $scope.search,
      api_key: 'dc6zaTOxFJmzC'
    }
  })
  .then(function success(res) {
    // $scope.search = '';
    $scope.giphy = res.data.data;
    console.log($scope.giphy);
  }, function error(res) {
    console.log(res);
  });
}

  // $scope.$watch = ('search', function(newValue, oldValue) {
  //   $http.get('http://api.giphy.com/v1/gifs/search', {
  //     params: {
  //       q: $scope.search,
  //       api_key: 'dc6zaTOxFJmzC'
  //     }
  //   }).then(function success(res) {
  //     $scope.giphy = res.data.data;
  //   }, function error(res) {
  //     console.log(res);
  //   })
  // });




}]);
