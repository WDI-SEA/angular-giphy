var app = angular.module('GiphyApp', [])

console.log("hello");

app.controller("GiphyCtrl",["$scope","$http", function($scope, $http){

	$scope.searchTerm = '';
	$scope.api = "dc6zaTOxFJmzC";
	$scope.giphy = [];

	$scope.search = function(){
		var req = {
			url: 'http://api.giphy.com/v1/gifs/search',
			method: 'GET',
			params: {
				api_key : $scope.api,
				q : $scope.searchTerm, 
			} 
		
	};

	$http(req).then(function success(res){
		$scope.giphy = res.data.data;
		console.log($scope.giphy);

	}, function error(res){
			console.log(res);
		});
	
	}


}]);