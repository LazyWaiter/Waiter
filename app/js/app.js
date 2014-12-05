'use strict';

var waiterApp = angular.module('waiterApp', ['ngRoute', 'waiterController','ui.bootstrap']);

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
