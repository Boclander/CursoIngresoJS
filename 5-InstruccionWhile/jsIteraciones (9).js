function mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var minimo;
	var respuesta='si';
	var bandera=true;

	while(respuesta!='no')
	{
		++contador
		numero=prompt("Ingrese un número.");
		numero=parseInt(numero);
		
		if(bandera){
			bandera=false;
			maximo=numero;
			minimo=numero;
		}
		if(numero > maximo){
			maximo=numero;
		}
		if(numero < minimo){
			minimo=numero;
		}

		respuesta=prompt("Quiere continuar?");
		
	}
	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo").value=minimo;

}//FIN DE LA FUNCIÓN