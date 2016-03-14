angular.module('mudraApp.controllers')
.controller('myAccountCtrl', function($scope, $timeout, networkService){
	console.log('myAccountCtrl is loaded');

	$scope.init = function(){
		getYearList();
	};
	$timeout($scope.init);

	var getYearList = function(){
		var dataPromis = networkService.getYearListRequest();
		dataPromis.then(function(result){
			console.log(result);
			if(!result.status){
				console.log(result.validation);
			}else{
				$scope.accountingYearList = result.AccYearsList;
			}
		});
	};

});
