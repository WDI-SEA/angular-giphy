var app = angular.module("GiphyApp", []);

app.controller('GiphyCtrl', ['$scope', '$http', function($scope, $http) {
  console.log('App has loaded!');

  $scope.searchTerm = '';
  $scope.gifs = [];

  $scope.$watch('searchTerm', function(){
  //     console.log('new value:', newValue);
  //     console.log('old value:', oldValue);
  //     console.log('-------------------------');
      $scope.search();

  });

   $scope.search = function() {
    // console.log($scope.searchTerm);
    var req = {
      url: 'http://api.giphy.com/v1/gifs/search',    
      method: 'GET',
      params: {
        q: $scope.searchTerm,
        api_key: "dc6zaTOxFJmzC"
      }
    };

    $http(req).then(function success(res) {
        $scope.gifs = res.data.data;
        console.log($scope.gifs);
    }, function error(res) {
        console.log(res);
    });

  }



  
}]);

