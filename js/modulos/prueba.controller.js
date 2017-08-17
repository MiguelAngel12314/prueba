(function() {
	"use strict";
	angular
	.module("app.prueba")
	.controller("prueba",prueba)

	prueba.$inject=['$interval','servicePrueba'];

	function prueba($interval,servicePrueba) {
		var vm = this;

		/******************/
		/*****String*******/
		/******************/
		vm.texto = "";

		/******************/
		/***FUNCTIONS******/
		/******************/
		vm.contador = contador;

		//Sacar hora
		vm.hora=new Date();

		$interval(function() {
			vm.hora=new Date();
		},3000);


		function contador() {
			if (vm.texto.length > 120) vm.style = "red";
			else vm.style = "white";
		}

		//Mostrar REspuestas Servicios
		servicePrueba.respuesta('get').then(respuesta)
		.catch(respuesta);

		function respuesta(argument) {
			// body...
		}
	}
})();