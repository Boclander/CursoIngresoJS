function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var rand=Math.floor(Math.random()*(11-1))+1;
	
	if(rand >= 9){
		alert("EXCELENTE");
	} else {
		if(rand >=4 && rand < 9){
			alert("APROBO");
		} else{
			alert("Vamos, la proxima se puede")
		}
	}


}//FIN DE LA FUNCIÓN