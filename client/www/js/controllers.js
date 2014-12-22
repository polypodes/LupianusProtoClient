angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('CarteCtrl', function($scope) {
  $scope.carte = [
    { title: 'Parcours 1', id: 1 },
    { title: 'Parcours 2', id: 2 },
    { title: 'Parcours 3', id: 3 },
    { title: 'Parcours 4', id: 4 },
    { title: 'Parcours 5', id: 5 },
    { title: 'Parcours 6', id: 6 }
  ];
})

.controller('ParcoursCtrl', function($scope, $stateParams) {
});
