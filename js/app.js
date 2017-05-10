var giphyApp = angular.module('GiphyApp', ['infinite-scroll']);

giphyApp.controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {
            $scope.gifList = [1, 2, 3, 4, 5, 6, 7, 8];

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

            $scope.loadMore = function() {
                var last = $scope.gif[$scope.gif.length - 1];
                for (var i = 1; i <= 8; i++) {
                    $scope.gif.push(last + i);
                }

                $scope.$watch("searchTerm", function(newVal, oldVal) {
                    $scope.search();
                });

            }]);
