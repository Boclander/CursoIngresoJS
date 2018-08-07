
function mostrar()
{
    var largo=prompt("Ingrese el largo.");
    var ancho=prompt("Ingrese el ancho.");
    var perimetro=largo*2+ancho*2;
    largo=parseInt(largo);
    ancho=parseInt(ancho);

    alert("El perímetro es "+perimetro);
}
