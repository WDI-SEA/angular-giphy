var app = angular.module('GiphyApp', ['infinite-scroll']);
app.value('THROTTLE_MILLISECONDS', 2000);

app.run(function() {
  console.log('App has loaded!');
});

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
  console.log('inside Main');
  $scope.results = [];
  $scope.searchterm = 'anonymous';
  $scope.s404 = false;
  var page = 0;
  var isFetching = false;
  var endOfResults = false;

  $scope.search = function() {
    page = 0;
    endOfResults = false;
    $scope.results = [];
    $scope.retrieve();
  };

  $scope.myPagingFunction = function() {
    console.log('pagine now!', page);
    // Custom rate limiting. Only increment page if a $http get isn't out
    if (!isFetching && !endOfResults) {
      page += 1;
      $scope.retrieve();
    }
  };
  $scope.retrieve = function () {
    // console.log('clicked')
    isFetching = true;
    $http.get('http://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: 'dc6zaTOxFJmzC',
        q: $scope.searchterm,
        limit: 100,
        offset: page,
        rating: 'r'
      }
    }).then(function(res) {
      // Get results & cut results if not rated R.
      var preResults = res.data.data;
      // Disable paging if all the results have been loaded. We check the
      // metadata provided in the res results. Then do some comparative math.
      if (res.data.pagination.offset >= Math.floor(res.data.pagination.total_count / 100)) {
        console.log('end of results!!!!!!!');
        endOfResults = true;
      }
      preResults.forEach(function(data, idx) {
        if (data.rating !== 'r') $scope.results.splice(idx, 1);
      });
      $scope.results.length > 0 ? $scope.results = $scope.results.concat(preResults) : $scope.results = preResults;
      console.log('=========', $scope.results.length);
      // Check to see if results are null, or if the results were
      // too short due to the rated R cutting.
      if ($scope.results.length === 0) {
        console.log('is zero');
        $scope.s404 = true;
      } else {
        $scope.s404 = false;
      }
      // console.log('rated r\'s: ', $scope.results.length)
      setTimeout(function() {
        console.log('cleared isFetching');
        isFetching = false;
      }, 3000);
    });
  };

  $scope.retrieve();
}]);
