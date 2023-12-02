//Pedir datos
let anio = prompt("Para saber si tu año es bisiesto, escríbelo:");

//Operación e impresión
if (anio % 4 == 0 && (anio % 100 != 0 || anio % 400 ==0)){
    console.log ("El año " + anio + " es bisiesto.");
} else {
    console.log ("El año " + anio + " no es bisiesto.");
}