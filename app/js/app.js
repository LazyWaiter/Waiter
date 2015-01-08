'use strict'

var waiterApp = angular.module('waiterApp', [
'ngRoute',
'waiterController',
'waiterModel',
'ui.bootstrap']);

/*
'ngRoute',
    'ui.bootstrap',
    'barmanControllers',
    'barmanServices',
    "barmanDirectives"*/

waiterApp.config(['$routeProvider',
function($routeProvider) {    
    $routeProvider.
        when('/', {
            templateUrl: 'partials/waiterView.html',
            controller: 'ordersListCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);
