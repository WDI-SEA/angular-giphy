var app = angular.module('GiphyApp', ['infinite-scroll']);

function SearchCtrl($scope, $http) {
	$scope.searchTerm = '';

	$scope.getGiphies = function() {
		if ($scope.searchTerm) {
			$http.get('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + $scope.searchTerm).then(function(response) {
				$scope.giphies = response.data.data
				// console.log($scope.giphies[0])
			});
		}
	}
}
app.controller("SearchCtrl", SearchCtrl) 
