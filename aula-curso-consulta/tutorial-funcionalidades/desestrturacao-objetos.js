/*

ATRUBUIÇÃO VIA DESESTRUTURAÇÃO (ARRAYS)
--------------------------------------------------------------
... rest, ... spread

*/

const pessoa = {
  nome: "Daniel",
  sobrenome: "Latim",
  idade: 30,
  endereco: {
    rua: "Av. Brasil",
    numero: 320,
  },
};

// Atribuição via desestruturação
const { nome = "Não existe", sobrenome, idade } = pessoa;
const { nome: n = "" } = pessoa;

const {
  endereco: { rua: r, numero: nu },
  endereco: end,
} = pessoa;
const { nome: naming, ...resto } = pessoa;

console.log(n, sobrenome, idade);
console.log(r, nu);
console.log(end);
console.log(resto); // resto

function imprimirInfoUsuarios({ nome, idade, email }) {
  console.log(`Nome: ${nome}, Idade: ${idade}`);
  console.log(`Email:: ${email}`);
}

const usuarioInfo = { nome: "Bob", idade: 25, email: "bob@exemplo.com" };
imprimirInfoUsuarios(usuarioInfo);
