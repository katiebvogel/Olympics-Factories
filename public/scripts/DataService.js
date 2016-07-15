angular.module('olympicPicker').factory('DataService', function($http){

  var data = {};

  function handleSuccessBad(response){
    console.log(response);
    data.bad=response.data;
  }

  function handleFailure(response){
    console.log('Error!', response);
  }

  function callBad(){
    $http.get('/olympics/badminton').then(handleSuccessBad, handleFailure);
  }

  function handleSuccessGym(response){
    console.log(response);
    data.gym=response.data;
  }

  function callGym(){
    $http.get('/olympics/womensgymnastics').then(handleSuccessGym, handleFailure);
  }

  function handleSuccessTabTen(response){
    console.log(response);
    data.TabTen=response.data;
  }

  function callTabTen(){
    $http.get('/olympics/tabletennis').then(handleSuccessTabTen, handleFailure);
  }


  function handleSuccessTaekwondo(response){
    console.log(response);
    data.taekwondo=response.data;
  }


  function callTae(){
    $http.get('/olympics/taekwondo').then(handleSuccessTaekwondo, handleFailure);
  }


  function handleSuccessSync(response){
    console.log(response);
    data.sync=response.data;
  }

  function callSync(){
    $http.get('/olympics/syncswimming').then(handleSuccessSync, handleFailure);
  }

callBad();
callGym();
callTae();
callSync();
callTabTen();

  return {
    data : data,
    callBad : callBad,
    callGym : callGym,
    callTabTen : callTabTen,
    callTae : callTae,
    callSync : callSync
  };
});
