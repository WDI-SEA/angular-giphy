
var app = angular.module('GiphyApp', ['infinite-scroll'])
app.controller("GiphyCtrl", ['$scope', "$http", function($scope, $http) {
	  
	  $scope.searchTerm = "";
	  $scope.gifs = [];
	  $scope.error = "";
	  $scope.count = 0;
	  $scope.offset = 0;
	  $scope.oldSearchTerm = "";

	  // $scope.searchOnType = false;

	  console.log();

	 $scope.search = function() {
    $http.get('http://api.giphy.com/v1/gifs/search?', {
      params: {
        q: $scope.searchTerm,
        offset: $scope.offset,
        api_key: 'dc6zaTOxFJmzC',
        limit: 15
      }
    }).then(function success(res) {
      $scope.gifs = $scope.gifs.concat(res.data.data);
    }, function error(res) {
      console.log(res);
    });

    }


      $scope.myPagingFunction = function (){
        $scope.oldSearchTerm = $scope.searchTerm;
        $scope.offset = 25 * $scope.count;
        $scope.search();
        $scope.count++;
    };
}]);


