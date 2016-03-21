var app = angular.module('GiphyApp', []);


app.controller('GiphyCtrl', ['$scope', '$http', function($scope, $http) {
  console.log("contorller twerking!");

  $scope.search = function() {
    var req = {
      url:  "http://api.giphy.com/v1/gifs/search",
      method: 'GET',
      params: {
        q: $scope.searchGif,
        api_key: "dc6zaTOxFJmzC"
      }
    };
    $http(req).then(function success(res) {
      $scope.gifResult = res.data.data;
    }, function error (err) {
      console.log(err)
    });  

  };
}]);



//res.data.data



// http://api.giphy.com/v1/gifs/search?q=_________&api_key= (url and API key reference)
// .run(function() {
//   console.log('App has loaded!');
// });
