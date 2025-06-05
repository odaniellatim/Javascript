/*

OPERAÇÃO TERNARIA
--------------------------------------------------------------

? -> Condição 1
: -> Condição 2
           IF                        ELSE
(Condição) ? 'Valor para verdadeiro' : 'Condição para false';

*/

const pontuacaoUsuario = 999;

const nivelUsuario =
  pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário Normal";

console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || "Preta";

console.log(nivelUsuario, corPadrao);

if (pontuacaoUsuario >= 1000) {
  console.log("Usuario VIP");
} else {
  console.log("Usuario Normal");
}
