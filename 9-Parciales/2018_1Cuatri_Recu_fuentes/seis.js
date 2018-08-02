function mostrar()
{
    var nota=document.getElementById("laHora").value;
    nota=parseInt(nota);
    var mensaje;
    var mensajeAdicional="";

    switch (nota){
        case 0:
        case 1:
        case 2:
        case 3:
            mensaje="La próxima se puede.";
        break;
        case 4:
        case 5:
        case 6:
            mensaje="Raspando.";
        break;
        case 7:
        case 8:
        case 9:
        case 10:
            mensaje="Aprobó.";
        break;
        default:
            mensaje="La nota no es válida.";
    }
    if (mensaje == "Raspando." && nota < 5){
        mensajeAdicional=" Debes preocuparte más.";
    } else if (mensaje == "Aprobó." && nota > 8){
        mensajeAdicional=" Muy bien!";
    }
    alert(mensaje+mensajeAdicional);
}
