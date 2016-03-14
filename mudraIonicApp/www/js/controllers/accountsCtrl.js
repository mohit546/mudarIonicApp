angular.module('mudraApp.controllers')
.controller('accountsCtrl', function($scope, $timeout, $log, networkService){
	$log.debug('accountsCtrl is loaded');

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
