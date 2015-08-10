'use strict';

/**
 * @ngdoc overview
 * @name theClosetApp
 * @description
 * # theClosetApp
 *
 * Main module of the application.
 */
angular
  .module('theClosetApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/formal', {
        templateUrl: 'views/formal.html',
        controller: 'formalCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl'
      })
      .when('/select', {
        templateUrl: 'views/selectDress.html',
        controller: 'selectCtrl'
      })
      .when('/checkout', {
        templateUrl: 'views/buy.html',
        controller: 'buyCtrl'
      })
      .when('/confirm', {
        templateUrl: 'views/confirm.html',
        controller: 'confirmCtrl'
      })
      .when('/collapse1', {
        templateUrl: 'views/contact.html',
        controller: 'confirmCtrl'
      })
      .when('/collapse2', {
        templateUrl: 'views/contact.html',
        controller: 'confirmCtrl'
      })
      .when('/collapse3', {
        templateUrl: 'views/contact.html',
        controller: 'confirmCtrl'
      })
      .when('/collapse4', {
        templateUrl: 'views/contact.html',
        controller: 'confirmCtrl'
      })/*.when('/sale', {
        templateUrl: 'views/sale.html',
        controller: 'saleCtrl'
      })*/
      .otherwise({
        redirectTo: '/'
      });
  })
  .service('dataShare', function($http){

    return{
    
        dressData:function(tempdata){
            return $http.get('dress.json').success(function(resp){
              tempdata=resp;
              
          });

  }
  
  };

  this.passCode="";
  this.dressImage="";
  this.dressName="";
  this.dressPrice="";
});



