// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'angularMoment'])

//Parameter preprocess
.constant('angularMomentConfig', {
  preprocess: 'unix', // optional
  timezone: 'Europe/Paris' // optional
})

// register work which should be performed when the injector is done loading all modules
.run(function($ionicPlatform, amMoment) {
  amMoment.changeLocale('fr');
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.carte', {
     url: "/carte",
     views: {
       'menuContent': {
         templateUrl: "templates/carte.html",
         controller: 'CarteCtrl'
       }
     }
   })

  .state('app.parcours', {
    url: "/carte/:parcoursId",
    views: {
      'menuContent': {
        templateUrl: "templates/parcours.html",
        controller: 'ParcoursCtrl'
      }
    }
  })

  .state('app.search', {
     url: "/search",
     views: {
       'menuContent': {
         templateUrl: "templates/search.html",
         controller: 'SearchCtrl'
       }
     }
   })

  .state('app.apropos', {
    url: "/apropos",
    views: {
      'menuContent': {
        templateUrl: "templates/apropos.html",
        controller: 'AproposCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/carte');
});
