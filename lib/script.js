import angular from 'angular';

angular.module('plunker', []).controller('MainCtrl', function($scope,$http) {
  $scope.name = 'Everyone';
  $scope.message = 'Data consumed through Github.com API';

  var onUserComplete = function(response){
    $scope.user = response.data
  };

  var onError = function(reason){
    $scope.error = "Could not fetch user successfully!, Try again!"
  };

  $http.get("https://api.github.com/users/Stathis96")
  .then(onUserComplete, onError);

});
