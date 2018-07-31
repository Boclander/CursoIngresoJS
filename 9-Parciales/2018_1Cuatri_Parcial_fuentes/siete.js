function mostrar()
{
    var nombre;
    var sexo;
    var edad;
    var contador=0;
    var cantMujeres=0;
    var cantHombres=0;
    var cantMayores=0;
    var cantMenores=0;
    var cantMayoresHombres=0;
    var acumMujeres=0;
    var acumHombres=0;
    var promMujeres;
    var promHombres;
    var promTodos;
    var nombreMasViejo;
    var nombreMasJoven;
    var nombreMasViejoMujer;
    var sexoMasViejo;
    var max=0;
    var min=101;

    while(contador < 4){
        ++contador;

    nombre=prompt("Ingrese su nombre.");                            // Toma valor nombre.
    
    sexo=prompt("Ingrese su sexo (F o M).");                        //Toma valor sexo.
    sexo=sexo.toUpperCase();
    while (sexo != "M" && sexo != "F"){
        sexo=prompt("Ingrese su sexo (F o M).");
        sexo=sexo.toUpperCase();
    }                                                               // Cantidad de Hombres y Mujeres.
    switch (sexo){
        case "M":
            cantHombres++;
        break;
        case "F":
            cantMujeres++;
    }

    edad=prompt("Ingrese su edad.");                                // Toma valor edad.
    edad=parseInt(edad);
    while (edad < 0 || edad > 100 || isNaN(edad)){
        edad=prompt("Ingrese su edad.");
    }                                                                // Cantidad de Mayores y Menores de edad.
    if (edad > 18){
        cantMayores++;                                              
        if (sexo == "M"){                                            // Hombres mayores de edad.
            cantMayoresHombres++;
        }
    } else {
        cantMenores++;
    }                                                               // Acumuladores de edades.
    if (sexo == "F"){
        acumMujeres+=edad;
    } else {
        acumHombres+=edad;
    }                                                               // Máximos y Mínimos.                                                               // Máximo y mínimo.
    if (edad > max){
        max=edad;
        nombreMasViejo=nombre;                                      // Nombre del más viejo.
        sexoMasViejo=sexo;
        if (sexo == "F"){
            nombreMasViejoMujer=nombre;                             // Nombre de la mujer más vieja.
        }
    }
    if (edad < min){
        min=edad;
        nombreMasJoven=nombre;                                      // Nombre del mas joven.
    }

    } // FIN WHILE
                                                                    // Promedios de edades.
    promMujeres=acumMujeres/cantMujeres;
    promHombres=acumHombres/cantHombres;
    promTodos=(acumHombres+acumMujeres)/contador;
    
    
    document.write("Cantidad de mujeres: "+cantMujeres+"<br>"
    +"Cantidad de hombres: "+cantHombres+"<br>"
    +"Cantidad de mayores de edad: "+cantMayores+"<br>"
    +"Cantidad de menores de edad: "+cantMenores+"<br>"
    +"Cantidad de hombres mayores de edad: "+cantMayoresHombres+"<br>"
    +"Edad más baja: "+min+"<br>"
    +"Edad mas alta: "+max+"<br>"
    +"Promedio de edad de mujeres: "+promMujeres+"<br>"
    +"Promedio de edad de hombres: "+promHombres+"<br>"
    +"Promedio de edad total: "+promTodos+"<br>"
    +"Nombre del mas viejo: "+nombreMasViejo+"<br>"
    +"Nombre del mas joven: "+nombreMasJoven+"<br>"
    +"Sexo del mas viejo: "+sexoMasViejo+"<br>"
    +"Nombre de la mujer mas vieja: "+nombreMasViejoMujer);
}
