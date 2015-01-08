
var waiterControllers = angular.module('waiterController', []);
waiterControllers.controller('ordersListCtrl', ['$scope','Order',function ($scope, Order) {
$scope.orderModel = Order;
$scope.orderModel.getOrders();

}]);


