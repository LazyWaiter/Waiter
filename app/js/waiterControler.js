var waiterControllers = angular.module('lazyWaiter', []);
waiterControllers.controller('ordersListCtrl', function ($scope) {

    http.get('//lazywaiter.couchappy.com/orders/_design/orders/_view/all').
            success(function (data, status, headers, config) {
                $scope.orders = data.rows;
console.log(data.rows);
            }).error(function (data, status, headers, config) {

    });
});
