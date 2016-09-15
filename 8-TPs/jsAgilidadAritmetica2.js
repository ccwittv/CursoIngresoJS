/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var app = angular.module('AgilidadAritmetica2', []);//primer parametro es el nombre de modulo. puede tener muchos modulos
app.controller("controladorAgilidadAritmetica2", function($scope){

	var totaloperacion;
	var operador;
	var tiempo=0;
	var finTiempo;
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
				$scope.datos.randomoperador="División";
				totaloperacion = $scope.datos.randomprimernumero / $scope.datos.randomsegundonumero
				break;
		}
	   //tiempo = 5000.
	   finTiempo = setTimeout($scope.temporizador, 5000);  
	   return totaloperacion;
	}//FIN DE LA FUNCIÓN
	
	$scope.Responder = function()
	{
		if ( parseInt($scope.datos.respuesta) == totaloperacion )
		 {
           $scope.resultado = "Correcto!!";
           clearTimeout(finTiempo);
		 } 
		else
		 {
           $scope.resultado = "Incorrecto!!";
           clearTimeout(finTiempo);
		 } 
       //$scope.comenzar();
	}//FIN DE LA FUNCIÓN
	
	$scope.temporizador = function()
	{
       //tiempo = tiempo / 1000. 
       //$scope.resultado = "Incorrecto!! (fin del tiempo)";
       alert("Incorrecto!! (fin del tiempo)"); 
	}

});//cada vez que se recarga la pagina se recarga el controlador
