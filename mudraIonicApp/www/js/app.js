angular.module('mudraApp', ['ionic', 'mudraApp.controllers'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/menu.html',
		controller: 'mudraAppCtrl'
	})

	.state('app.myAccount', {
		url: '/myAccount',
		views: {
			'menuContent': {
				templateUrl: 'templates/myAccount.html',
				controller: 'myAccountCtrl'
			}
		}
	})

	.state('app.accounts', {
		url: '/accounts',
		views: {
			'menuContent': {
				templateUrl: 'templates/accounts.html'
			}
		}
	})

	.state('app.editAccount', {
		url: '/editAccount',
		views: {
			'menuContent': {
				templateUrl: 'templates/editAccount.html'
			}
		}
	})

	.state('app.eventAccounting', {
		url: '/eventAccounting',
		views: {
			'menuContent': {
				templateUrl: 'templates/eventAccounting.html',
		  // controller: 'eventAccountingCtrl'
			}
		}
	})

	.state('app.activities', {
		url: '/activities',
		views: {
			'menuContent': {
				templateUrl: 'templates/activities.html',
		// controller: 'PlaylistCtrl'
			}
		}
	});

	$urlRouterProvider.otherwise('/app/myAccount');
});
