myApp.service('UserService', ['$http', function($http) {
  var vm = this;

  vm.getUserList = function() {
    return $http({
      method: 'GET',
      url: '/user/list'
    }).then(function success(res) {
      return res.data;
    }, function failure(res) {});
  };

  vm.sendText = function(objectToSend) {
    $http({
      url: '/twilioR',
      method: 'POST',
      data: objectToSend
    }).then(function success(res) {}, function fail(res) {});
  };



}]);
