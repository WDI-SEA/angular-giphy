angular.module('GiphyApp', [])

.controller('SearchCtrl', ['$scope', '$http', function($scope, $http){ 
  $scope.searchTerm = '';
  $scope.gifs = [];

  $scope.search = function(){
    var req = {
      url: 'http://api.giphy.com/v1/gifs/search?q=' + $scope.searchTerm + '&api_key=dc6zaTOxFJmzC',
      method: 'GET'
    };
    console.log("request is " + req); 
    $http(req).then(function success(res){
      $scope.gifs = res.data.data;
      $scope.searchTerm = ''
    }, function error(res){
      console.log(res);
      $scope.searchTerm = ''
    });
  }
}])

.run(function() {
  console.log('App has loaded!');
});
