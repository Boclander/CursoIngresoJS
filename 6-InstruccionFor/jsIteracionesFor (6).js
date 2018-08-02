function mostrar()
{
    var numero=prompt("Ingrese un numero.");
    numero=parseInt(numero);
    var numerosPares=0;

    if (numero %2 != 0){
        numero--;
    }
    for (var i=numero; i <= numero && i > 0; i=i-2){
        numerosPares++;
        document.write(" "+i+" ");
    }
    document.write("<br>"+"Cantidad de números pares: "+numerosPares);
}
    //FIN DE LA FUNCIÓN