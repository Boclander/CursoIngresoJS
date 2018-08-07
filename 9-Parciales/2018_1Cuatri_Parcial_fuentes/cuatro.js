function mostrar()
{
    var numeroUno=prompt("Ingrese el primer número.");
    var numeroDos=prompt("Ingrese el segundo número.")
    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);

    if (numeroUno == numeroDos){
        alert(""+numeroUno+numeroDos);
    } else if (numeroUno > numeroDos){
        alert(numeroUno-numeroDos);
    } else {
        alert(numeroUno+numeroDos);
        if (numeroUno+numeroDos > 10){
            alert("La suma es "+(numeroUno+numeroDos)+" y supero 10.");
        }
    }
}
