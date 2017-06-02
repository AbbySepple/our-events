myApp.controller('EventViewController', ['$http', '$routeParams', '$location',

function($http, $routeParams, $location){
  console.log('inside event controller');
  console.log('route params: ', $routeParams);
  var vm = this;

  // 
  // vm.eventDetails = [];
  // getEventDetails();
  //
  // function getEventDetails() {
  //   $http.get('/event').then(function(response){
  //     console.log('response: ', response.data);
  //     vm.eventDetails = response.data;
  //   });
  // }
  //

}]);
