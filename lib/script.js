import angular from 'angular';

angular.module('plunker', []).controller('MainCtrl', function($scope,$http) {
  $scope.name = 'Github Viewer';
  $scope.message = 'Data consumed through Github.com API';

  var onUserComplete = function(response){
    $scope.user = response.data
    $http.get($scope.user.repos_url)
      .then(onRepos, onError);
  };

  var onRepos = function(response){
    $scope.repos = response.data
  }

  var onError = function(reason){
    $scope.error = "Could not fetch data successfully!, Try again!"
  };

  $scope.search = function(username){

    $http.get("https://api.github.com/users/" + username)
    .then(onUserComplete, onError);

  }

  $scope.username = "Angular"

});
