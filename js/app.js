angular.module('GiphyApp', [])


app.controller('SearchCtrl', ["$scope", "$http", function($scope, $http) {
	$scope.searchTerm = '';
	$scope.giphyResult = [];


	$scope.$watch('searchTerm', function(newValue, oldValue) {
		console.log('new value': newValue);
		console.log('old value': oldValue);
		console.log('...................');
		$scope.search();
	})

// "http://api.giphy.com/v1/gifs/search?q=seahawks&api_key=dc6zaTOxFJmzC"
	$scope.search = function() {
		var req = {
			url: "http://api.giphy.com/v1/gifs/search?q="+$scope.searchTerm+"&limit=100&api_keydc6zaTOxFJmzC"
			method: 'GET',

		}

		$http(req).then(function success(res) {
			console.log(res);
		}, function error(res) {
			console.log(res);
		});
	};
}])


