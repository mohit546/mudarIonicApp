angular.module('mudraApp.services', [])
.constant('mudraServer', '/mudra')
.factory('networkService', function($http, mudraServer){


	var loginRequest = function(name, password){
		return $http.post(mudraServer + '/user_login/', {username: name, password: password}).then(function(result){
			return result.data;
		});
	};

	var getYearListRequest = function(){
		return $http.get(mudraServer + '/list_of_accounting_years/').then(function(result){
			return result.data;
		});
	};

	var getAccountListRequest = function(pageno, entriesperpage){
		return $http.post(mudraServer + '/show_account_details/', {pageNo: pageno, entriesPerPage: entriesperpage}).then(function(result){
			return result.data;
		});
	};



	return {
		loginRequest : loginRequest,
		getYearListRequest : getYearListRequest,
		getAccountListRequest : getAccountListRequest
	};
});
