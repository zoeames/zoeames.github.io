//IIFE initializing agular module goes here
(function(){
  'use strict';

  angular.module('zoeames', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/astrophysics', {templateUrl:'/views/astrophysics/astrophysics.html', controller:'AstroCtrl'})
    .when('/skills', {templateUrl:'/views/skills/skills.html', controller:'SkillsCtrl'})
    .when('/portfolio', {templateUrl:'/views/portfolio/portfolio.html', controller:'PortfolioCtrl'})
    .when('/resume', {templateUrl:'/views/resume/resume.html', controller:'ResumeCtrl'})
    .when('/NashCC', {templateUrl:'/views/nashcc/nashcc.html', controller:'NashCtrl'})
    .otherwise({redirectTo:'/'});

  }]);
})();
