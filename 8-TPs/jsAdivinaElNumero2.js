/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

/*var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
	

}

function verificar()
{
	
	

}*/

var app = angular.module('AdivinaElNumero2', []);//primer parametro es el nombre de modulo. puede tener muchos modulos

app.controller("controladorAdivinaElNumero2", function($scope){
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
			   switch(contadorIntentos)
				{
					case 1:
						$scope.resultado="usted es un psíquico";
						break;
					case 2:
						$scope.resultado="excelente percepción";
						break;
					case 3:
						$scope.resultado="Esto es suerte";
						break;
					case 4:
						$scope.resultado="Excelente técnica";
						break;
					case 5:
						$scope.resultado="usted está en la media";
						break;
					default:
						if(contadorIntentos<10)
						{
							$scope.resultado="falta técnica";
						}
						else
						{
							$scope.resultado="afortunado en el amor!!";
						}
						
						break;
				}
			}	
		else if(numeroIngresado<numeroSecreto)
			{
				$scope.resultado="falta...";
			}
		else
			{
				$scope.resultado="se Pasó...";
			}
		
		}

});//cada vez que se recarga la pagina se recarga el controlador