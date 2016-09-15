/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/

var app = angular.module('AgilidadAritmetica1', []);//primer parametro es el nombre de modulo. puede tener muchos modulos
app.controller("controladorAgilidadAritmetica1", function($scope){

	var totaloperacion;
	var operador;
	$scope.datos={};
	$scope.comenzar = function()
	{
      $scope.datos.randomprimernumero = Math.floor( Math.random()*10)+1;
      $scope.datos.randomsegundonumero = Math.floor( Math.random()*10)+1;
	  operador = Math.floor( Math.random()*4)+1; 
	  switch(operador)
		{
			case 1:				
				$scope.datos.randomoperador="Suma";
				totaloperacion = $scope.datos.randomprimernumero + $scope.datos.randomsegundonumero
				break;
			case 2:
				$scope.datos.randomoperador="Resta";
				totaloperacion = $scope.datos.randomprimernumero - $scope.datos.randomsegundonumero
				break;
			case 3:
				$scope.datos.randomoperador="Multiplicación";
				totaloperacion = $scope.datos.randomprimernumero * $scope.datos.randomsegundonumero
				break;
			case 4:
				$scope.datos.randomoperador="división";
				totaloperacion = $scope.datos.randomprimernumero / $scope.datos.randomsegundonumero
				break;
		}
	   return totaloperacion;
	}//FIN DE LA FUNCIÓN
	
	$scope.Responder = function()
	{
		if ( parseInt($scope.datos.respuesta) == totaloperacion )
		 {
           $scope.resultado = "Correcto!!";
		 } 
		else
		 {
           $scope.resultado = "Incorrecto!!";
		 } 
       $scope.comenzar();
	}//FIN DE LA FUNCIÓN

});//cada vez que se recarga la pagina se recarga el controlador
