var app = angular.module('GiphyApp', []);

// .run(function() {
//   console.log('App has loaded!');
// });

app.controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {
	// console.log("search loads!!");
	$scope.searchTerm= '';
	$scope.giphys = [];

	$scope.search = function() {
		var req = {
			url: 'http://api.giphy.com/v1/gifs/search?q='+$scope.searchTerm+'&limit=100&api_key=dc6zaTOxFJmzC',
			method: 'GET'
		};
		$http(req).then(function success(res) {
			$scope.giphys = res.data.data;
			// console.log($scope.giphys);
		}, function error(res) {
			// console.log(res);
		});
	}


}]);







