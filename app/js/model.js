/*

var waiterModel = angular.module('waiterService',[]).service('waiterService','$http', function($http){

	var getOrders = function(){
		$http({method: 'GET', url: 'https://lazywaiter.couchappy.com/orders/_design/orders/_view/all'}).success(function(data, status, headers, config) {
			return orders = data.rows;
    		});

	}

});*/

/* Services */

var waiterModel = angular.module('waiterModel', []);

waiterModel.factory('Order', [ '$http', function ($http) {


    var checkIfAlreadyExist = function(array, order) {
        for (var i = 0, l = array.length; i < l; i++) {
            if (array[i].id === order.id) {
                return true;
            }
        }

        return false;
    };

    return {
    
    orders : [],
    //ajouter des commande pour test
     addOrder: function() {
            var order =  {
                "tableNumber" : 88, // Number of the table
                "createdAt" : new Date().getTime(), // date creation of the command
                "products" : [ // all product in the command
                    {
                        "name" : "Beer", // name of the product
                        "quantity" : "1", // quantity for the product
                        "price" : "3" //price of the product
                    },
                    {
                        "name" : "Beer", // name of the product
                        "quantity" : "1", // quantity for the product
                        "price" : "3" //price of the product
                    },
                    {
                        "name" : "Beer", // name of the product
                        "quantity" : "1", // quantity for the product
                        "price" : "3" //price of the product
                    }
                ],
                "status" : "to_delivery" // command status
            };

            $http.post('https://lazywaiter.couchappy.com/orders/', order);
        },
    
    //récupérer les commandes
    getOrders: function () {
            var self = this;
            var promise = $http.get('https://lazywaiter.couchappy.com/orders/_design/orders/_view/all');

            promise.success(function(data, status, headers, config) {
                for (var i = 0, l = data.rows.length; i < l; i++) {
                    // Push only the new entries
                    if (data.rows[i].value.status === "to_delivery") {
                        if (!checkIfAlreadyExist(self.orders, data.rows[i])) {
                            self.orders.push(data.rows[i]);
                        }
                    }
                }
            });
            promise.error(function(data, status, headers, config) {
                alert("error: Data not found");
            });
        },
    
    
    //update status to paid
     updateStatusToPaid: function(order) {
            var self = this;
            var index = this.orders.indexOf(order);
            console.log(order);
            order.value.status = "to_paid";

            var promise = $http.put('https://lazywaiter.couchappy.com/orders/' + order.id, order.value);
            promise.success(function(data, status, headers, config) {
                if (index !== -1) {
                    self.orders.splice(index, 1);
                }
            });

            promise.error(function(data, status, headers, config) {
                order.value.status = "to_delivery";
                alert("error: Data not updated");
            });
        },
    
    	getTime: function(order) {
    		var now = new Date().getTime();
    		return Math.floor((now - order.value.createdAt));
    	},
       
    }
}]);

/*waiterModel.factory("ControlTime", [function() {

    return {
        /*
         * get the order's date until now in minutes
         * @param: The order which want to get the date
         *
         * @return: Integer (the order's date until now)
         */
       /* getOrderDateUntilNowInMinutes: function(order) {
            var now = new Date().getTime();
            var orderDate = order.value.createdAt;
            return Math.floor((now - orderDate)/ 60000)
        },

        /*
         * Check the control times for an order
         * @param: the order which want to check the control times
         *
         * @return: string (green, orange or red)
         */
      /*  checkOrderControlTimes: function (order) {
            var minutes = this.getOrderDateUntilNowInMinutes(order);
            if (minutes > 10) {
                return "red";
            } else if (minutes <= 10 && minutes > 5) {
                return "orange";
            } else {
                return "green";
            }
        }
    }

}]);*/
