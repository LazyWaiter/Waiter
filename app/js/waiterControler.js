var waiterControllers = angular.module('lazyWaiter', []);
waiterControllers.controller('ordersListCtrl', ['$scope','$http',function ($scope, $http) {

    $http.get('//lazywaiter.couchappy.com/orders/_design/orders/_view/all').
            success(function (data, status, headers, config) {
               console.log(data.rows);   
               console.log(status); 
               console.log(headers); 
               console.log(config); 
                 $scope.orders = data.rows;
console.log(data.rows);
            }).error(function (data, status, headers, config) {

    });

}]);
