/*

FOR IN - ESTRUTURA DE REPETIÇÃO
--------------------------------------------------------------

FOR ( VARIAVEL in VETOR/ARRAY)
For in -> Lê os índices ou chaves do objeto.

*/

const frutas = ["Pera", "Maça", "Uva", "Melancia"];
const pessoa = {
  nome: "Daniel",
  sobrenome: "Latim",
  idade: 30,
};

for (let i in frutas) {
  console.log(frutas[i]);
}

for (let indicePessoa in pessoa) {
  console.log(`Indice: ${indicePessoa}: Valor: ${pessoa[indicePessoa]}`);
}

console.log(frutas);

//função que cadastra um item em um array usando FOR
function addLista(item) {
  for (let index in frutas) {
    melancia = frutas.indexOf(item);

    if (melancia === -1) {
      console.log(`${item} Adicionado com Sucesso!`);
      frutas.push(item);
    } else {
      console.log(`${item} já existe!`);
    }

    return item;
  }
}

addLista("Abacaxi");
addLista("Jabuticaba");
addLista("Mexirica");
addLista("Maça");
console.log(frutas);
