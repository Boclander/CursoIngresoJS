function mostrar()
{
//tomo la edad  
    var edad;
    edad=document.getElementById("edad").value;

    if(edad >17 || edad <13) {   //es lo mismo que hacer el ejercicio anterior poniendole !=
        alert("Usted no es un adolescente.");
    }

}//FIN DE LA FUNCIÓN