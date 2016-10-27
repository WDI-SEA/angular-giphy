
var app = angular.module('GiphyApp', ['infinite-scroll']);

app.controller("GiphyCtrl", ["$scope", "$http", function($scope, $http) {
	$scope.searchTerm = '';
  $scope.oldSearchTerm = '';
  $scope.offset = 0;
  $scope.count = 0;
  $scope.gif = [];
	$scope.error = "";
	$scope.searchOnType= false; 

	$scope.checkSearchOnType = function(newVal, oldVal) {
		$scope.searchOnType = !$scope.searchOnType
	};

	$scope.$watch("searchTerm", function(newVal, oldVal) {
		if($scope.searchOnType) {
			$scope.search(newVal);
		}
	});

  $scope.search = function() {
    if(!$scope.searchTerm) {
      $scope.error = "Invalid search terms";
      return;
    }
    else if(!isAlphaNumeric($scope.searchTerm)) {
      $scope.error = "Invalid search terms";
      return;
    }
    $http({
      url: 'http://api.giphy.com/v1/gifs/search?' + $scope.searchTerm + '&api_key=dc6zaTOxFJmzC',
      method: 'GET',
      params: {
        q: $scope.searchTerm,
        offset: $scope.offset
      } 
    }).then(function success(results) {
      $scope.error = '';
      $scope.gif = results.data.data;
    }, function error(res) {
      $scope.error = 'Request failed. Check console';
      console.log(res);
    });
  }

  $scope.myPagingFunction = function (){
        $scope.oldSearchTerm = $scope.searchTerm;
        $scope.offset = 25 + $scope.count;
        $scope.search();
        $scope.count++;
  };


}]);


function isAlphaNumeric(input){
  return /^[a-z\d\-_\s]+$/i.test(input);
}