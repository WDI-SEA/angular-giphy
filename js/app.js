var giphyApp = angular.module('GiphyApp', []);

giphyApp.controller('GiphySearch', ['$scope', '$http', function($scope, $http) {
    $scope.giphyList = [];

    $scope.search = function() {
        console.log('sent a search')
        var req = {
            url: 'http://api.giphy.com/v1/gifs/search',
            method: 'GET',
            params: {
                q: $scope.searchTerm,
                api_key: 'dc6zaTOxFJmzC'
            }
        }

        $http(req).then(function(response) {
            console.log('came back!')
            console.log(response)
            $scope.giphyList = response.data.Search;
        });
    }

}]);
