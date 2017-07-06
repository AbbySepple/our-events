myApp.controller('EventViewController', ['$http', '$routeParams', '$location', '$scope', 'UserService',

function($http, $routeParams, $location, $scope, UserService){
  console.log('inside event controller');
  // console.log('route params: ', $routeParams);
  var vm = this;

  vm.eventDetails = [];
  getEventDetails();

// this retrives the event details from the data base to be shown on the DOM
  function getEventDetails() {
    $http.get('/eventv/' + $routeParams.eventId).then(function(response){
      // console.log('response: ', response.data);
      vm.eventDetails = response.data;
    });
  }
// this removes an item from the database based on the ID number
  vm.removeEvent = function(id) {
    console.log('inside remove by ID!');

    swal({
       title: "Are you sure?",
       text: "You will not be able to recover this event!",
       type: "warning",
       showCancelButton: true,
       confirmButtonColor: "#DD6B55",
       confirmButtonText: "Yes, delete it!",
       cancelButtonText: "No, cancel please!",
       closeOnConfirm: false,
       closeOnCancel: false },
       function(isConfirm){   if (isConfirm) {     swal("Deleted!", "Your event has been deleted.", "success");

       $http({
         method: 'DELETE',
         url: '/eventv/' + id,
       }).then(function(response) {
         //this is sweetalert
       console.log(response);
         getEventDetails();
       });

       } else {     swal("Cancelled", "Your event is safe :)", "error");   } });

    // console.log('Event id to remove is:', id);

  };

//this makes the details editable/xeditable/ and updates the DB
vm.desEdit = function($scope) {
    $scope.user = {
      desc: 'Awesome user \ndescription!'
    };
  };

vm.updateEvent = function(thing) {
  // console.log('inside update button', thing);
  $http({
    method: 'PUT',
    url: '/eventv/updateEvent',
    data: thing
  }).then(function(res){
    // console.log(res.data);
  });
};

//twilo
$http.get('/user').then(function(response) {
    if(response.data.username) {
        // user has a curret session on the server
        vm.userName = response.data.username;
        vm.groupname = response.data.groupname;
        vm.userlist = [];
        UserService.getUserList().then(function(data){
          for(var i=0; i<data.length; i++){
            if(data[i].groupname === vm.groupname){
              vm.userlist.push(data[i]);
            }
          }
        });
        // console.log('User Data: ', vm.userName);
    } else {
        // user has no session, bounce them back to the login page
        $location.path("/home");
    }
});
vm.sendText = function(eventname){
  console.log("inside send text click");
  console.log('send log: ', vm.userlist);
  var phonenumber = '';

  for(var i=0; i<vm.userlist.length; i++){
    var message = {
      number: '',
      content: "You have been invited to " + eventname + " event.",
    };
    phoneNumber = '+1' + vm.userlist[i].phonenumber;
    message.number = phoneNumber;
    console.log('message: ', message);
    UserService.sendText(message);
  }
};

}]);//end of myApp


//Global

//google map api was not working because it thought it was a dangerous outside sourse.
//filter allows us to say "no it's okay to use this link"
myApp.filter('googleMapUrl', function ($sce) {
    return function(eventId) {
      return $sce.trustAsResourceUrl('https://www.google.com/maps/embed/v1/place?key=AIzaSyDvn1b_lWegxrSnWnKXkYWMMpYSdHNqIds&q=' + eventId);
    };
  });




  //sweetalert

  // swal({
  //   title: "Are you sure?",
  //   text: "You will not be able to recover this imaginary file!",
  //   type: "warning",
  //   showCancelButton: true,
  //   confirmButtonColor: "#DD6B55",
  //   confirmButtonText: "Yes, delete it!",
  //   closeOnConfirm: false },
  //   function(){   swal("Deleted!", "Your imaginary file has been deleted.", "success"); });
  //
  // swal({
  //   title: "Error!",
  //   text: "Here's my error message!",
  //   type: "error",
  //   confirmButtonText: "Cool" });
