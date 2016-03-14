angular.module('mudraApp.services', [])
.factory('networkService', function($http){

	var getYearListRequest = function(){
		return $http.get('/list_of_accounting_years/').then(function(result){
			return result.data;
		});
	};


	return {
		getYearListRequest : getYearListRequest
	};
});
