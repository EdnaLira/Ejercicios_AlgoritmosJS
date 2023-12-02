//Definiendo variables
let distancia = prompt("Para calcular el tiempo que te tomó recorrer una distancia, ingresa la distancia en km:");
let velocidad = prompt("Ahora, ingresa la velocidad en que recorriste esa distancia:");

//Cálculo
let tiempo = (distancia/velocidad);

//Imprimir resultado
console.log ("El tiempo en que recorriste "+ distancia + "km a " + velocidad + "km/h es de: " + tiempo + " horas.")
