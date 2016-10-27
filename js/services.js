
app.service('GiphyService', ['$http', function($http){
	this.getGifs = function(){
		var req = {
			url: "http://api.giphy.com/v1/gifs/search?q=" + this.searchTerm + "&api_key=dc6zaTOxFJmzC",
			method: "GET"
		};
		return $http(req);
	};
}]);





// 		// var req = {
// 		// 	url: "http://api.giphy.com/v1/gifs/search",
// 		// 	api_key: "dc6zaTOxFJmzC",
// 		// 	method: "GET",
// 		// 	params: {
// 		// 		q: $scope.searchTerm
// 		// 	}
// 		// };