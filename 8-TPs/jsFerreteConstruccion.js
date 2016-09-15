/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

var app = angular.module('ferreteConstruccion', []);//primer parametro es el nombre de modulo. puede tener muchos modulos

app.controller("controladorConstruccion", function($scope){

	//puedo usar javascript en un controlador de angular
	$scope.datos={};
	$scope.semuestra={};
	$scope.Rectangulo=function(){
		$scope.semuestra={};
	    $scope.resultado={};	
		$scope.semuestra.Uno = "Cantidad de alambre (rectángulo) en metros"
		$scope.resultado.perimetro= (($scope.datos.largo * 2) + ($scope.datos.ancho * 2))*3;
	}

	$scope.Circulo=function(){
		$scope.semuestra={};
		$scope.resultado={};
		$scope.semuestra.Uno = "Cantidad de alambre (círculo) en metros"
		$scope.resultado.perimetro= (2 * 3.14 * $scope.datos.radio) * 3;
	}

	$scope.Materiales=function(){
		$scope.semuestra={};
		$scope.resultado={};
		$scope.metroscuad = $scope.datos.largo * $scope.datos.ancho;
		$scope.semuestra.Dos = "Bolsas de cemento";
		$scope.resultado.cemento= ($scope.metroscuad*2);
		$scope.semuestra.Tres = "Bolsas de cal";
		$scope.resultado.cal= ($scope.metroscuad*3);

	}


});//cada vez que se recarga la pagina se recarga el controlador