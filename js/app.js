var app = angular.module('GiphyApp', [])

.run(function() {
  console.log('App has loaded!');
});

app.controller('Ctrl', ['$scope', '$http', function($scope, $http) {
  console.log("controller active")

  $scope.searchTerm = null;
  $scope.hide = false;
  $scope.patientBear = true;

  $scope.search = function() {
    $scope.hide = true;
    $scope.patientBear = false;
    $http.get('http://api.giphy.com/v1/gifs/search', {
      params: {
        q: $scope.searchTerm,
        api_key: 'dc6zaTOxFJmzC',
        limit: 50
      }
    }).then(function success(response) {
      console.log("success", $scope.searchTerm);
      $scope.results = response.data.data;
      $scope.patientBear = true;
      $scope.hide = false;
      console.log($scope.results)
    }, function error(response) {
      console.log("Failed", $scope.searchTerm);
    });
  }


}]) // end Ctrl'er
