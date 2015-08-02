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
/*
dataShare.dressData().then(function(response){
$scope.jdata=response.data
 


$scope.productinfo=$scope.jdata.dress[$scope.ind].name;
*/

$scope.formalImages=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'];
$scope.ind=0;
$scope.next=function(){
  //$scope.productinfo=$scope.jdata.dress[$scope.ind].name;

	if($scope.ind===0){
		$scope.ind=$scope.formalImages.length;
	}
	$scope.ind--;
};

$scope.pre=function(){
  //$scope.productinfo=$scope.jdata.dress[$scope.ind].name;

	$scope.ind++;
if($scope.ind===$scope.formalImages.length){
$scope.ind=0;
}

};

  });