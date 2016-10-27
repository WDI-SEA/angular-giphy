var API_BASE_URL = "http://api.giphy.com/v1/gifs/search";
var app = angular.module("GiphyApp", []);

app.controller("GiphyController", ['$scope', '$http', function($scope, $http){
	$scope.url = "";
	$scope.gifs = [];
	$scope.error = "";
	$scope.search = "";


$scope.$watch("searchTerm", function(newVal, oldVal){
    if($scope.searchOnType){
      $scope.search(newVal);
    }
  });


$scope.search = function() {
	if(!$scope.searchTerm){
      $scope.error = "You need to provide something for me to search";
      return;
    }
    else if(!isAlphaNumeric($scope.searchTerm)){
      $scope.error = "Invalid characters detected.";
      return;
    }
    //2. Set up the request to OMDb
    $http({
      url: "http://api.giphy.com/v1/gifs/search?q=" + $scope.searchTerm + "&api_key=dc6zaTOxFJmzC"
      // api_key: "dc6zaTOxFJmzC",
      // method: "GET",
      // params: {
      //   q: $scope.searchTerm
      //   //specific to omdb api (like q on reddit)
      // }
    }).then(function success(results){
      //success: it worked
      $scope.error = "";
      $scope.gifs = results.data.data;
      console.log(results.data.data);
    }, function error(res){
      //error: uh oh, didn't work
      $scope.error = "The request failed. See console for details.";
      console.log(res);
    });

}



}]); //end controller



function isAlphaNumeric(input){
  return /^[a-z\d\-_\s]+$/i.test(input);
}
