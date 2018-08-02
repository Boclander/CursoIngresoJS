function mostrar()
{    
    var numero;
    var divisores=1;
    var cantDivisores=0;
    numero=prompt("Ingrese un número.");
    numero=parseInt(numero);

    for (var i=1; i <= numero; i++){
        if (numero % i == 0){
            divisores=i;
            cantDivisores++;
            document.write(" "+divisores+" ");
        }    
    }
    document.write(" "+"<br>"+"La cantidad de divisores es "+cantDivisores);
}//FIN DE LA FUNCIÓN