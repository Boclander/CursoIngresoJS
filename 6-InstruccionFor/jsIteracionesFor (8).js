function mostrar()
{
    var numero=prompt("Ingrese un número para saber si es primo o compuesto.");
    var cantDivisores=0;
    numero=parseInt(numero);

    for (var i=1; i <= numero; i++){
        if (numero % i == 0){
            cantDivisores++;
        }
    }
    if (cantDivisores > 2){
        alert("El número es COMPUESTO.");
    } else {
        alert("El número es PRIMO.");
    }
}//FIN DE LA FUNCIÓN