var app = angular.module('GiphyApp', []).run(function() {
  console.log('App has loaded!');
});

app.controller("GiphyCtrl", ["$scope", "$http", function($scope, $http){

$scope.giphys = [];
$scope.searchTerm = ""

$scope.search = function(){

var url = "http://api.giphy.com/v1/gifs/search?q=" + $scope.searchTerm + "&api_key=dc6zaTOxFJmzC";

	$http({
		url: url,
		method: 'GET',
		params: {}
	}).then (function success(results){
		$scope.giphys = results.data.data;
	})
	
};

}])
