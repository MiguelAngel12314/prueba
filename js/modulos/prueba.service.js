(function() {
	"use strict";
	angular.module("app.prueba")
	.service("servicePrueba",servicePrueba);

	servicePrueba.$inject= ['$http','$q'];

	function servicePrueba($http,$q) {
		return{
			respuesta: function(tipo,datos) {
				
				var deferred = $q.defer();
				var params = {
							 method: tipo,
							 url: 'https://digital-factory.herokuapp.com//api/numbers',
							 headers: {
							   'Content-Type': 'application/json'
							 },
							 data: datos
							}
				$http(params)
				.then(SuccessOrError)
				.catch(SuccessOrError);
				function SuccessOrError(data) {
					if (data) deferred.resolve(data);
					else deferred.reject(data)
				}
				return deferred.promise;
			}
		}
	}

})();