/*

IF, ELSE IF E ELSE
--------------------------------------------------------------

Entre 0 - 11 :Bom dia
Entre 12 - 17 : Boa Tarde
Entre 18 - 23 : Boa noite

IF pode ser usado sozinho
Sempre que utilizo a palavra ELSE, preciso de um IF antes
Eu posso ter vários ELSE IFS na checagem
Só posso ter um ELSE na checagem
Podemos usar condições sem ELSE IF, utilizando apenas IF e ELSE

*/

const hora = 11;

if (hora >= 0 && hora <= 12) {
  console.log("Bom dia!");
} else if (hora >= 12 && hora <= 17) {
  console.log("Boa tarde!");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa noite");
} else {
  console.log("Olá!");
}

//-------------------------------------------------------------------------------------

const numero = 10;

if (numero <= 10) {
  console.log("O numero é menor ou igual a 10.");
}

if (numero >= 0 && numero <= 5) {
  console.log("O número está entre 0 e 5.");
} else if (numero >= 6 && numero <= 8) {
  console.log("O número está entre 6 e 8.");
} else if (numero >= 9 && numero <= 11) {
  console.log("O número está entre 9 e 11.");
} else {
  console.log("O numero NÃO está entre 0 e 11.");
}
