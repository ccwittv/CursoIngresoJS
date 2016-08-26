/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
/*function Sumar () 
{
	
}
function Promedio () 
{
	
}
function PrecioFinal () 
{
	
}*/

var app = angular.module('ferreteFactuacion', []);//primer parametro es el nombre de modulo. puede tener muchos modulos

app.controller("controladorFacturacion", function($scope){

	//puedo usar javascript en un controlador de angular
	$scope.test="Hola Angular";
	$scope.precio={};
	$scope.Sumar=function(){
		$scope.resultado= parseInt($scope.precio.uno) + parseInt($scope.precio.dos) + parseInt($scope.precio.tres);
		return $scope.resultado;
	}

	$scope.Promedio=function(){
		$scope.resultado=(parseInt($scope.precio.uno) + parseInt($scope.precio.dos) + parseInt($scope.precio.tres))/3;
	}

	$scope.PrecioFinal=function(){
		$scope.resultado = $scope.Sumar() + ($scope.Sumar()*0.21);

	}


});//cada vez que se recarga la pagina se recarga el controlador



