//Pedir frase
let texto = prompt ("Escribe una palabra o frase para saber si es palíndromo o no:");

//Quitar espacios y caracteres especiales
let texto2 = texto.replace(/\s+/g, '');
let texto3 = texto2.toLowerCase();
let texto4 = texto3.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

//Operación y resultado
const textoInvertido = texto4.split("").reverse().join("");

if (texto4 === textoInvertido) {
  console.log(`"${texto}" es palíndromo.`);
  } else {
    console.log(`"${texto}" no es palíndromo.`);
  }