function mostrar()
{
    var precio;
    var descuento;
    var descuentoEnDinero;
    var precioConDescuento;
    var iva;
    var precioFinal;

    precio=prompt("Precio");
    descuento=prompt("Descuento");
    precio=parseInt(precio);
    descuento=parseInt(descuento);

    descuentoEnDinero=descuento*precio/100;
    precioConDescuento=precio-descuentoEnDinero;
    iva=precioConDescuento*0.21;
    precioFinal=precioConDescuento+iva;

    alert("1. El descuento en dinero es de "+descuentoEnDinero+" // 2. El precio con descuento es de "+precioConDescuento+" // 3. El IVA es de "+iva);
    document.getElementById("elPrecioFinal").value=precioFinal;
}
