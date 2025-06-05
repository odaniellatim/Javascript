/* 

OPERADORES LÓGICOS
--------------------------------------------------------------
&& : And -> E 
|| : OR -> OU : 
! : NOT -> NÃO : Negação

*/

let num1 = true;
let num2 = false;
let num3 = "10";

// Verifica se ambas as variaves são verdadeiras
console.log(num1 && num2);

// Verifica qual a variavel retorna verdadeira.
console.log(num1 || num2);

let usuario = "Daniel";
let senha = "123456 ";

let vailogar = usuario === "Daniel" && senha === "123456";
console.log(`Usuario vai logar: ${vailogar}`);

if (usuario === "Daniel" && senha === "123456") {
  console.log(`${usuario} -> Usuario Logado!`);
} else {
  console.log(`${usuario} -> Senha ou Usuario Invalidos.`);
}

// Invertendo uma afirmação
console.log(!true);
