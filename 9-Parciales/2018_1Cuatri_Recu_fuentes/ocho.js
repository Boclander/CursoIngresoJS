function mostrar()
{
    var rta="si";
    var cont=0;
    var contLibrosPagPares=0;
    var contLibrosPagImpares=0;
    var acumPagsProgr=0;
    var contVentasCero=0;
    var acumVentas=0;
    var promedioVentas;
    var nombre;
    var paginas;
    var ventas;
    var tema;

    while (rta != "no"){
        cont++;
        nombre=prompt("Nombre del libro.");
        paginas=prompt("Cantidad de páginas.");
        paginas=parseInt(paginas);
        ventas=prompt("Cantidad de ventas.");
        ventas=parseInt(ventas);
        tema=prompt("Tema (Robótica, Programación, Patrones, Base de datos.)");
        while (tema != "programacion" && tema != "robotica" && tema != "patrones" && tema != "base de datos"){
            tema=prompt("Temas válidos: Robótica, Programación, Patrones, Base de datos.");
        }
        rta=prompt("Desea introducir otro libro?");
    
    if (paginas % 2 == 0){                                                      //Libros con pags pares e impares.
        contLibrosPagPares++;
    } else {
        contLibrosPagImpares++;
    }
    if (ventas == 0){                                                           //Ventas cero.
        contVentasCero++;
    }
    acumVentas+=ventas;
    if (tema == "programacion"){
        acumPagsProgr+=paginas;
    }
    }
    promedioVentas=acumVentas/cont;                                              //Promedio ventas.

    document.write("Cantidad de libros con páginas pares: "+contLibrosPagPares+"<br>"
    +"Cantidad de libros con páginas impares: "+contLibrosPagImpares+"<br>"
    +"Cantidad de libros con cero ventas: "+contVentasCero+"<br>"
    +"Promedio de todas las ventas: "+promedioVentas+"<br>"
    +"Suma de todas las páginas de los libros de Programación: "+acumPagsProgr);
}

