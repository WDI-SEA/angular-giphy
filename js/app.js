var app = angular.module('GiphyApp', ['infinite-scroll']);

app.controller('GiphySearch', ['$scope', '$http', function($scope, $http) {

$scope.userSearch = '';



$scope.searchForGifs = function() {
  $http.get('http://api.giphy.com/v1/gifs/search?', {
    params: {
      q: $scope.userSearch,
      api_key: 'dc6zaTOxFJmzC'
    }
  })



  .then(function success(res) {
    console.log(res.data.data);

  $scope.giphyResults = res.data.data;
},

   function error(res) {
    console.log(res);
});


};

}]);
