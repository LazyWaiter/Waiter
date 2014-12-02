

var lazyWaiter = angular.module('lazyWaiter', []);

lazyWaiter.controller('ordersListCtrl', function ($scope) {
 $scope.commands = [
        {
            table : 6,
            status : "completed",
            paid : "no-paid",
            products :[
                {name : "biere",quantity : 2},
                {name : "Jus de pomme",quantity : 1}
            ]
        }
    ];
});


//function ordersListCtrl($scope){
//    
//    
//}
//function TodoCtrl($scope, filterFilter) {
//    $scope.todos = [
//        {name: "Tache incomplete", completed: false, paid: false},
//        {name: "Tache complete", completed: true, paid: true}
//    ];
//
//
//    $scope.$watch('todos', function() {
//
//        $scope.remaining = filterFilter($scope.todos, {completed: false}).length;
//    }, true)
//            ;
//    $scope.removeTodo = function(index) {
//        $scope.todos.splice(index, 1);
//    };
//
//
//    $scope.addTodo = function() {
//
//        $scope.todos.push({
//            name: $scope.newtodo,
//            completed: false
//        });
//        $scope.newtodo = '';
//    };
//
//$scope.allCheckedTodo = function(allchecked){
//    $scope.todos.forEach(function(todo){
//        todo.completed = allchecked;
//        todo.paid = allchecked;
//    });
//    
//};
//
//}



