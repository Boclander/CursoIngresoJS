function mostrar()
{
    var numero=prompt("Ingrese un numero.");
    numero=parseInt(numero);
    var numerosPares;

    if (numero %2 != 0){
        numero--;
    }
    for (var i=numero; i <= numero; i=i-2){
        console.log(i);
        numerosPares++;
        if (i == 0){
            break;
        }
    }
}
    //FIN DE LA FUNCIÓN