// public/js/factories/CityFactory.js
// add code to this file to call REST apis to get db data
// add code to this file to fill up the $scope variables
// use ng resources instead of http for REST API
// use http to directly fetch from json file as in below code

angular
	.module('ppApp')
	.factory('CityFactory', function($http) {

	function getDataArray() {

		var dataArray;
		
		$http.get('data/cities.json').then(function(response) {
			dataArray = response.data.cities;
		});
		return dataArray;
	}

	return {
		getDataArray: getDataArray
	}

});
