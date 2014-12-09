var waiterControllers = angular.module('waiterController', []);
waiterControllers.controller('ordersListCtrl', ['$scope','$http','$interval',function ($scope, $http) {


//$interval(function(){
//getData($scope.orders)
//},4000);


    $scope.orders = [];
    var promise = $http({method: 'GET', url: 'https://lazywaiter.couchappy.com/orders/_design/orders/_view/all'})
    promise.success(function(data, status, headers, config) {
        
//$scope.orders = data.rows;
        // Get orders with "to_delivery" state
        //for(var i = 0, l = data.rows.length; i < l; i++) {
           // if (data.rows[i].value.state === "to_delivery") {
                //$scope.orders.push(data.rows[i]);
           // }
       // }
$scope.orders = data.rows;
    });

 $scope.isToDelivery = function(order) {
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



}]);
