// Gerar uma lista de numero 0-75.
// O numero maior deve ser inserido pelo usuario, onde vai depender da cartale a ser usado.

// O array vai ser usado para representar o numero selecionado pelo usuario.
const numeroCartela = [];
const tempoRodada = 1000;
const numeroMaximo = 50 + 1 // Deve adicionar 1 para corrigir o numero final do loop
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

function numeroRodada() {

    RandomizarNumero(numeroMaximo);

    for (let rodada = 0; rodada <= numeroCartela.length; rodada++) {
        const elementoRemovido = numeroCartela.shift();
        console.log(`Rodada: ${rodada}: ${elementoRemovido}`)
        numerosSorteado.push(elementoRemovido)
    }


}


setTimeout(numeroRodada, tempoRodada)
console.log(numerosSorteado)