/*

EXERCICIOS DE LÓGICA DE PROGRAMAÇÃO.
--------------------------------------------------------------

*/

console.log("--- EXERCICIO 1 ---");
function max(x, y) {
  // if (x > y) return x;
  // return y;
  return x > y ? x : y;
}

const max2 = (x, y) => (x > y ? x : y);

console.log(max(10, 20));
console.log(max2(10, 30));

console.log("--- EXERCICIO 2 ---");
function ePaisagem(largura, altura) {
  return largura > altura;
}

const ePaisagem2 = (largura, altura) => largura > altura;

console.log(ePaisagem2(1080, 1920));
console.log(ePaisagem2(1920, 1080));

console.log("--- EXERCICIO 3 ---");

function fizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
  if (numero % 3 === 0) return "Fizz";
  if (numero % 5 === 0) return "Buzz";

  return numero;
}

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}
