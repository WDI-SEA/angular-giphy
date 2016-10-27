//var API_BASE_URL = "http://www.api.giphy.com/v1/gifs/search?";
//var api_key = "dc6zaTOxFJmzC";
var app = angular.module('GiphyApp', ['infinite-scroll'])

.run(function() {
  console.log('App has loaded!');
});

app.controller("HomeCtrl", ["$scope", "$http", function($scope, $http) {
	$scope.stuff = "sup";
	$scope.searchInput = "";
	$scope.gifs = [];
	$scope.error = "";

	$scope.offset = 0;


	$scope.search = function(){
		if (!$scope.searchInput){
			$scope.error = 'enter a search term, dummy';
			console.log('ack');
			return;
		}


		$http({
			url: "http://api.giphy.com/v1/gifs/search?q=" + $scope.searchInput + "&api_key=dc6zaTOxFJmzC",
			method: "GET",
			limit: 10,
			offset: $scope.offset,
			params: {
				// q: $scope.searchInput,
				// api_key:'dc6zaTOxFJmzC'
			}
		}).then(function success(results){
			$scope.error = "";
			$scope.gifs = results.data.data;
			console.log('here1 ' + $scope.gifs);
		}, function error(res){
			$scope.error = "shits broke";
		});
	}

	$scope.addMoreItems = function() {
		$scope.offset = $scope.offset + 25;
		$scope.search();
	}




}]);