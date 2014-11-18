(function(){
  'use strict';

  angular.module('zoeames')
  .controller('AstroCtrl', ['$scope', function($scope){
    particlesJS('particles-js', {
    particles: {
        color: '#FBEA74',
        shape: 'circle',
        opacity: 1,
        size: 2.5,
        size_random: true,
        nb: 100,
        line_linked: {
            enable_auto: true,
            distance: 250,
            color: '#FBEA74',
            opacity: 0.5,
            width: 1,
            condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600
            }
        },
        anim: {
            enable: true,
            speed: 2
        }
    },
    interactivity: {
        enable: true,
        mouse: {
            distance: 200
        },
        mode: 'grab'
    },
    retina_detect: true
    });

  }]);
})();
