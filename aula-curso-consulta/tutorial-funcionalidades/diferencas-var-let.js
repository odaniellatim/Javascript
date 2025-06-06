/*

DIFERENÇAS ENTRE VAR E LET / CONST
--------------------------------------------------------------

*/

const verdadeira = true;

//Let tem escopo de bloco {... bloco}
// Var só tem escopo de função

let nome = "Daniel"; // criando
var nome2 = "Daniel";

if (verdadeira) {
  var nome2 = "China"; // Redeclarado
  let nome = "Biel"; // criando
  console.log(nome, nome2);

  if (verdadeira) {
    let nome = "Outra Coisa"; // criando
    console.log(nome, nome2);
  }
}

// Variaveis podem em var podem ser acessadas fora da função
// Porém não podem tentar acessar uma variavel decladara em uma função.
function falaOi() {
  var nome = "Daniel";
  console.log("Oi");
}

console.log(nome);
falaOi();
