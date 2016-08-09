
var demoApp = angular.module('demoApp', []);



var weatherWidget = function($scope){
  $scope.customers = [{name: 'James Hatch', city: 'Austin'},
  {name: 'Hank Brigham', city: 'Boulder'}];

};

demoApp.controller("weatherWidget");
