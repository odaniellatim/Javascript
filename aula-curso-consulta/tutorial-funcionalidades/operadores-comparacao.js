/* 

OPERADORES DE COMPRAÇÃO
--------------------------------------------------------------
> : Maior que
>= : Maior que ou igual a
< : Meno que
<= : Menor que ou igual a
== : Igualdade (Valor) -> Não é recomendavel usar
=== : Igualdade estrita ( Valor e tipo)
!= : Diferente ( valor ) -> Não é recomendavel usar
!== : Diferente estrito ( Valor e tipo)

*/

let num1 = 10;
let num2 = 15;
let num3 = "10";

let comp = num1 > num2; // Verifica se o numero é maior
console.log(`É maior: ${comp}`);

comp = num1 >= num2; // Verifica se é maior ou igual
console.log(`É maior e igual: ${comp}`);

comp = num1 == num3; // Verifica se o valor é igual mas não verifica o tipo dos dados.
console.log(`O valor é igual: ${comp}`);

comp = num1 === num3; // Verifica se o valor e o tipo dos dados são igual.
console.log(`O valor e o tipo são iguais: ${comp}`);

comp = num1 != num3; // Verifica se o valor é diferente mas não verifica o tipo dos dados.
console.log(`O valor é diferente: ${comp}`);

comp = num1 !== num3; // Verifica se o valor e o tipo dos dados são diferentes.
console.log(`O valor e o tipo são diferentes: ${comp}`);
