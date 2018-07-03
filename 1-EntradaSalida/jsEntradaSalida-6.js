/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numeroUno
    var numeroDos
    numeroUno=document.getElementById("numeroUno").value
    numeroDos=document.getElementById("numeroDos").value
    parseInt(numeroUno)
    parseInt(numeroDos)
    //Funcion sumar y mostrar resultado o todo de una?//
    var resultado=sumar(numeroDos+numeroUno)
    alert("la suma es "+resultado)
}

