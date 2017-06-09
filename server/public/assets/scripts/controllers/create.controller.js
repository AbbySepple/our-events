myApp.controller('CreateController', ['$http', '$location', function($http, $location) {
  // This happens after view/controller loads -- not ideal but it works for now.
  var vm = this;

  console.log('checking Create.controller.js');

  vm.addItem = function() {
    console.log("in add item route");
    console.log("name: ", vm.create.name);
    console.log("date: ", typeof(vm.create.date));
    console.log("time: ", vm.create.time);
    console.log("description: ", vm.create.description);


    var objectToSend = {
      name: vm.create.name,
      date: vm.create.date,
      time: vm.create.time,
      //this line takes in the string, splits the elements at the space, and re joins them with a + instead
      //this is because good map cannot have spaces but adccepts '+' or '%20'
      location: vm.create.location.split(' ').join('+'),
      description: vm.create.description
    };

    $http({
      method: 'POST',
      url: '/items',
      data: objectToSend
    }).then(function(response) {
      console.log('response in $http: ', response.data);

      vm.create.name = '';
      vm.create.date = '';
      vm.create.time = '';
      vm.create.location = '';
      vm.create.description = '';

      vm.getItem();
    });
  };

  vm.getItem = function() {
    $http({
      method: 'GET',
      url: '/items',
    }).then(function(response) {
      console.log('response from server in getItem route ', response.data);
      vm.itemArray = response.data;
    });
  };


//testing

vm.calendarTog = false;

vm.calendarBlur = function() {
  console.log('testing calendar blur');
  vm.calanderTog = false;
};

vm.calendarFocus = function(){
  console.log('testing calander focus');
    vm.calanderTog = true;
};

vm.calendarToggle = function(){
  vm.calendarTog = !vm.calendarTog;
};






}]); //end myApp
