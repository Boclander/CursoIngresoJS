
function mostrar()
{
    var base;
    var altura;
    var superficie;
    var perimetro;

    base=prompt("Base");
    altura=prompt("Altura");
    base=parseInt(base);
    altura=parseInt(altura);

    perimetro=base*3;
    superficie=base*altura/2;
    alert("El perimetro es "+perimetro+" y la superficie es "+superficie);
}
