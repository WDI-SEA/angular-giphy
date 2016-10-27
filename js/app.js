var app = angular.module('GiphyApp', [])
.run(function() {
  console.log('App has loaded!');
});

app.controller("HomeCtrl", ["$scope", "GiphyService", function($scope, GiphyService) {
	$scope.gifs = [];
	$scope.searchTerm = "";
	
	$scope.search = function() {
		if($scope.searchTerm) {
			GiphyService.getGifs($scope.searchTerm).then(function(response) {
				$scope.gifs = response.data.data;
				console.log($scope.gifs);
			});
		}
		$scope.searchTerm = "";
	}


}]);
