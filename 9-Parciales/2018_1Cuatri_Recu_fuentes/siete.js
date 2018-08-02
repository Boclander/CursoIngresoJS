function mostrar()
{
    var cont=0;
    var contMujeres=0;
    var bandera=true;
    var acumNotas=0;
    var promedio;
    var max=0;
    var min=10
    var nota;
    var notaPrimeraMujer;
    var hombresMayoresAprobados=0;
    var edad;
    var edadPrimeraMujer;
    var joven=100;
    var sexo;
    var sexoMasJoven;
    var notaMasJoven;
    var sexoNotaMasBaja;

    while (cont <5){
        cont++
        nota=prompt("Ingrese nota.");
        nota=parseInt(nota);
        edad=prompt("Ingrese edad.");
        sexo=prompt("Ingrese sexo.");
        sexo=sexo.toLowerCase();
        while (nota < 0 || nota > 10){
            nota=prompt("Ingrese nota válida.");
            nota=parseInt(nota);
        }
        acumNotas=acumNotas+nota;                                       //Acumulador de notas.
        while (sexo != "f" && sexo != "m"){
            sexo=prompt("Ingrese sexo válido.");
            sexo=sexo.toLowerCase();
        }                                                               //Hombres mayores a 18 con nota 6 o más
        if (sexo == "m" && edad > 18 && nota >= 6){
            hombresMayoresAprobados++;
        }
        if (nota > max){                                                //Máximo.
            max=nota;
        }
        if (nota < min){                                                //Mínimo.
            min=nota;
            sexoNotaMasBaja=sexo;
        }
        if (edad < joven){                                              //Nota y sexo más joven.
            joven=edad;
            notaMasJoven=nota;
            sexoMasJoven=sexo;
        }                                                               //Primera mujer ingresada.
        if (sexo == "f"){
            contMujeres++;
        }
        if (sexo == "f" && bandera == true){
            bandera=false;
            notaPrimeraMujer=nota;
            edadPrimeraMujer=edad;
        } else if (cont == 5 && contMujeres == 0){
            notaPrimeraMujer="No hay mujeres."
            edadPrimeraMujer="No hay mujeres."
        }
    }//FIN WHILE
    promedio=acumNotas/cont;                                            //Promedio.

    document.write("Promedio de notas totales: "+promedio+"<br>"
    +"Nota mas baja y su sexo: "+min+" "+sexoNotaMasBaja+"<br>"
    +"Cantidad de hombres mayores a 18 años con nota mayor o igual a 6: "+hombresMayoresAprobados+"<br>"
    +"Nota y sexo del más joven: "+notaMasJoven+" "+sexoMasJoven+"<br>"
    +"Edad y nota de la primera mujer ingresada: "+"Edad: "+edadPrimeraMujer+" "+"Nota: "+notaPrimeraMujer);
}// FIN FUNCIÓN
