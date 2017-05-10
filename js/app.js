var giphyApp = angular.module('GiphyApp', []);

giphyApp.controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.gifList = [];

    $scope.search = function() {
        var req = {
            url: "http://api.giphy.com/v1/gifs/search",
            method: "GET",
            params: {
                q: $scope.searchTerm,
                api_key: "dc6zaTOxFJmzC"
            }
        };

        $http(req).then(function(response) {
            console.log(response.data.data);
            $scope.gifList = response.data.data;
        });
    };

    $scope.$watch("searchTerm", function(newVal, oldVal) {
        $scope.search();
    });

}]);
