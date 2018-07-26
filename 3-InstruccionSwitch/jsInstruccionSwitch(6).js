function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
laHora=parseInt(laHora);

    switch (laHora){
        case laHora:
            if (laHora >= 7 && laHora <= 11){
                alert("Es de mañana.");
            } else if (laHora >= 12 && laHora <= 19){
                alert("Es de tarde.");
            } else  if ((laHora >= 20 && laHora <= 24) || (laHora >= 0 && laHora <= 6)){
                alert("Es de noche.");
            } else {
                alert("No existe la hora.");
            }
        break;
            
            }
}
//FIN DE LA FUNCIÓN