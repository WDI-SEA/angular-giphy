var giphyApp = angular.module('GiphyApp', ['tagged.directives.infiniteScroll']);

giphyApp.controller('GiphySearch', ['$scope', '$http', function($scope, $http) {
    $scope.page = 1;
    $scope.giphyList = [];
    $scope.fetching = false;

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

        $scope.getMore = function() {
            $scope.page++;
            $scope.fetching = true;
            $http.get('/my/endpoint', { page: $scope.page }).then(function(giphyList) {
                $scope.fetching = false;
                $scope.giphyList = $scope.giphyList.concat(giphyList);
            });
        };


        $http(req).then(function(response) {
            console.log('came back!')
            console.log(response)
            $scope.giphyList = response.data.data;
        });
    }

}]);
