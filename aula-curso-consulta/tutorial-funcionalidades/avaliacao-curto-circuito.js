/*

AVALIAÇÃO DE CURTO-CIRCUITO
--------------------------------------------------------------

&& -> Todas as expressõe sprecisam ser verdadeiras.
|| -> Todas as expressões precisam ser falsas.

FALSY VALUES
false
0
'' "" ` `
null / undefined
NaN

*/

function falaOi() {
  return "Oi";
}

// Se a variavel ter um valor FALSO retorna o valor falso.
let vaiExecutar = undefined;
console.log(vaiExecutar && falaOi());

// Se a variavel ter um valor VERDADEIRO retorna o valor verdadeiro.
const corUsuario = null;
const corPadrao = corUsuario || "preto";

console.log(corPadrao);

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

// Verifica se tem algum valor verdadeiro se não retorna o último falso.
console.log(a || b || c || d || e);
