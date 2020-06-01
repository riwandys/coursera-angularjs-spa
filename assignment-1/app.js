(function() {
    'use strict';

    angular.module('LunchChecker', [])
    .controller('CheckController', CheckController);

    CheckController.$inject = ['$scope'];
    function CheckController($scope){
        $scope.dishes = "";
        $scope.message = "";

        $scope.countDishes = function () {
            if ($scope.dishes == "") {
                $scope.message = "Please enter data first";
            } else {
                var dishes_array = $scope.dishes.split(",");
                var count = 0;

                dishes_array.forEach(function(item, index){
                    if (item.trim() == "") {
                        
                    } else {
                        count += 1;
                    }
                });
                if (count <= 3) {
                    $scope.message = "Enjoy!";
                } else {
                    $scope.message = "Too Much!";
                }
            }
        }
    }
})();