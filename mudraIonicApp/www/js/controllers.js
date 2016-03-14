angular.module('mudraApp.controllers', [])

.controller('mudraAppCtrl', function($scope, $ionicModal, $timeout, networkService, $http, $state) {
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
		console.log('doLogin doLogin doLogin doLogin ');
		var dataPromis = networkService.loginRequest($scope.loginData.username, $scope.loginData.password);
		dataPromis.then(function(result){
			console.log(result);
			if(!result.status){
				console.log(result.validation);
			}else{
				$scope.closeLogin();
				$state.go('myAccount');
			}
		});
	};

});
