//Definiendo variables
let salario = prompt ("Para calcular tu incremento salarial, ingresa tu salario actual:")

//Cálculo e impresión de datos
if (salario < 15000){
    incrementoA = salario*1.20; console.log ("Tu incremento salarial será de 20%, o sea, tu salario será $" + incrementoA + ".")
} else {
    incrementoB = salario*1.15; console.log ("Tu incremento salarial será de 15%, o sea, tu salario será $" + incrementoB + ".")
}