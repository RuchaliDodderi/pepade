// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'AppCtrl'
        })

        // theme page
        .when('/sosb', {
            templateUrl: 'views/sosb.html'
        })

        // theme page
        .when('/nene', {
            templateUrl: 'views/nene.html'
        })

		// theme page
        .when('/smsc', {
            templateUrl: 'views/smsc.html'
         })

		// theme page
        .when('/desc', {
            templateUrl: 'views/desc.html'
        })
		
		// app page
        .when('/liveRadial', {
            templateUrl: 'views/liveRadial.html'
        })

	    // default partial html that will be loaded when browser loads index.html at the beginning 
		.otherwise ({
		 		redirectTo: '/home'
	    });

    $locationProvider.html5Mode(true);

}]);
