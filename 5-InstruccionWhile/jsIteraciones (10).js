function mostrar()
{

	var contador=0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var acumuladorPositivos=0;
	var acumuladorNegativos=0;
	var contadorPares=0;
	var contadorCeros=0;

	//declarar contadores y variables 
	var numero;
	var respuesta="si";
	var promPositivos;
	var promNegativos;
	var diferencia;

	while (respuesta!="no")
	{
		++contador;
		numero=prompt("Ingrese un número.");
		numero=parseInt(numero);
		if (numero > 0){
			++contadorPositivos;
			acumuladorPositivos+=numero;
		}
		if (numero < 0){
			++contadorNegativos;
			acumuladorNegativos+=numero;
		}
		if (numero == 0){
			++contadorCeros;
		}
		if (numero |2|0 && numero != 0){
			++contadorPares;
		}
		respuesta=prompt("Quiere continuar?");
	}
	promNegativos=acumuladorNegativos/contadorNegativos;
	promPositivos=acumuladorPositivos/contadorPositivos;
	diferencia=contadorPositivos-contadorNegativos;

	document.write("Suma de los negativos: "+acumuladorNegativos+"<br>"+"Suma de los positivos: "+acumuladorPositivos+"<br>"+"Cantidad de positivos: "+contadorPositivos+"<br>"+"Cantidad de negativos: "+contadorNegativos+"<br>"+"Cantidad de ceros: "+contadorCeros+"<br>"+"Cantidad de números pares: "+contadorPares+"<br>"+"Promedio de positivos: "+promPositivos+"<br>"+"Promedio de negativos: "+promNegativos+"<br>"+"Diferencia de positivos y negativos: "+diferencia);



}//FIN DE LA FUNCIÓN