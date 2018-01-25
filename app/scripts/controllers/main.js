'use strict';

/**
 * @ngdoc function
 * @name newAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newAppApp
 */
angular.module('newAppApp')
  .controller('MainCtrl', function () {
    this.salutation = [{
      helloword: 'Bonjour!',
      name: 'Marie Jo'
    }];
    this.awesomeThings = [
      'HTML5',
      'AngularJS',
      'Karma'
     ];
   //  console.log(salutation);
    })
.directive('mySalutation', function(){
  return {
      template: 'Helloword:{{salutation.helloword}} Name:{{salutation.name}} '
     
    };
  });