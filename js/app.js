var app = angular.module('GiphyApp', ['infinite-scroll'])

.run(function() {
  console.log('App has loaded!');
})

.controller('GiphySearch', ['$scope', '$http', function($scope, $http) {
  $scope.query = '';

  $scope.search = function() {
    $http.get('http://api.giphy.com/v1/gifs/search', {
      params: {
        q: $scope.query,
        api_key: 'dc6zaTOxFJmzC'
        }
      }).then(function success(res){
        $scope.giphys = res.data.data;
      }, function error(res) {
        console.log(res)
      })
  };

   $scope.$watch('query', function(newValue, oldValue) {
    $http.get('http://api.giphy.com/v1/gifs/search', {
      params: {
        q: $scope.query,
        api_key: 'dc6zaTOxFJmzC'
        }
      }).then(function success(res){
        $scope.giphys = res.data.data;
      }, function error(res) {
        console.log(res)
      })
  });

}]);
