myApp.controller('CreateController', ['$http', '$location', function($http, $location) {
  // This happens after view/controller loads -- not ideal but it works for now.
  var vm = this;

  console.log('checking Create.controller.js');



//   vm.create.name
  // vm.create.date
  // vm.create.time
  // vm.create.location

vm.addItem = function(){
console.log("in add item route");
console.log("name: ", vm.create.name);
console.log("date: ", vm.create.date);
console.log("time: ", vm.create.time);
// console.log("location: ", vm.creat.location.split(' ').join('+'));


var objectToSend = {
  name: vm.create.name,
  date: vm.create.date,
  time: vm.create.time,
  location: vm.create.location.split(' ').join('+')
};

$http({
  method: 'POST',
  url: '/items',
  data: objectToSend
}).then(function(response){
  console.log('response in $http: ', response.data);

  vm.create.name = '';
  vm.create.date = '';
  vm.create.time = '';
  vm.create.location = '';

  vm.getItem();
});
};

vm.getItem = function () {
  $http({
    method: 'GET',
    url: '/items',
  }).then(function (response){
    console.log('response from server in getItem route ', response.data);
    vm.itemArray = response.data;
  });
};

}]);//end myApp
