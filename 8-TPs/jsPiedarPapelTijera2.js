var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3

	eleccionMaquina=Math.floor(Math.random()*(4-1))+1;


}//FIN DE LA FUNCIÓN
function piedra()
{
	if(eleccionMaquina == 1){
        alert("Empató.");
		ContadorDeEmpates=+1;
    } else if (eleccionMaquina == 2){
        alert("Ganó!");
		ContadorDeGanadas=+1;
	} else{
        alert("Perdió.");
		ContadorDePerdidas=+1;
    }
}//FIN DE LA FUNCIÓN
function papel()
{
	if(eleccionMaquina == 1){
    alert("Ganó!");
	ContadorDeGanadas=+1;
	} else if(eleccionMaquina == 2){
    alert("Empató.");
	ContadorDeEmpates=+1;
	} else {
    alert("Perdió.");
	ContadorDePerdidas=+1;
}
}//FIN DE LA FUNCIÓN
function tijera()
{
	if(eleccionMaquina == 1){
        alert("Perdió.");
		ContadorDePerdidas=+1;
    } else if(eleccionMaquina == 2){
        alert("Ganó!");
		ContadorDeGanadas=+1;
    } else {
        alert("Empató.");
		ContadorDeEmpates=+1;
    }
}//FIN DE LA FUNCIÓN
								//TERMINAR
function mostrarResultado()
{
	document.getElementById("ganadas").value=ContadorDeGanadas;
	document.getElementById("empatadas").value=ContadorDeEmpates;
	document.getElementById("perdidas").value=ContadorDePerdidas;
}