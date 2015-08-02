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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'AboutCtrl'
      })
      .when('/select', {
        templateUrl: 'views/selectDress.html',
        controller: 'selectCtrl'
      })
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
});



