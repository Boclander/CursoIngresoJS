/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad;
    var sexo;
    var estadoCivil;
    var sueldo;
    var legajo;
    var nacionalidad;

    edad=prompt("Ingrese edad.");
    edad=parseInt(edad);
    while (edad < 17 || edad > 90){
        edad=prompt("Ingrese edad.");
    }
    sexo=prompt("Ingrese sexo (M o F).");
    switch (sexo){
        case "M":
        case "m":
            sexo="Masculino";
        break;
        case "F":
        case "f":
            sexo="Femenino";
        break;
        default:
        sexo=prompt("Ingrese sexo (M o F).");
    }
    estadoCivil=prompt("Ingrese estado civil: 1-para soltero, 2-para casado, 3-para divorciado o 4-para viudo.");
    switch (estadoCivil){
        case "1":
            estadoCivil="Soltero";
        break;
        case "2":
            estadoCivil="Casado";
        break;
        case "3":
            estadoCivil="Divorciado";
        break;
        case "4":
            estadoCivil="Viudo";
        break;
        default:
            estadoCivil=prompt("Ingrese estado civil: 1-para soltero, 2-para casado, 3-para divorciado o 4-para viudo.");
    }
    sueldo=prompt("Ingrese sueldo bruto.");
    sueldo=parseInt(sueldo);
    while (sueldo <= 8000){
        sueldo=prompt("Ingrese sueldo bruto.");
    }
    legajo=prompt("Ingrese número de legajo (4 cifras, sin ceros a la izquierda).");
    legajo=parseInt(legajo);
    while (legajo < 1000 || legajo > 9999){
        legajo=prompt("Ingrese número de legajo (4 cifras, sin ceros a la izquierda).");
    }
    nacionalidad=prompt("Ingrese nacionalidad (A para Argentinos, E para Extranjeros y N para Nacionalizados).");
    switch (nacionalidad){
        case "A": 
            nacionalidad="Argentino";
        break;
        case "E":
            nacionalidad="Extranjero";
        break;
        case "N":
            nacionalidad="Nacionalizado";
        break;
        default:
        nacionalidad=prompt("Ingrese nacionalidad (A para Argentinos, E para Extranjeros y N para Nacionalizados).");
    }
    document.getElementById("Edad").value=edad;
    document.getElementById("Sexo").value=sexo;
    document.getElementById("EstadoCivil").value=estadoCivil;
    document.getElementById("Sueldo").value=sueldo;
    document.getElementById("Legajo").value=legajo;
    document.getElementById("Nacionalidad").value=nacionalidad;
}
