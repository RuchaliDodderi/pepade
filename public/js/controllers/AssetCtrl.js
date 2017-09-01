// public/js/controllers/AssetCtrl.js
// add code to this file to call REST apis to get db data
// add code to this file to fill up the $scope variables

angular
	.module('ppApp')
	.controller('AssetCtrl', function($scope, AppFactory, CityFactory) {

    	$scope.assetArray = AppFactory.getDataArray();   
	$scope.cityArray = CityFactory.getDataArray();

	// CityFactory.getDataArray().success(function(cities) {
	// 	$scope.cityArray = cities;
	// }).error(function(error){
	// 	console.log(error);
	// });
});
