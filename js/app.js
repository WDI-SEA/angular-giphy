var app = angular.module('GiphyApp', [])
var api_base_url = "http://api.giphy.com/v1/gifs/search?q=";
var api_key = "&api_key=dc6zaTOxFJmzC";

app.controller("giphyCtrl", ["$scope", "$http", function($scope, $http){
	console.log("controller loaded!");
	console.log(api_key);

	$scope.gifs = [];

	$scope.getGif = function(searchTerm){
		$http({
			url: api_base_url + searchTerm + api_key,
			method: "GET",
			params: {
				limit: 25
			}
		}).then(function(response){
			$scope.gifs = response.data.data;
			console.log($scope.gifs);
		});
	};

}]);
