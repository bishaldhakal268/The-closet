'use strict';

/**
 * @ngdoc function
 * @name theClosetApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the theClosetApp
 */
angular.module('theClosetApp')
  .controller('buyCtrl', function ($scope,dataShare) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.reviewDiv=false;
    $scope.review=function(){
      $scope.reviewDiv=false;
      
    };

    /*dataShare.dressData().then(function(response){
      $scope.response=response;
      $scope.imageChange=$scope.response.data.dress[$scope.selectedDress].largePics[0];
      $scope.imgFocus=function(x){
      $scope.imageChange=$scope.response.data.dress[$scope.selectedDress].largePics[x];
      };
*/
      $scope.dressPrice = dataShare.dressPrice;
      $scope.dressName = dataShare.dressName;
      $scope.dressImage = dataShare.dressImage;
    });

  
