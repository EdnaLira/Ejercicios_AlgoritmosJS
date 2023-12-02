//Pedir datos
let numero = prompt("Escribe el número que te gustaría saber si es par o impar:");

//Realización operación
a = numero % 2;

//Imprimir resultado
if (a == 0){
    console.log(`El número ${numero} es par.`)
} else {
    console.log(`El número ${numero} es impar.`)
}
