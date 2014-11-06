//IIFE initializing agular module goes here
(function(){
  'use strict';

  angular.module('zoeames', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/astrophysics', {templateUrl:'/views/astrophysics/astrophysics.html', controller:'AstroCtrl'})
    .when('/contact', {templateUrl:'/views/contact/contact.html', controller:'ContactCtrl'})
    .when('/portfolio', {templateUrl:'/views/portfolio/portfolio.html', controller:'PortfolioCtrl'})
    .when('/resume', {templateUrl:'/views/resume/resume.html', controller:'ResumeCtrl'})
    .otherwise({redirectTo:'/'});

  }]);
})();
