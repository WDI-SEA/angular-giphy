var giphyApp = angular.module('GiphyApp', ['infinite-scroll']);

giphyApp.controller('SearchCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.searchTerm = '';
    $scope.oldSearchTerm = '';
    $scope.offset = 0;
    $scope.count = 0;
    $scope.api = "dc6zaTOxFJmzC";
    $scope.giphys = [];
    

    $scope.search = function () {
        if ($scope.searchTerm != $scope.oldSearchTerm) {$scope.giphys = [];};
        var req = {
            url: "http://api.giphy.com/v1/gifs/search",
            method: 'GET',
            params: {
                api_key: $scope.api,
                offset: $scope.offset,
                q: $scope.searchTerm,
            }
        }

        $http(req).then(function success(res) {
            $scope.giphys = $scope.giphys.concat(res.data.data);
        }, function error (res) {
            console.log(res);
        });


    };

    $scope.myPagingFunction = function (){
        $scope.oldSearchTerm = $scope.searchTerm;
        $scope.offset = 25 * $scope.count;
        $scope.search();
        $scope.count++;
    };
}]);