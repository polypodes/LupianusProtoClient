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
