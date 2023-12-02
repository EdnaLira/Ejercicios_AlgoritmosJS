//Solicitar números
let n1 = prompt ("Vamos a ordenar 5 números de menor a mayor. Escribe el primer número:");
let n2 = prompt ("Escribe el segundo número:");
let n3 = prompt ("Escribe el tercer número:");
let n4 = prompt ("Escribe el cuarto número:");
let n5 = prompt ("Escribe el quinto número:");
let numeros = [n1, n2, n3, n4, n5];

//Operación
numeros.sort ((a, b) => {
    if (a < b){
        return -1;
    }
    return 1;
});

//Imprimir
console.log ("Los números ordenados de menor a mayor son: " + numeros)