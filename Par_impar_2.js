//Pedir datos
let numero = prompt("Escribe el número que te gustaría saber si es par o impar:");

//Realización operación e imprimir resultado en pantalla
if (numero % 2 == 0){
    console.log(`El número ${numero} es par.`)
} else {
    console.log(`El número ${numero} es impar.`)
}