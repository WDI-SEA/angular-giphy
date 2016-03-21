var app = angular.module('GiphyApp', ["infinite-scroll"])

app.controller("GiphyCtrl", ["$scope", "$http", function($scope, $http) {
	$scope.searchWords = "";
	$scope.giphyResults = [];

	$scope.search = function() {
		var req = {
			url: "http://api.giphy.com/v1/gifs/search",
			method: "GET",
			params: {
				q: $scope.searchWords,
				api_key: "dc6zaTOxFJmzC"
			}
		};

		$http(req).then(function success(res) {
			$scope.giphyResults = res.data.data;
			// for (var i = 0; i < $scope.giphyResults.length; i++) {
			// 	$scope.giphyResults.push($scope.giphyResults[i]);
			// }
		}, function error(res) {
			console.log(res);
		});
	}
}]);