/*
Funções para fazer o sistema funcionar corretamente de forma precisa.
*/

//Randomizar os numeros da cartela
function gerarCartelaGlobal(numeroMaximo) {
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

// Gerar os numeros aleatórios com base no numero maximo da cartela
function RandomizarNumero() {
    arrayNumeros = []
    for (let n = 0; n < numeroMaxCartela; n++) {
        const numero = Math.floor(Math.random() * numeroMaximo)
        if (!arrayNumeros.includes(numero)) {
            arrayNumeros.push(numero);
        } else {
            --n;
            continue;
        }
    }
    return arrayNumeros
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
        console.log(`Rodada: ${i + 1}`);
        console.log(`Numero Sorteado: ${numeroCartela[i]}`);
        console.log();
        i++
        numberoApresentado;
        return elementoRemovido;
    } else {
        clearInterval(numberoApresentado);
        return numerosSorteado;
    }
}

//Gera os numeros para cada cartela de acordo com a quantidade de usuarios.
function numeroCartelaRodada() {
    cartelaUsuarios.map((chave) => {
        if (chave.numero_cartela === null) {
            for (userRodada of cartelaUsuarios) {
                let cartela = RandomizarNumero();
                userRodada.numero_cartela = cartela;
            }
        }
    });
}

// Função construtora onde vai criar uma cartela para cada usuario
function criaCartelasUsuarios(array) {
    let id = 0;
    for (let user of array) {
        cartelaUsuarios.push({
            "id": id,
            "nome": user,
            "numero_cartela": null,
            "pontos_totais": 0,
        });
        id++
    }
}

/*
 
INICIO DO PROGRAMA (BINGO DIVERTIDO)
O objetivo desse programa é gerar uma lista de numeros onde o usuario vai informar o numero maximo da sua tabela que pode variar de cartela para cartela, e assim o programa vai misturar os numeros e apresentar de forma pausada conforme a necessidade do usuario.
 
*/

// Configuração do Sistema que o usario vai informar para o programa funcionar corretamente.
const numeroMaximo = 75 // Quantidade de numeros da cartela que o usuario vai informar
const numeroMaxCartela = 24 // Numero maximo disponivel por cartela. Não pode ser maior que o numeroMaximo disponivel.
const tempoRodada = 2000; // Tem que vai levar para apresentar um numero ao outro.
let participantes = ["Daniel", "Gabriel", "Davi", "Leona", "Pitu", "Boot"]; // Jogadores informados pelo usuario

//Lista com os numeros gerados para cada rodada.
const numeroCartela = []; // Armazena os numeros embaralhados da rodada atual.
const numerosSorteado = []; // Lista onde vai ser armazenado os numeros que já sairam.
i = 0 // Variavel de controle de verificação do setInterval
let cartelaUsuarios = [] // Usuarios cadastrados com suas cartelas para a rodada.

// Aprenseta depois de X segundos um numero, adicionando em uma nova lista.
const numberoApresentado = setInterval(numeroRodada, tempoRodada)

// Gera a cartela dos participantes
criaCartelasUsuarios(participantes)

gerarCartelaGlobal(numeroMaximo); // Gera o array com numeros aleatórios

numeroCartelaRodada(); // Gera os numeros da cartela dos usuarios

//Criando a verificação dos numeros que sairam e comparar com as cartelas dos usuarios para atribuir a pontuação corretamente.
// Essa função deve ser chamada após sair um numero com o setInterval, assim ele não remove os itens da lista tudo de uma unica vez.
function verificaNumerosCartelasParticipantes() {
    const numerosParaRemover = new Set(numeroCartela);

    const arrayResultado = cartelaUsuarios.map(subArray =>
        subArray.numero_cartela.filter(numero => !numerosParaRemover.has(numero))
    );

    return arrayResultado
}

// console.log(numeros_usuarios)
console.log(numeroCartela)

// console.log(cartelaUsuarios, "\n")




