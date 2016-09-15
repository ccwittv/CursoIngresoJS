
var app = angular.module('PiedarPapelTijera2', []);//primer parametro es el nombre de modulo. puede tener muchos modulos

app.controller("controladorPiedarPapelTijera2", function($scope){
var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;
$scope.datos={};
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
		ContadorDeEmpates++;			
	}
	else if(eleccionMaquina=="tijera")
	{
		$scope.resultado="vos ganastes.";
		ContadorDeGanadas++;
	}
	else
	{
		$scope.resultado="ganó la Maquina.";
		ContadorDePerdidas++;
	}
	$scope.mostrarResultado();
}//FIN DE LA FUNCIÓN

$scope.papel = function()
{
	$scope.seleccionMaquina="la maquina selecciono: "+eleccionMaquina;
	eleccionHumano="papel";
	if(eleccionHumano==eleccionMaquina)
	{
		$scope.resultado="empate.";
		ContadorDeEmpates++;	
	}
	else if(eleccionMaquina=="piedra")
	{
		$scope.resultado="vos ganastes.";
		ContadorDeGanadas++;
	}
	else
	{
		$scope.resultado="ganó la Maquina.";
		ContadorDePerdidas++;
	}
	$scope.mostrarResultado();
}//FIN DE LA FUNCIÓN

$scope.tijera = function()
{
	$scope.seleccionMaquina="la maquina selecciono: "+eleccionMaquina;
	eleccionHumano="tijera";
	if(eleccionHumano==eleccionMaquina)
	{
		$scope.resultado="empate.";
		ContadorDeEmpates++;		
	}
	else if(eleccionMaquina=="papel")
	{
		$scope.resultado="vos ganastes.";
		ContadorDeGanadas++;
	}
	else
	{
		$scope.resultado="ganó la Maquina.";
		ContadorDePerdidas++;
	}
	$scope.mostrarResultado();
}//FIN DE LA FUNCIÓN

$scope.mostrarResultado = function()
{

	$scope.datos.empatadas=ContadorDeEmpates + " partidas empatadas.";
	$scope.datos.perdidas=ContadorDePerdidas + " partidas perdidas.";
	$scope.datos.ganadas=ContadorDeGanadas + " partidas ganadas.";

	$scope.comenzar();
}

});//cada vez que se recarga la pagina se recarga el controlador