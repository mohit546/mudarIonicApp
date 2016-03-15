angular.module('mudraApp.controllers')
.controller('transactionDetailsCtrl', function($scope, $log, $timeout, networkService, $stateParams){
	$log.debug('transactionDetailsCtrl is loaded');
	$log.debug($stateParams);

	$scope.date = null;
	if($stateParams.date.length > 0)
		$scope.date = $stateParams.date;

	$scope.details = {};

	$scope.init = function(){
		getTransactionRecord();
	};
	$timeout($scope.init);

	var getTransactionRecord = function(){
		var dataPromis = networkService.getTransactionRecordRequest($stateParams.id, $scope.date);
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
