angular.module('mudraApp.controllers')
.controller('transactionDetailsCtrl', function($scope, $log, $timeout, networkService, $stateParams){
	$log.debug('transactionDetailsCtrl is loaded');
	$log.debug($stateParams);

	$scope.details = {};

	$scope.init = function(){
		getTransactionRecord();
	};
	$timeout($scope.init);

	var getTransactionRecord = function(){
		var dataPromis = networkService.getTransactionRecordRequest($stateParams.id, $stateParams.date);
		dataPromis.then(function(result){
			$log.debug(result);
			if(!result.status){
				$log.debug('error');
			}else{
				$scope.details.accountDetails = result.account_details;
				$scope.details.transactionList = result.transactionList;
			}
		});
	};

});
