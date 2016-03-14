angular.module('mudraApp.controllers')
.controller('myAccountCtrl', function($scope, $timeout, networkService){
	console.log('myAccountCtrl is loaded');

	$scope.init = function(){
		getYearList();
	};
	$timeout($scope.init);

	var getYearList = function(){
		var dataPromis = networkService.getYearListRequest();
	};

});
