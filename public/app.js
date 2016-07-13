angular.module('olympicPicker', ['ngRoute']);

  angular.module('olympicPicker').config(function($routeProvider, $locationProvider){

  $routeProvider
    .when('/badminton', {
      templateUrl: 'views/badminton.html',
      controller: 'BadController'
    })
    .when('/womensgymnastics', {
      templateUrl: 'views/womgym.html',
      controller: 'GymController'
    })
    .when('/tabletennis', {
      templateUrl: 'views/tabten.html',
      controller: 'TabTenController'
    })
    .when('/taekwondo', {
      templateUrl: 'views/taekwondo.html',
      controller: 'TaeKwonDoController'
    })
    .when('/syncswim', {
      templateUrl: 'views/syncswim.html',
      controller: 'SyncSwimController'
    });

    $locationProvider.html5Mode(true);
})



angular.module('olympicPicker').controller('BadController', function($scope, $http){
  $http.get('/olympics/badminton')
  .then(function(response){
  $scope.badmintonner = response.data.Name + ' from ' + response.data.Origin;
  });
});

angular.module('olympicPicker').controller('GymController', function($scope, $http){
  $http.get('/olympics/womensgymnastics')
  .then(function(response){
  $scope.gymnast = response.data.Name + ' from ' + response.data.Origin;
  });
});

angular.module('olympicPicker').controller('TabTenController', function($scope, $http){
  $http.get('/olympics/tabletennis')
  .then(function(response){
  $scope.tableTennisian = response.data.Name + ' from ' + response.data.Origin;
  });
});

angular.module('olympicPicker').controller('TaeKwonDoController', function($scope, $http){
  $http.get('/olympics/taekwondo')
  .then(function(response){
  $scope.taeKwonDoer = response.data.Name + ' from ' + response.data.Origin;
  });
});

angular.module('olympicPicker').controller('SyncSwimController', function($scope, $http){
  $http.get('/olympics/syncswimming')
  .then(function(response){
  $scope.syncSwimmer = response.data.Name + ' from ' + response.data.Origin;
  });
});
