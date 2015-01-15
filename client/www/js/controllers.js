angular.module('starter.controllers', ['LocalForageModule', 'angularMoment'])
.factory('Carte', function($localForage){
  return {
    carte: [],
    empty: function(){
      this.carte.length = 0;
    },
    get: function(item) {
      return $localForage.getItem(item);
    }
  };
})
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

.controller('AppCtrl', ['$scope', '$localForage', '$ionicModal', '$timeout', 'moment', '$http', '$q', 'Carte',
      function($scope, $localForage, $ionicModal, $timeout, moment, $http, $q, Carte) {
  // Form data for the login modal
  var app = this; // then, app.synCata, etc...
  $scope.syncData = {};
  $scope.dateFormat = 'dddd Do MMMM YYYY, H:mm:ss';
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
    //window.location.reload();
  };

  // Open the sync modal
  $scope.sync = function() {
    $scope.modal.show();
    $localForage.getItem('lastSync').then(function(data) {
      $scope.lastSync = data;
      if(moment($scope.lastSync).isValid()) {
        $scope.lastSyncDate = moment($scope.lastSync).format($scope.dateFormat, $scope.dateLang);
      }
    });
  };

  // Perform the trash action
  $scope.doTrash = function() {
    $localForage.clear().then(function () {
      Carte.empty();
      $scope.lastSyncDate = '';
      console.log('clear done.');
    });
  };

  $scope.dumpData = {};
  $scope.dump = function() {
    var count = window.localStorage.length;
    $scope.dumpData = {};
    for (var i = 0; i < count; i++) {
      try {
        $scope.dumpData[localStorage.key(i)] = JSON.parse(this.getItem(localStorage.key(i)));
      } catch (e) {
        $scope.dumpData[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
      }
    }
    console.log('dumped', $scope.dumpData)
  };

  $scope.restore = function() {
    console.log('restoring elements from dumpData', $scope.dumpData);
    $localForage.clear();
    for(var key in $scope.dumpData.options){
      // check also if property is not inherited from prototype
      console.log('found', $scope.dmpData.options[key]);
      if ($scope.dumpData.options.hasOwnProperty(key)) {
        $localForage.setItem(key, $scope.dumpData.options[key]).then(function() {
          $localForage.keys().then(function(data) {
            console.log('restored:',data);
          });
        });
      }
    }
  };

  // Perform the sync action when the user submits the sync form
  $scope.doSync = function() {
    $scope.dump();

    var remote = 'http://www.corsproxy.com/polypodes.github.io/LupianusProtoClient/fake/data.json';
    $http.get(remote).
      success(function(data, status, headers, config) {
        $localForage.clear();
        Carte.empty();
        console.log('Carte is now empty:', Carte.carte);
        var carte = [];
        for(var key in data.carte){
          carte.push($localForage.setItem(key, data.carte[key]));
        }
        $q.all(carte).then(function(responses){
          console.log(responses);
          console.log('Remote sync OK');
          responses.forEach(function(parcours){
            Carte.carte.push(parcours);
          })

        });
      }).
      error(function(data, status, headers, config) {
        console.log('remote error', [data, status, headers, config]);
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

    var newSync = new Date();
    $localForage.setItem('lastSync', newSync).then(function() {
      $scope.lastSync = newSync;
      $scope.lastSyncDate = moment($scope.lastSync).format($scope.dateFormat, $scope.dateLang);
    });


    // Simulate a sync delay. Remove this and replace with your sync
    // code if using a sync system
    $timeout(function() {
      //$scope.closeSync();
    }, 1000);
  };
}])

.controller('CarteCtrl', ['$scope', '$localForage', 'Carte', function($scope, $localForage, Carte) {
  /*
   $scope.carte = [
   "parcours1": { title: 'Parcours 1', id: 1, src: 'http://lorempixel.com/160/160/city' },
   "parcours2": { title: 'Parcours 2', id: 2, src: 'http://lorempixel.com/160/160/nature' },
   "parcours3": { title: 'Parcours 3', id: 3, src: 'http://lorempixel.com/160/160/people' },
   "parcours4": { title: 'Parcours 4', id: 4, src: 'http://lorempixel.com/160/160/nightlife' },
   "parcours5": { title: 'Parcours 5', id: 5, src: 'http://lorempixel.com/160/160/transport' }
   ];
   */
      console.log('carteController instance OK');
  $scope.carte = Carte.carte;
  $localForage.iterate(function(value, key) {
    Carte.carte.push(value);
  }, function() {
    console.log('Iteration has completed', $scope.carte);
  });
}])

.controller('ParcoursCtrl', function($scope, $localForage, $stateParams, Carte) {

  var itemName = 'parcours' + $stateParams.parcoursId;
  Carte.get(itemName).then(function(data) {
    $scope.parcours = {
      title: data.title,
      id: data.id,
      fullSrc: data.src
    };
  });
})

.controller('SearchCtrl', function($scope) {
  console.log('search controller loaded');
})

.controller('AproposCtrl', function($scope) {
  console.log('AproposCtrl controller loaded');
});