/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheit;
    var centigrados;

    // 1 Fahrenheit son 0.60 Centigrados//
    fahrenheit=document.getElementById("Temperatura").value;
    fahrenheit=parseInt(fahrenheit);

    centigrados=fahrenheit*0.56;

    confirm(fahrenheit+" Fahrenheit son "+centigrados+" Centígrados");
}

function CentigradosFahrenheit () 
{
	var fahrenheit;
    var centigrados;
    // 1 Centigrado son 1.8 Fahrenheit//
    centigrados=document.getElementById("Temperatura").value;
    centigrados=parseInt(centigrados);

    fahrenheit=centigrados*1.8;

    confirm(centigrados+" Centígrados son "+fahrenheit+" Fahrenheit")
}
