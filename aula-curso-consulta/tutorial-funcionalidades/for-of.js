/*

FOR OF - ESTRUTURA DE REPETIÇÃO
--------------------------------------------------------------

Ideal para objetos interaveis.

For clássico - Geralente com iteráveis (array ou string);
For in - Retorn o índice ou chave (string, array ou objetos)
For of - Retorna o valor em si (iteráveis, arrays ou strings)

FOR ( VARIAVEL of VETOR/ARRAY)
For of -> Lê os valores do objeto.

*/

const nome = "Daniel Latim";
const frutas = ["Pera", "Maça", "Uva", "Melancia"];

const pessoa = {
  nome: "Daniel",
  sobrenome: "Latim",
  idade: 30,
};

for (let valor of frutas) {
  console.log(valor);
}

frutas.forEach(function (valor, indice, array) {
  console.log(`${indice}: ${valor} -> ${array}`);
});
