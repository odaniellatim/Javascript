/*
Funções para fazer o sistema funcionar corretamente de forma precisa.
*/

//Randomizar os numeros da cartela
function RandomizarNumero(numeroMaximo) {

    for (let i = 0; i < numeroMaximo; i++) {

        // gera um numero aleatório usando o numero maximo da cartela do usuario.
        const numero = Math.floor(Math.random() * numeroMaximo)

        // verifica se o numero já está no array e repete o loop se existir
        if (!numeroCartela.includes(numero)) {
            // cadastra o numero aleatório no array para construir a cartela aleatória
            numeroCartela.push(numero);
        } else {
            --i;
            continue;
        }
    }
}

// Cria a apresentação de cada numero para representar cada rodada, será mostrado em X segundos.
function numeroRodada() {

    rodada = numeroCartela.length;

    if (i < rodada) {
        // Seleciona o numero da rodada
        const elementoRemovido = numeroCartela[i];

        //Adiciona o numero da roda em um novo Array para garantir o resultado.
        numerosSorteado.push(elementoRemovido);

        // Mostra na tela o numero sorteado.
        console.log(`Rodada: ${i}`);
        console.log(`Numero Sorteado: ${numeroCartela[i]}`);
        console.log();
        i++
        numberoApresentado;

    } else {
        clearInterval(numberoApresentado);
        console.log(numerosSorteado);
    }
}

/*

INICIO DO PROGRAMA (BINGO DIVERTIDO)
O objetivo desse programa é gerar uma lista de numeros onde o usuario vai informar o numero maximo da sua tabela que pode variar de cartela para cartela, e assim o programa vai misturar os numeros e apresentar de forma pausada conforme a necessidade do usuario.

*/

// Configuração do Sistema que o usario vai informar para o programa funcionar corretamente.
const numeroMaximo = 10 + 1 // Quantidade de numeros da cartela que o usuario vai informar
const tempoRodada = 2000; // Tem que vai levar para apresentar um numero ao outro.

//Lista com os numeros gerados para cada rodada.
const numeroCartela = []; // Armazena os numeros embaralhados da rodada atual.
const numerosSorteado = []; // Lista onde vai ser armazenado os numeros que já sairam.
i = 0 // Variavel de controle de verificação do setInterval


// Gera o array com numeros aleatórios
RandomizarNumero(numeroMaximo);
// console.log(numeroCartela)


// Aprenseta depois de X segundos um numero, adicionando em uma nova lista.
const numberoApresentado = setInterval(numeroRodada, tempoRodada)
