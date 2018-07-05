/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheit;
    var centigrados
    var centigradosUno;

    fahrenheit=document.getElementById("Temperatura").value;
    fahrenheit=parseInt(fahrenheit);

    centigradosUno=fahrenheit-32;
    centigrados=centigradosUno*5/9;

    confirm(fahrenheit+" Fahrenheit son "+centigrados+" Centígrados");
}

function CentigradosFahrenheit () 
{
	var fahrenheit;
    var centigrados;
    
    centigrados=document.getElementById("Temperatura").value;
    centigrados=parseInt(centigrados);

    fahrenheit=centigrados*9/5+32;

    confirm(centigrados+" Centígrados son "+fahrenheit+" Fahrenheit")
}
