angular.module('mudraApp.controllers')
.controller('eventAccountingCtrl', function($scope, $log, $timeout, networkService, $stateParams){
	$log.debug('eventAccountingCtrl is loaded');

	$scope.datepickerOptions = {
		titleLabel: 'Title',
		todayLabel: 'Today',
		closeLabel: 'Close',
		setLabel: 'Set',
		setButtonType : 'button-assertive',
		todayButtonType : 'button-assertive',
		closeButtonType : 'button-assertive',
		inputDate: new Date(),
		mondayFirst: true,
		templateType: 'popup',
		showTodayButton: 'true',
		modalHeaderColor: 'bar-positive',
		modalFooterColor: 'bar-positive',
		callback: function (val) {  //Mandatory
			datePickerCallback(val);
		},
		dateFormat: 'dd-MM-yyyy',
		closeOnSelect: false
	};

	var datePickerCallback = function(val){
		$log.debug(val);
		if (typeof(val) === 'undefined') {
			$log.debug('No date selected');
		}else{
			$scope.datepickerOptions.inputDate = new Date(val);
			$log.debug('Selected date is : ', val);
		}
	};

	$scope.transactionTypeOptions = [
										{
											type: 'credit',
											shortHand: 'c'
										},
										{
											type: 'debit',
											shortHand: 'd'
										}
									];
	selectedTransactionTypeOptions = {};

});
