//Solicitar número
let numero = prompt("Escribe el número del que deseas conocer el factorial:");
let factorial = 1;

//Operación
for (let i = 1; i <= numero; i++) {
    factorial = factorial * i;
}

//Imprimir
console.log("El factorial del número " + numero + " es " + factorial + ".")