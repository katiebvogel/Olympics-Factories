angular.module('olympicPicker').config(function($routeProvider, $locationProvider){

$routeProvider
  .when('/badminton', {
    templateUrl: 'views/badminton.html',
    controller: 'BadmintonController'
  })
  .when('/womensgymnastics', {
    templateUrl: 'views/womgym.html',
    controller: 'GymnasticsController'
  })
  .when('/tabletennis', {
    templateUrl: 'views/tabten.html',
    controller: 'TableTennisController'
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
});
