myApp.controller('EventViewController', ['$http', '$routeParams', '$location',

function($http, $routeParams, $location){
  console.log('inside event controller');
  console.log('route params: ', $routeParams);
  var vm = this;

  vm.eventDetails = [];
  getEventDetails();

// this retrives the event details from the data base to be shown on the DOM
  function getEventDetails() {
    $http.get('/eventv/' + $routeParams.eventId).then(function(response){
      console.log('response: ', response.data);
      vm.eventDetails = response.data;
    });
  }
// this removes an item from the database based on the ID number
  vm.removeEvent = function(id) {
    console.log('inside remove by ID!');
    console.log('Event id to remove is:', id);
    $http({
      method: 'DELETE',
      url: '/eventv/' + id,
    }).then(function(response) {
      console.log(response);
      getEventDetails();
    });
  };








//this is for xeditable descriptiopn editor
myApp.run(function(editableOptions){
  editableOptions.theme = 'bs3';
});

vm.desEdit = function(vm) {
    vm.user = {
      desc: 'Awesome user \ndescription!'
    };
  };







}]);//end of myApp


//Global

//google map api was not working because it thought it was a dangerous outside sourse.
//filter allows us to say "no it's okay to use this link"
myApp.filter('googleMapUrl', function ($sce) {
    return function(eventId) {
      return $sce.trustAsResourceUrl('https://www.google.com/maps/embed/v1/place?key=AIzaSyD5e-0z-uYq18j0rP-tucFFhgExHSSYYNA&q=' + eventId);
    };
  });
