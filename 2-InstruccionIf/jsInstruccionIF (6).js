function mostrar()
{
//tomo la edad  
    var edad;
    edad=document.getElementById("edad").value;

    if(edad >= 13 && edad <= 17){
        alert("Usted es un adolescente.")
    }   else {
        if (edad >17){
            alert("Usted es mayor de edad.")
        } else {
            alert("Usted es un niño.")
        }
    }



}//FIN DE LA FUNCIÓN