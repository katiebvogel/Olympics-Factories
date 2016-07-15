angular.module('olympicPicker').controller('GymnasticsController', function($scope, DataService){
  console.log('Gym Controller Called');
  $scope.data = DataService.data;
});
