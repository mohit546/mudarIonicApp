angular.module('mudraApp.controllers')
.controller('transactionDetailsCtrl', function($scope, $log, $timeout, networkService, $stateParams){
	$log.debug('transactionDetailsCtrl is loaded');
	$log.debug($stateParams);

	$scope.init = function(){
		getTransactionRecord();
	};
	$timeout($scope.init);

	var getTransactionRecord = function(){
		var dataPromis = networkService.getTransactionRecordRequest($stateParams.id, $stateParams.date);
		dataPromis.then(function(result){
			$log.debug(result);
		});
	};

});
