/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
/*var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
	

}

function verificar()
{
	
	
}*/

var app = angular.module('AdivinaElNumero1', []);//primer parametro es el nombre de modulo. puede tener muchos modulos

app.controller("controladorAdivinaElNumero1", function($scope){
	var numeroSecreto; 
	var contadorIntentos;
	$scope.datos={};
    $scope.Comenzar=function(){
		//Genero el número RANDOM entre 1 y 100		
	 	numeroSecreto =Math.floor( Math.random()*100)+1;
		contadorIntentos=0;
		$scope.datos.intentos=contadorIntentos;
	
		//alert(numeroSecreto );
	
	}

	$scope.Verificar=function(){
		numeroIngresado=$scope.datos.numero;

		contadorIntentos++;
		$scope.datos.intentos=contadorIntentos;
			//alert(numeroIngresado );
		if(numeroIngresado==numeroSecreto)
			{
			   //alert("usted es un ganador!!!, y solo en "+contadorIntentos+" intentos.");
			   $scope.resultado= "usted es un ganador!!!, y solo en "+contadorIntentos+" intentos.";
			}
		else if(numeroIngresado<numeroSecreto)
			{
				//alert("falta...");
				$scope.resultado="falta...";
			}
		else
			{
				//alert("se Pasó...");
				$scope.resultado="se Pasó...";
			}
		
		}

});//cada vez que se recarga la pagina se recarga el controlador