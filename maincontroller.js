app.controller("MainController", function($scope){
  $scope.items = [];
    $scope.newItem = null;
    $scope.addNew = function() {
        if ($scope.newItem != null && $scope.newItem != "") {
            $scope.items.push({name:$scope.newItem});
            $scope.newItem = null;
        }
    }
});