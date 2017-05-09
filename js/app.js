angular.module('GiphyApp', [])



.controller('GiphySearch', ['$scope', '$http', function($scope, $http) {
    $scope.giphyList = [];

    $scope.search = function() {
        var req = {
            url: 'http://api.giphy.com/v1/gifs/search',
            method: 'GET',
            params: {
                q: $scope.searchGif,
                api_key: 'dc6zaTOxFJmzC'
            }
        }
        $http(req).then(function(response) {
            $scope.giphyList = response.data.data;
        })
    }


}]);
