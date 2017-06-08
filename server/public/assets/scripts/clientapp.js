var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngMdIcons', 'xeditable']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  // get rid of 1.6.4 #!
  //need to comment out for routeParams
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "LoginController as lc"
    })
    .when('/register', {
      templateUrl: '/views/register.html',
      controller: "LoginController as lc"
    })
    .when('/user', {
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
    .when('/about',{
      templateUrl: '/views/about.html',
      controller: "AboutController as ac"
    })
    .when('/technologies', {
      templateUrl: '/views/technologies.html',
      controller: "TechnologiesController as tc"
    })
    .when('/eventview/:eventId', {
      templateUrl: '/views/eventview.html',
      controller: "EventViewController as evc"
    })
    .otherwise({
      redirectTo: 'home'
    });

}]);


// below are angular meterial provided code. change 'AppCtrl' on new ones so they
// don't interfear with eachother

//this is for the daste picker. provided by materials angular
myApp.controller('AppCtrl', function() {
  this.myDate = new Date();
  this.isOpen = false;
  console.log('inside myapp.controller');
});

//this is for xeditable descriptiopn editor
myApp.run(function(editableOptions){
  editableOptions.theme = 'bs3';
});





// this is for client functions
