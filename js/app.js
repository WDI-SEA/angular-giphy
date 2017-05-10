angular.module('GiphyApp', [])
    .controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {
        // console.log('SearchCtrl has loaded!');
        $scope.searchTerm = '';
        $scope.giphyList = [];

        $scope.search = function() {
            var req = {
                url: 'http://api.giphy.com/v1/gifs/search',
                method: 'GET',
                params: {
                    q: $scope.searchTerm,
                    api_key: 'dc6zaTOxFJmzC'
                }
            };

            $http(req).then(function success(res) {
                // response is successful, process it here
                if (res.status === 200) {
                    // console.log(res.data.data);
                    $scope.giphyList = res.data.data;
                }
            }, function error(res) {
                //do something if the response has an error
                console.log(res.data);
            });
        };

        // attaching a $watch function to $scope, defining two values:
        // 1. The value to watch
        // 2. A function that runs when the value changes, with the new and old values
        var debounce = null;
        $scope.$watch('searchTerm', function(newVal, oldVal) {
            if (debounce) clearTimeout(debounce);
            debounce = setTimeout(function() {
                // console.log('Ran Search');
                // perform the search here
                $scope.search();
            }, 1000)
        });

    }]);
