// Gerar uma lista de numero 0-75.
// O numero maior deve ser inserido pelo usuario, onde vai depender da cartale a ser usado.

// O array vai ser usado para representar o numero selecionado pelo usuario.
const numeroCartela = [];
const numeroMaximo = 50 + 1
const numerosSorteado = [];

//Randomizar os numeros da cartela
function RandomizarNumero(numeroMaximo) {

    for (let i = 0; i < numeroMaximo; i++) {

        // gera um numero aleatório usando o numero maximo da cartela do usuario.
        const numero = Math.floor(Math.random() * numeroMaximo)

        // verifica se o numero já está no array e repete o loop se existir
        if (numeroCartela.includes(numero)) {
            i--;
            continue;
        } else {
            // cadastra o numero aleatório no array para construir a cartela aleatória
            numeroCartela.push(numero);
        }
    }
}

RandomizarNumero(numeroMaximo)

console.log(numeroCartela)
console.log(numeroCartela.sort((a, b) => a - b))