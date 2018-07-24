function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta='si';

	while (respuesta == "si"){
		++contador;
		numero=prompt("Ingrese un número.");
		numero=parseInt(numero);
		if (numero >= 0){
			positivo= positivo + numero;
		} else {
			negativo= negativo * numero;
		}
		respuesta=prompt("Quiere seguir?");
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN