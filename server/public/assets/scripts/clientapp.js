var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngMdIcons']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  // get rid of 1.6.4 #!
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "LoginController as lc"
    })
    .when('/register1', {
      templateUrl: '/views/register.html',
      controller: "LoginController as lc"
    })
    .when('/user1', {
      templateUrl: '/views/user.html',
      controller: "UserController as uc"
    })
    .when('/create', {
      templateUrl: '/views/create.html',
      controller: "CreateController as cc"
    })
    .when('/landing', {
      templateUrl: '/views/landing.html',
      controller: "LandingConController as lcc"
    })
    .when('/about1',{
      templateUrl: '/views/about.html',
      controller: "AboutController as ac"
    })
    .when('/technologies', {
      templateUrl: '/views/technologies.html',
      controller: "TechnologiesController as tc"
    })
    .otherwise({
      redirectTo: 'home'
    });

}]);


// below are angular meterial provided code. change 'AppCtrl' on new ones so they
// don't interfear with eachother

//this is for the tab bar. privided by materials angular
myApp.controller('TabCtrl', function(){

  var vm = this;
function AppCtrl() {
vm.currentNavItem = 'page1';
}
console.log('inside TabCtrl');
});

//this is for the daste picker. provided by materials angular
myApp.controller('AppCtrl', function() {
  this.myDate = new Date();
  this.isOpen = false;
  console.log('inside myapp.controller');
});


// this is for client functions
