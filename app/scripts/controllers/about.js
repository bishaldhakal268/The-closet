'use strict';

/**
 * @ngdoc function
 * @name theClosetApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the theClosetApp
 */
angular.module('theClosetApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
