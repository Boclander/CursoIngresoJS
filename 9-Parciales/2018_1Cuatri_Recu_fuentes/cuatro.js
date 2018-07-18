function mostrar()
{
    var numeroUno;
    var numeroDos;
    var suma;

    numeroUno=prompt("Ingrese el primer número");
    numeroDos=prompt("Ingrese el segundo número");
    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);
    suma=numeroUno+numeroDos

    if (numeroUno == numeroDos){
        alert(numeroUno+" "+numeroDos);
    } else if (numeroUno > numeroDos){
        alert(numeroUno/numeroDos);
    } else {
        alert(numeroUno+numeroDos);
    }
    if (numeroDos > numeroUno && numeroUno+numeroDos < 50){
        alert("La suma es "+suma+" y es menor a 50.");
    }
}
