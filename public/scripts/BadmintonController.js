angular.module('olympicPicker').controller('BadmintonController', function($scope, DataService){
  console.log('BadmintonController On');
  $scope.data = DataService.data;
});
