// public/js/controllers/AppCtrl.js
// add code to this file to call REST apis to get db data
// add code to this file to fill up the $scope variables

angular
	.module('ppApp')
	.controller('AppCtrl', function($scope, AppFactory) {

    	 $scope.assetArray = AppFactory.getDataArray();

    	 // following lines added for pepade
    	 $scope.submitorder = function() {
                 $scope.sender = angular.copy($scope.sender);
             };
             $scope.submitorder();
	});

