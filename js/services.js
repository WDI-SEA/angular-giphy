app.service("ServiceController", ["$http", function($http) {

	this.getGifs = function(searchTerm) {
		var req = {
			url: "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC",
			method: "GET",
			params: {}
		};
		return $http(req);
	};
}]);