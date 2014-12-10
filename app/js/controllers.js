var waiterControllers = angular.module('waiterController', []);

waiterControllers.controller('ordersListCtrl', ['$scope','$http','$interval','waiterService',function ($scope, $http, waiterService) {


$scope.orders = waiterFactorys.getOrders();

 /*$scope.isToDelivery = function(order) {
        return order.value.status === "to_delivery" ? true : false;
    };

$scope.updateStatePaid = function(order){
order.status = 'to_prepare';
console.log(order._id);
 var index = $scope.orders.indexOf(order);

        var promise = $http.put('https://lazywaiter.couchappy.com/orders/' + order._id, order);
        promise.success(function(data, status, headers, config) {
            console.log(data);
            alert("status changed (to_paid)");
            if (index !== -1) {
                delete $scope.orders[index];
            }
        });
        promise.error(function(data, status, headers, config) {
order.status = 'to_delivery';
            alert("error: Data not updated");
        });
};

*/

}]);
