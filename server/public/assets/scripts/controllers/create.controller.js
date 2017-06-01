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
console.log("location: ", location);

};


}]);//end myApp
