/*

WHILE E DO WHILE - ESTRUTURA DE REPETIÇÃO
--------------------------------------------------------------


*/

const nome = "Daniel Latim";
const frutas = ["Pera", "Maça", "Uva", "Melancia"];

let controle = 0;

while (controle <= frutas.length) {
  console.log(controle);
  controle++; // NUNCA ESQUECER DE SOMAR O VALOR DE CONTROLE.
}

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);
console.log(rand);

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);
