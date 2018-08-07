function mostrar()
{
    var precio=prompt("Ingrese precio.");
    var descuento=prompt("Ingrese porcentaje de descuento.");
    var precioConDescuento=precio-(precio*(descuento/100));

    alert("El precio final con descuento es "+precioConDescuento);
}
