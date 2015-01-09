
var waiterControllers = angular.module('waiterController', []);
waiterControllers.controller('ordersListCtrl', ['$scope','Order','$interval',function ($scope, Order, $interval) {
$scope.orderModel = Order;
$scope.orderModel.getOrders();

	$scope.nameButton = function(order){
	if(order.value.status == "to_served"){
	return "Order paid !";
	}else if (order.value.status == "to_delivery"){
	return "Order served !";
	}
	};
	
	$scope.updateStatus = function(order){
		if(order.value.status == "to_served"){	
		Order.updateStatusToPaid(order);
	}else if (order.value.status == "to_delivery"){
		Order.updateStatusToServed(order);
	}
	
	
	};
	$scope.isPaidShowBtn = function(order){
	if(order.value.status === "to_paid"){
	return "hidden";
	}
	};
	$scope.isPaid = function(order){
	if(order.value.status === "to_paid"){
	return "green";
	}
	};
	$scope.isDelivery = function(order){
	if(order.value.status === "to_delivery"){
	return "orange";
	}
	};
	$scope.isServed = function(order){
	if(order.value.status === "to_served"){
	return "yelow";
	}
	};
	
	
	
	$scope.servOrDeliv = function(order){
	return order.value.status == 'to_delivery' || order.value.status == 'to_served';
	};
	
	$interval(function(){
	$scope.orderModel.getOrders();
	}, 30000);


}]);


