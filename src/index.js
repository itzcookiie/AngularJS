import angular from "angular";

angular.module("myApp", []).controller("myController", function($scope) {
  $scope.list = [];

  $scope.addItem = () => {
    $scope.list.push($scope.inputValue);
    console.log($scope.inputValue);
  };

  $scope.inputValue = "";
});
