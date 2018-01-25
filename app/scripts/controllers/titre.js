'use strict';

/**
 * @ngdoc function
 * @name newAppApp.controller:TitreCtrl
 * @description
 * # TitreCtrl
 * Controller of the newAppApp
 */
angular.module('newAppApp')
  .controller('TitreCtrl', function () {
    this.titres = [
      'TestHTML5 Boilerplate',
      'TOTOAngularJS',
      'Karma'
    ];
  });
