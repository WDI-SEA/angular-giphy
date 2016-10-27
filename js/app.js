var app = angular.module('GiphyApp', [])
.run(function() {
  console.log('App has loaded!');
});

app.controller("GiphyCtrl", ["$scope", "ServiceController", function($scope, ServiceController) {
	$scope.giphy = [];
	$scope.searchTerm = "";
	
	$scope.searchFor = function() {
		if($scope.searchTerm) {
			ServiceController.getGifs($scope.searchTerm).then(function(response) {
				$scope.gifs = response.data.data;
				console.log($scope.gifs);
			});
		}
		$scope.searchTerm = "";
	}
}]);