/*

BREAK E CONTINUE
--------------------------------------------------------------
Pausar a execução de um loop ou contunuar um loop.

continue -> pula para a proxima iteração do codigo.
Break -> Pausa o codigo ao encontrar a condição.

*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("--- FOR OF ---");
for (let numero of numeros) {
  if (numero === 2) {
    continue;
  }

  console.log(numero);

  if (numero === 7) {
    console.log("7 encontrado, saindo...");
    break;
  }
}

console.log("--- FOR IN ---");
for (let i in numeros) {
  let numero = numeros[i];
  if (numero === 2) {
    continue;
  }

  console.log(numero);

  if (numero === 7) {
    console.log("7 encontrado, saindo...");
    break;
  }
}

console.log("--- FOR CLASSICO ---");
for (let i = 0; i < numeros.length; i++) {
  let numero = numeros[i];
  if (numero === 2) {
    continue;
  }

  console.log(numero);

  if (numero === 7) {
    console.log("7 encontrado, saindo...");
    break;
  }
}

console.log("--- WHILE ---");
let contador = 0;
while (contador < numeros.length) {
  let numero = numeros[contador];
  if (numero === 2) {
    contador++;
    continue;
  }

  console.log(numero);

  if (numero === 7) {
    console.log("7 encontrado, saindo...");
    contador++;
    break;
  }
  contador++;
}

console.log("--- DO WHILE ---");
let count = 0;
do {
  let num = numeros[count];
  if (num === 2) {
    count++;
    continue;
  }

  console.log(num);

  if (num === 7) {
    console.log("7 encontrado, saindo...");
    count++;
    break;
  }
  count++;
} while (count < numeros.length);
