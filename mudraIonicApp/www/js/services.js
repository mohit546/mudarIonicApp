angular.module('mudraApp.services', [])
.constant('mudraServer', 'http://192.168.1.124:8000')
.factory('networkService', function($http, mudraServer){

	var getYearListRequest = function(){
		return $http.get(mudraServer + '/list_of_accounting_years/').then(function(result){
			return result.data;
		});
	};


	return {
		getYearListRequest : getYearListRequest
	};
});
