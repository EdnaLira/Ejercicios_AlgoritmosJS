//Ordenar un arreglo de números de mayor a menor y sumarlos
//Solicitar datos
let numbers = [34,23,15,6,7,18,20,9,22.34,54,56,78,79,9,0,12,13,31,41,51]

//Operación 1
let ordenado = numbers.sort(function(a, b){
    return b - a}
    )

//Operación 2
let suma = numbers.reduce(function(acumulador, valorActual){
    return acumulador+valorActual}
    )

//Árbol de decisión completo
function arreglos (numbers, acciones){
    if (acciones === "sumar"){
        let suma = numbers.reduce(function(acumulador, valorActual){
            return acumulador+valorActual}
            )
        return suma
    }else if (acciones === "ordenar"){
        let ordenado = numbers.sort(function(a, b){
            return b - a}
            )
        return ordenado
    }
}

//Árbol de decisión reducido
function arreglos (numbers, acciones){
    if (acciones === "sumar"){
        let suma = numbers.reduce((acumulador, valorActual)=>acumulador+valorActual)
        return suma
    }else if (acciones === "ordenar"){
        let ordenado = numbers.sort((a, b)=>b - a)
        return ordenado
    }
}

//Impresión de datos. Caso 1
console.log (arreglos(numbers, "sumar"))

//Impresión de datos. Caso 2
onsole.log (arreglos(numbers, "ordenar"))