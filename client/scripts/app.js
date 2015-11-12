/**
 * Created by colinmiller on 11/11/15.
 */
var myApp = angular.module("myApp", []);

myApp.controller("NumberController", ["$scope", "$http", function($scope, $http){
    console.log("Are you working?");
    $scope.people = [];

    $scope.getPeople = function(){
        $http.get('/people').then(function(response) {
            console.log("Did you get this?");
            $scope.people = response.data;
            console.log(response.data);
        });
    }
    $scope.getPeople()
}]);