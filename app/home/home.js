'use strict';

var homeApp = angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', mainCtrl
);

function mainCtrl($scope) {
    $scope.persons = [
        {fName: 'John', lName: 'Doe', score: 5},
        {fName: 'Mary', lName: 'Beth', score: 10},
        {fName: 'Jason', lName: 'Peters', score: 50},
        {fName: 'Molly', lName: 'Jasper', score: 3},
        {fName: 'Don', lName: 'Pablo', score: 23},
        {fName: 'Donald', lName: 'Trump', score: 16},
        {fName: 'Paul', lName: 'Francis', score: 59}
    ];
        
   $scope.addName = function(newName,newScore) {
        var fullName = newName.split(" ");
        $scope.persons.push({fName: fullName[0], lName: fullName[1], score: newScore});
   };
    
   $scope.removeName = function(index) {
       $scope.persons.splice(index, 1);
   };
   
}
