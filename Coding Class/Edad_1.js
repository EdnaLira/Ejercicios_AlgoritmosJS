//Recibir una fecha de nacimiento y nos dé la edad actual (años y meses)

let year = prompt ("Para calcular cuántos años y meses has vivido, primero escribe el año de tu nacimiento:");
let month = prompt ("Ahora, escribe tu mes de nacimiento:");
let day = prompt ("Finalmente, escribe tu día de nacimiento:");

//Obtener la fecha actual
const today = new Date ();
let dayToday = today.getUTCDate();
let monthToday = today.getUTCMonth () + 1;
let yearToday = today.getUTCFullYear ();

//console.log(`La fecha actual es ${dayToday}/${monthToday}/${yearToday}.`)

//Operación para obtener meses y años

if (month == monthToday && dayToday >= day) {
    let difYears0 = yearToday - year;
    console.log ("Has vivido " + difYears0 + " años y 0 meses.")
};
    
if (month == monthToday && dayToday < day) {
    let difYears1 = (yearToday - year) - 1;
    console.log ("Has vivido " + difYears1 + " años y 11 meses.")
}; 

if (monthToday > month){
    let difMonth2 = monthToday - month;
    let difYears2 = yearToday - year;
    console.log ("Has vivido " + difYears2 + " años y " + difMonth2 + " meses.")
};

if (monthToday < month) {
    let difMonth3 = 12 - (month - monthToday);
    let difYears3 = (yearToday - year) - 1;
    console.log ("Has vivido " + difYears3 + " años y " + difMonth3 + " meses.")
};
