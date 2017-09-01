// public/js/factories/AppFactory.js
// add code to this file to call REST apis to get db data
// add code to this file to fill up the $scope variables

angular
	.module('ppApp')
	.factory('AppFactory', function() {

    	var dataArray = [

	{"assettype": "meter",
	 "assetid": 1001,
	 "assetprice": 10000
	},
	{"assettype": "meter",
	 "assetid": 1002,
	 "assetprice": 10000
	},
	{"assettype": "meter",
	 "assetid": 1003,
	 "assetprice": 10000
	}

	];   

	function getDataArray() {
		return dataArray;
	}

	return {
		getDataArray: getDataArray
	}

});
