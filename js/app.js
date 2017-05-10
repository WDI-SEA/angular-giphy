/*global angular*/
// import ngInfiniteScroll from 'ng-infinite-scroll';
var giphyApp = angular.module('GiphyApp', ['infinite-scroll']);
giphyApp.controller('Giphy', ['$scope', '$http', function($scope, $http) {
    $scope.gifList = [];
    var limit = 10;
    var lastAmountOffset = 0 - limit;
    $scope.search = function() {
        var req = {
            url: 'http://api.giphy.com/v1/gifs/search',
            method: 'GET',
            params: {
                api_key: 'dc6zaTOxFJmzC',
                q: $scope.searchTerm,
                limit: limit,
                offset: lastAmountOffset
            }
        };
        $http(req).then(function(res) {
            console.log('first get' + res.data.pagination.offset);
            console.log(res.data.data);
            $scope.gifList = res.data.data;
        });
    };

    $scope.addMore = function() {
        lastAmountOffset += limit;
        var moreReq = {
            url: 'http://api.giphy.com/v1/gifs/search',
            method: 'GET',
            params: {
                api_key: 'dc6zaTOxFJmzC',
                q: $scope.searchTerm,
                limit: limit,
                offset: lastAmountOffset
            }
        };

        $http(moreReq).then(function(res) {
            console.log('getting more...' + res.data.pagination.offset);
            console.log(res.data.data);
            $scope.gifList = $scope.gifList.concat(res.data.data);
        });
    };

}]);
