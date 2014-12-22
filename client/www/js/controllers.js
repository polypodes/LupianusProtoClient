angular.module('starter.controllers', ['LocalForageModule', 'angularMoment'])

.constant('angularMomentConfig', {
   preprocess: 'unix', // optional
   timezone: 'Europe/London' // optional
 })
.config(['$localForageProvider', function($localForageProvider){
  $localForageProvider.config({
    driver      : 'localStorageWrapper', // if you want to force a driver
    name        : 'CiapApp', // name of the database and prefix for your data, it is "lf" by default
    version     : 1.0, // version of the database, you shouldn't have to use this
    storeName   : 'keyvaluepairs', // name of the table
    description : 'Rezé CIAP App'
  });
  $localForageProvider.setNotify(true, true); // itemSet, itemRemove;
}])

.controller('AppCtrl', ['$scope', '$localForage', '$ionicModal', '$timeout', 'moment', function($scope, $localForage, $ionicModal, $timeout, moment) {
  // Form data for the login modal
  $scope.syncData = {};
  $scope.dateFormat = 'dddd, MMMM Do YYYY, H:mm:ss';
  $scope.dateLang = 'fr';

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/sync.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeSync = function() {
    $scope.modal.hide();
  };

  // Open the sync modal
  $scope.sync = function() {
    $scope.modal.show();
    $localForage.getItem('lastSync').then(function(data) {
      $scope.lastSync = data;
      console.log($scope.lastSync);
      $scope.lastSyncDate = moment($scope.lastSync).format($scope.dateFormat, $scope.dateLang);
      console.log('lastSync', $scope.lastSyncDate);
    });
  };

  // Perform the trash action
  $scope.doTrash = function() {
    $localForage.clear().then(function () {
      $scope.lastSyncDate = '';
      console.log('clear done.');
    });
  };

  // Perform the sync action when the user submits the sync form
  $scope.doSync = function() {
    var newSync = new Date();
    $localForage.setItem('lastSync', newSync).then(function() {
      $scope.lastSync = newSync;
      $scope.lastSyncDate = moment($scope.lastSync).format($scope.dateFormat, $scope.dateLang);
    });
    $localForage.setItem('user','Olivier Combe').then(function() {
      console.log('setItem');
      $localForage.getItem('user').then(function(data) {
        console.log('getItem');
        $scope.syncData = data;
        console.log('Doing sync', $scope.syncData);
      });
    });

    // Simulate a sync delay. Remove this and replace with your sync
    // code if using a sync system
    $timeout(function() {
      //$scope.closeSync();
    }, 1000);
  };
}])

.controller('CarteCtrl', function($scope) {
  $scope.carte = [
    { title: 'Parcours 1', id: 1, src: 'http://lorempixel.com/160/160/city' },
    { title: 'Parcours 2', id: 2, src: 'http://lorempixel.com/160/160/nature' },
    { title: 'Parcours 3', id: 3, src: 'http://lorempixel.com/160/160/people' },
    { title: 'Parcours 4', id: 4, src: 'http://lorempixel.com/160/160/nightlife' },
    { title: 'Parcours 5', id: 5, src: 'http://lorempixel.com/160/160/transport' }
  ];
})

.controller('ParcoursCtrl', function($scope, $stateParams) {
  $scope.parcours =
  {
    title: 'Parcours 1',
    id: 1,
    fullSrc: 'http://lorempixel.com/540/304/',
    text: "This is a \"Facebook\" styled Card. The header is created from a Thumbnail List item, the content is from a card-body consisting of an image and paragraph text. The footer consists of tabs, icons aligned left, within the card-footer."
  };
});
