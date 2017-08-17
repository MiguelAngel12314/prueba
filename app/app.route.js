(function() {
	"use strict";
	angular.module("app")
	.config(configuracion)

	configuracion.$inject=['$routeProvider']

	function configuracion($routeProvider) {
		$routeProvider
		.when("/", {
        templateUrl : "js/modulos/prueba.html",
        controller:"prueba",
        controllerAs:"vm"
    });
	}
})();