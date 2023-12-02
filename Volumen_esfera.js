//Definiendo variables
const PI = Math.PI;
let diametro = prompt ("Para calcular el volumen de tu esfera, ingresa el diámetro en cm:");

//Cálculo
let radio = diametro/2;
let volumen = (4 * (Math.PI * Math.pow(radio, 3)))/3;

//Impresión de resultado
console.log ("El volumen de tu esfera es de " + volumen + "cm3.")