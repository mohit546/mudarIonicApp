angular.module('mudraApp.controllers')
.controller('accountsCtrl', function($scope, $timeout, $log, networkService, $stateParams){
	$log.debug('accountsCtrl is loaded');

	$log.debug($stateParams);
	$scope.date = null;
	if($stateParams.date.length > 0)
		$scope.date = $stateParams.date;
	$scope.init = function(){
		getAccountList();
	};
	$timeout($scope.init);

	var getAccountList = function(){
		var dataPromis = networkService.getAccountListRequest();
		dataPromis.then(function(result){
			$log.debug(result);
			if(!result.status){
				$log.debug(result.validation);
			}else{
				$scope.accountList = result.accountList;
			}
		});
	};
});
