/*

FOR CLASSICO - ESTRUTURA DE REPETIÇÃO
--------------------------------------------------------------

FOR ( VARIAVEL; CONDIÇÃO; ADICIONA VALOR VARIAVEL)

*/

console.log("Linha 0");
console.log("Linha 1");
console.log("Linha 2");
console.log("Linha 3");

// i = index
for (let i = 0; i <= 5; i++) {
  console.log(`Numero: ${i}`);
}

for (let i = 0; i <= 5; i += 2) {
  console.log(`Multiplos de 2: ${i}`);
}

for (let i = 0; i <= 10; i++) {
  const par = i % 2 == 0 ? "par" : "impar";
  console.log(`Numeros: ${i}:${par}`);
}

const frutas = ["Maçã", "Pêra", "Uva", "Melancia", "Mexirica"];

for (let i = 0; i < frutas.length; i++) {
  console.log(`Indice ${i}:`, frutas[i]);
}

/*

EXERCICIOS
--------------------------------------------------------------

*/

const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];
