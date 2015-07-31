'use strict';

/**
 * @ngdoc function
 * @name theClosetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the theClosetApp
 */
angular.module('theClosetApp')
  .controller('MainCtrl', function ($scope,dataShare) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    document.getElementById('video').play();

    $scope.dressSelect=function(x){
    	dataShare.passCode=x;
    }
  });
