function mostrar()
{
    var nombre;
    var peso;
    var temperatura;
    var rta="si";
    var cont=0;
    var tempPares=0;
    var nombreMasPesado;
    var tempMasPesado;
    var cantMenosCeroGrados=0;
    var acumPeso=0;
    var promPeso;
    var pesoMax=0;
    var pesoMaxBajoCero=0;
    var pesoMinBajoCero=1001;

    while (rta != "no"){
        cont++;
        nombre=prompt("Nombre del animal.");
        peso=prompt("Peso del animal.");
        peso=parseInt(peso);
        while (peso < 0 || peso > 1000){
            peso=prompy("Peso del animal (Entre 0 y 1000)");
            peso=parseInt(peso);
        }
        temperatura=prompt("Temperatura del hábitat.");
        temperatura=parseInt(temperatura);
        while (temperatura < (-30) || temperatura > 30){
            temperatura=prompt("Temperatura del hábitat. (Entre 30 y -30)");
            temperatura=parseInt(temperatura);
        }                                                                               //Temperaturas Pares.
        if (temperatura % 2 == 0){
            tempPares++;
        }
        if (peso > pesoMax){                                                            // Mas pesado.
            pesoMax=peso;
            nombreMasPesado=nombre;
            tempMasPesado=temperatura;
        }
        if (temperatura < 0){                                                           //Cantidad a menos de 0 grados.
            cantMenosCeroGrados++;
            if (peso > pesoMaxBajoCero){
                pesoMaxBajoCero=peso;
            }
            if (peso < pesoMinBajoCero){
                pesoMinBajoCero=peso;
            }
        }
        acumPeso+=peso;
        rta=prompt("Quiere introducir otro animal?");
}//FIN WHILE
    promPeso=acumPeso/cont
    document.write("Cantidad de Temperaturas pares: "+tempPares+"<br>"
    +"El nombre y la temperatura del animal mas pesado: "+nombreMasPesado+" "+tempMasPesado+"<br>"
    +"Cantidad de animales que viven a menos de 0 grados: "+cantMenosCeroGrados+"<br>"
    +"Promedio de peso de todos los animales: "+promPeso+"<br>"
    +"Peso máximo de los animales que viven bajo 0 grados: "+pesoMaxBajoCero+"<br>"
    +"Peso mínimo de los animales que viven bajo 0 grados: "+pesoMinBajoCero);
}//FIN FUNCION
