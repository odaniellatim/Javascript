/*

ATRUBUIÇÃO VIA DESESTRUTURAÇÃO (ARRAYS)
--------------------------------------------------------------
... rest, ... spread

*/

// let a = "A";
// let b = "B";
// let c = "C";

// const numeros = [b, c, a];
// [a, b, c] = numeros; //DESESTRUTURAÇÃO

// console.log(a, b, c);

const listas = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const [, [, , seis]] = listas;
const [lista1, lista2, lista3] = listas;

console.log(lista3[2]);
console.log(seis);
console.log(listas[1][2]);

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [primeroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
const [um, , três, , cinco, , sete] = numeros;
// const primeiroNumero = numeros[0];

console.log(primeroNumero, segundoNumero, terceiroNumero, resto);
console.log(um, três, cinco, sete);

const frutas = [
  ["banana", "mexirica", "maracurja"],
  ["laranja", "melancia", "ameixa"],
];

const [frutas1, frutas2] = frutas;

console.log(frutas1[1], frutas2[1]); // mexirica e melancia
