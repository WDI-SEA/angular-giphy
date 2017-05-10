/* globals angular */

var gifApp = angular.module('GiphyApp', ['infinite-scroll']);

gifApp.controller('searchCtlr', ['$scope', '$http', function($scope, $http) {
    $scope.gifList = [];
    $scope.offset = -25;

    $scope.search = function() {
        var req = {
            url: 'http://api.giphy.com/v1/gifs/search',
            method: 'GET',
            params: {
                q: $scope.searchTerm,
                api_key: 'dc6zaTOxFJmzC'
            }
        };
        $http(req).then(function(res) {
            $scope.gifList = res.data.data;
        });
    };

    $scope.scroll = function() {
        $scope.offset = $scope.offset + 25;
        var req = {
            url: 'http://api.giphy.com/v1/gifs/search',
            method: 'GET',
            params: {
                q: $scope.searchTerm,
                offset: $scope.offset,
                api_key: 'dc6zaTOxFJmzC'
            }
        };
        $http(req).then(function(res) {
            $scope.gifList = $scope.gifList.concat(res.data.data);
        });
    };
}]);
