/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
/*var eleccionMaquina;

function comenzar()
{
	


}//FIN DE LA FUNCIÓN
function piedra()
{
	

}//FIN DE LA FUNCIÓN
function papel()
{


}//FIN DE LA FUNCIÓN
function tijera()
{
	

}//FIN DE LA FUNCIÓN*/

var app = angular.module('PiedarPapelTijera1', []);//primer parametro es el nombre de modulo. puede tener muchos modulos

app.controller("controladorPiedarPapelTijera1", function($scope){
var eleccionMaquina;
$scope.comenzar=function()
{
	//Genero el número RANDOM entre 1 y 3
	 	numeroSecreto =Math.floor( Math.random()*3)+1;
		//alert(numeroSecreto);
		switch(numeroSecreto)
		{
			case 1:
				eleccionMaquina="piedra";
				break;
			case 2:
				eleccionMaquina="papel";
				break;
			case 3:
				eleccionMaquina="tijera";
				break;

		}
		//alert(eleccionMaquina);
		return eleccionMaquina;
		
}//FIN DE LA FUNCIÓN

$scope.piedra = function()
{
	$scope.seleccionMaquina="la maquina selecciono: "+eleccionMaquina;
	eleccionHumano="piedra";
	if(eleccionHumano==eleccionMaquina)
	{
		$scope.resultado="empate.";		
	}
	else if(eleccionMaquina=="tijera")
	{
		$scope.resultado="vos ganastes.";
	}
	else
	{
		$scope.resultado="ganó la Maquina.";
	}
    $scope.comenzar();
}//FIN DE LA FUNCIÓN

$scope.papel = function()
{
	$scope.seleccionMaquina="la maquina selecciono: "+eleccionMaquina;
	eleccionHumano="papel";
	if(eleccionHumano==eleccionMaquina)
	{
		$scope.resultado="empate.";
	}
	else if(eleccionMaquina=="piedra")
	{
		$scope.resultado="vos ganastes.";
	}
	else
	{
		$scope.resultado="ganó la Maquina.";
	}
	$scope.comenzar();
}//FIN DE LA FUNCIÓN

$scope.tijera = function()
{
	$scope.seleccionMaquina="la maquina selecciono: "+eleccionMaquina;
	eleccionHumano="tijera";
	if(eleccionHumano==eleccionMaquina)
	{
		$scope.resultado="empate.";	
	}
	else if(eleccionMaquina=="papel")
	{
		$scope.resultado="vos ganastes.";
	}
	else
	{
		$scope.resultado="ganó la Maquina.";
	}
	$scope.comenzar();
}//FIN DE LA FUNCIÓN

});//cada vez que se recarga la pagina se recarga el controlador