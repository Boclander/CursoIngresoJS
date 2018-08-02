function mostrar()
{
    var dia=prompt("Ingrese un día de la semana.");
    dia=dia.toLowerCase();

    switch (dia){
        case "sabado":
        case "domingo":
            alert("Buen finde!");
        break;
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            alert("A trabajar");
        break;
        default:
            alert("No es un día válido.");
    }
    

}
