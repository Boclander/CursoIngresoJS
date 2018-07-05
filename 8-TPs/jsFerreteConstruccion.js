/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var largoTotal;
    var anchoTotal;
    var totalAlambrado;

    largo=document.getElementById("Largo").value;
    ancho=document.getElementById("Ancho").value;
    largo=parseInt(largo);
    ancho=parseInt(ancho);
    
    largoTotal=largo*6;
    anchoTotal=ancho*6;
    totalAlambrado=largoTotal+anchoTotal;

    confirm("El total de alambre usado es de "+totalAlambrado)
}
function Circulo () 
{
	var radio;
    var circulo;
    var totalAlambrado;

    radio=document.getElementById("Radio").value;
    radio=parseInt(radio);

    circulo=radio*2*Math.PI;
    totalAlambrado=circulo*3;

    confirm("El total de alambre usado es de "+totalAlambrado);
}
function Materiales () 
{
	var largo;
    var alto;
    var rectangulo;
    var cemento;
    var cal;

    largo=document.getElementById("Largo").value;
    ancho=document.getElementById("Ancho").value;
    largo=parseInt(largo);
    ancho=parseInt(ancho);

    rectangulo=largo*ancho;
    cemento=rectangulo*2;
    cal=rectangulo*3;

    confirm("Se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal")
}