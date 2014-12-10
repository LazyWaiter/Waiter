

var waiterModel = angular.module('waiterService', ['$http']).service('$http', function($http){

	var getOrders = function(){
		$http({method: 'GET', url: 'https://lazywaiter.couchappy.com/orders/_design/orders/_view/all'}).success(function(data, status, headers, config) {
			return orders = data.rows;
    		});

	}

});
