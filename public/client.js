var app = angular.module('olympicPicker', []);

app.controller('MainController', function($scope, $http) {

  $scope.test = "Find. Your. Olympians!";

  $scope.badmintonner = '';
  $scope.gymnast = '';
  $scope.tableTennisian = '';
  $scope.taeKwonDoer = '';
  $scope.syncSwimmer = '';

  $scope.genRanOlympians = function() {
    $http.get('/olympics/badminton')
    .then(function(response){
    $scope.badmintonner = response.data.Name + ' from ' + response.data.Origin;
    });
    $http.get('/olympics/womensgymnastics')
    .then(function(response){
    $scope.gymnast = response.data.Name + ' from ' + response.data.Origin;
    });
    $http.get('/olympics/tabletennis')
    .then(function(response){
    $scope.tableTennisian = response.data.Name + ' from ' + response.data.Origin;
    });
    $http.get('/olympics/taekwondo')
    .then(function(response){
    $scope.taeKwonDoer = response.data.Name + ' from ' + response.data.Origin;
    });
    $http.get('/olympics/syncswimming')
    .then(function(response){
    $scope.syncSwimmer = response.data.Name + ' from ' + response.data.Origin;
    });

  };

});
