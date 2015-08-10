'use strict';

/**
 * @ngdoc function
 * @name theClosetApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the theClosetApp
 */
angular.module('theClosetApp')
  .controller('selectCtrl', function ($scope,dataShare) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.selectedDress=dataShare.passCode;
    $scope.quantity=['Quantity',1,2,3,4,5,6,7,8,9,10];
    $scope.sizes=['Choose the size','3/4','4/5','5/6','6/7','7/8'];
    dataShare.dressData().then(function(response){
      $scope.response=response;
      $scope.imageChange=$scope.response.data.dress[$scope.selectedDress].largePics[0];
      $scope.imgFocus=function(x){
      $scope.imageChange=$scope.response.data.dress[$scope.selectedDress].largePics[x];
      };

      $scope.passInfo=function(){
      dataShare.dressPrice= $scope.response.data.dress[$scope.selectedDress].price;
      dataShare.dressName= $scope.response.data.dress[$scope.selectedDress].name;
      dataShare.dressImage= $scope.imageChange;
    }


    });

    $scope.starColor='black';
    $scope.rate=function(x){
      jQuery('#stars div').css('color','black');
      for(var i=0;i<=x;i++){
        jQuery('#stars div').eq(i).css('color','red');
      };
    }

    
    
  });