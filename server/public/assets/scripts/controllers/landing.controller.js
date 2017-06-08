myApp.controller('LandingConController', ['$http', '$location', function($http, $location) {
  // This happens after view/controller loads -- not ideal but it works for now.
  var vm = this;


  vm.getItem = function() {
    $http({
      method: 'GET',
      url: '/items',
    }).then(function(response) {
      // console.log('response from server in getItem route ', response.data);
      vm.itemArray = response.data;
    });
  };



  console.log('checking in landing.controller.js');
}]);
