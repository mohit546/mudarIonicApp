angular.module('mudraApp.controllers', [])

.controller('mudraAppCtrl', function($scope, $ionicModal, $timeout) {
	console.log('mudraAppCtrl is loaded');

	$scope.loginData = {};

	$ionicModal.fromTemplateUrl('templates/login.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modal = modal;
		$scope.modal.show();
	});

	$scope.closeLogin = function() {
		$scope.modal.hide();
	};

	$scope.login = function() {
		$scope.modal.show();
	};

	$scope.doLogin = function() {
		console.log('Doing login', $scope.loginData);
		$timeout(function() {
			$scope.closeLogin();
		}, 1000);
	};
});
