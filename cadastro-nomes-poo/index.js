/*

Arquivo para testes de pequenos codigos.

*/

// console.log("Script Carregado!");

/*
    Valores Primitivos e valores por referência
    Primmitivos (Imutaveis): String, Number, Boolean, Undefined, Null (BIgint, Symbol)

    Referência (Múltavel): Array, Object, Function
*/

// Exemplo de uso de dados Primitivos
let a = "A";
let b = a; // Cópia do valor da varia a.

console.log(a, b);

// Exemplo de uso de dados Referência
let c = [1, 2, 3];
let d = [...c]; // Spreed, faz a copia do array em uma nova varialmente.

c.push(4);
console.log(c, d);

d.pop();
console.log(c, d);

// Exemplo com objetos.
const objetoA = {
  nome: "Daniel",
  sobrenome: "Latim",
};

const objetoB = { ...objetoA };

objetoA.nome = "Biel";
console.log("Lista A:", objetoA);
console.log(`Lista B:`, objetoB);

//---------------------------------------------------------------------------------------------

/*
    Objetos (Básico) em Javascript
*/

// Objeto Literal
// const pessoa1 = {
//   nome: "Daniel",
//   sobrenome: "Latim",
//   idade: 30,

//   fala() {
//     console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
//   },

//   incrementaIdade() {
//     this.idade++;
//     console.log(`Minha idade atual é: ${this.idade}`);
//   },
// };

// // Função que cria um objeto (Factory)
// function criaPessoa(nome, sobrenome, idade) {
//   return { nome, sobrenome, idade };
// }

// const pessoa2 = criaPessoa("Daniel", "Latim", 30);
// const pessoa3 = criaPessoa("China", "Latim", 25);
// const pessoa4 = criaPessoa("Biel", "Latim", 20);

// pessoa1.fala();
// pessoa1.incrementaIdade();
// pessoa1.incrementaIdade();
// console.log(pessoa1.nome);

//---------------------------------------------------------------------------------------------

/*
    Funções em Javascript
*/

//criando uma função simples que não retorna nada "Undefined".
// function saudacao(nome) {
//   console.log(`Bom dia ${nome}`);
// }

// // Função que soma dois valores com retorno da somas dos valores.
// function soma(x, Y) {
//   const resultado = x + Y;
//   return resultado;
// }

// // Função Anonima
// const raiz = function (n) {
//   return n ** 0.5;
// };

// // Arrow Functions
// const raiz2 = (n) => {
//   return n ** 0.5;
// };

// console.log(raiz2(9));

// saudacao("Daniel latim");

//---------------------------------------------------------------------------------------------

/*
    Arrays (Básico)

*/
// const alunos = ["Maria", "Luiz", "João"];
// console.log(alunos);
// console.log(alunos[1]);
// console.log(alunos[2]);

// alunos[0] = "Eduardo"; // Substitui um valor do array se existir.
// alunos[3] = "Luiza"; // adiciona um nome ao array se não existir.

// console.log(alunos.length); // Exibe o tamanho do array

// // adiciona um valor ao final do array
// alunos[alunos.length] = "Jonas";
// alunos[alunos.length] = "Fábio";
// alunos[alunos.length] = "Luana";

// // Adiciona um valor ao final do array usando um método do javascript
// alunos.push("Daniel Latim");
// alunos.push("Biel");

// // Adiciona um valor ao inicio do array usando um método do javascript
// alunos.unshift("China");
// alunos.unshift("Beth");

// console.log(alunos, alunos.length);

// // Remove um valor do final do array usando um método do javascript
// const removidosFim = alunos.pop();

// // Remove um valor do final do array usando um método do javascript
// const removidosInicio = alunos.shift();

// // Deletar um aluno especifico
// // delete alunos[1];

// // Retorno de valores que não existem. Retorna "Undefined"
// console.log("Retorno de um valor que não existe: ", alunos[50]);

// // Fatiar um array tanto positivo quanto negativo.
// console.log("Fatiado Positivo: ", alunos.slice(0, 2)); // 0 Incia, 2 Termina:
// console.log("Fatiado Negativo: ", alunos.slice(2, -2)); // 2 Inicia, -2 Terrmina:

// // Adiciona um valor ao array usando um método do javascript

// console.log(alunos, alunos.length);
// console.log(`Primeiro Aluno Removidos: ${removidosInicio}`);
// console.log(`Últimos Aluno Removidos: ${removidosFim}`);

//---------------------------------------------------------------------------------------------

/*
    Objeto Math

*/
// let num1 = 9.54578;

// // Arredonda um nnumero para cima ou para baixo.
// let num2 = Math.floor(num1);
// num2 = Math.ceil(num1);
// num2 = Math.round(num1);

// // Seleciona o maior numero de uma lista de numeros.
// console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));
// // Seleciona o menor numero de uma lista de numeros.
// console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));

// // Gera numeros aleatórios entre 0 e 1 onde o 1 nunca é incluso.
// console.log(Math.random());
// // Gera um numero aleatório entre 10 e 5
// const aleatorio = Math.round(Math.random() * (10 - 5) + 5);

// console.log(aleatorio);

// Exercicios
// let numeroTitulo = document.getElementById("numero-titulo");
// let texto = document.getElementById("texto");

// let numero = prompt("Informe um numero?");
// numero = Number(numero);
// // let numero = 55;
// let raizQuadrada = Math.round(Math.sqrt(numero));
// let numeroInteiro = Number.isInteger(numero);
// let numeroValido = Number.isNaN(numero);
// let arredondaBaixo = Math.floor(numero);
// let arredondaCima = Math.ceil(numero);
// let duasCasasDecimais = numero.toFixed(2);

// numeroTitulo.innerHTML = "";
// numeroTitulo.innerHTML = `Seu numero é: <strong>${numero}<strong>`;

// texto.innerHTML = "";
// texto.innerHTML += `<p>Raiz quadrada é: <strong>${raizQuadrada}<strong><p>`;
// texto.innerHTML += `<p>${numero} é um numero inteiro: <strong>${numeroInteiro}<strong><p>`;
// texto.innerHTML += `<p>${numero} é um numero NaN: <strong>${numeroValido}<strong><p>`;
// texto.innerHTML += `<p>Arredondando para baixo: <strong>${arredondaBaixo}<strong><p>`;
// texto.innerHTML += `<p>Arredondando para cima: <strong>${arredondaCima}<strong><p>`;
// texto.innerHTML += `<p>Com duas casas decimais: <strong>${duasCasasDecimais}<strong><p>`;

//---------------------------------------------------------------------------------------------

/*
    Numeros em Javascript

*/

// let num1 = 0.7;
// let num2 = 0.1;

// // Transforma o numero em ponto flutuante para ter um calculo preciso.
// // num1 += num2; // 0.8
// // num1 += num2; // 0.9
// // num1 += num2; // 1.0
// // num1 += num2; // 1.1
// // num1 += num2; // 1.2
// // num1 += num2; // 1.3
// // num1 += num2; // 1.4
// // num1 += num2; // 1.5

// // Transforma o numero em ponto flutuante para ter um calculo preciso.
// num1 = (num1 * 100 + num2 * 100) / 100; // 0.8
// num1 = (num1 * 100 + num2 * 100) / 100; // 0.9
// num1 = (num1 * 100 + num2 * 100) / 100; // 1.0

// // Converte um numero em float para tornar o calculo mais preciso.
// num1 = parseFloat(num1.toFixed(2));

// // Converte um numero em formato Number onde o Javascript vai verificar se é float ou Inteiro.
// num1 = Number(num1.toFixed(2));

// console.log(num1);

// // Verifica se o numero é inteiro.
// console.log(Number.isInteger(num1));

// num1 = 15;
// num2 = 2.5;
// let temp = num1 * "Teste";

// //Transforma uma numero em String temporariamente
// console.log(num1.toString() + num2);
// // transforma um numero em string permanente.
// // num1 = num1.toString();
// // Transforma um numero em representação binaria.
// // console.log(num1.toString(2));
// // Controla as casas decimais de um numero.
// console.log(num1.toFixed(4));
// // Verifica se um numero é inteiro
// console.log(Number.isInteger(num1));
// // Verifica se uma conta é valida
// console.log(Number.isNaN(temp)); // Calculos com + fazem a concatenação
// console.log(temp);

//---------------------------------------------------------------------------------------------

/*
    Strings
    Strings é iteravel.
    
*/
// let umaString = "Um texto";

// console.log(umaString[4]);
// console.log(umaString.charAt(6));

// console.log(umaString.concat(" em um lindo dia."));
// console.log(umaString + " em um lindo dia.");
// console.log(`${umaString} em um lindo dia.`);

// console.log(umaString.indexOf("t")); // retorna onde está a palavra buscada nos indice.
// console.log(umaString.lastIndexOf("t")); // Busca um valor iniciando do fim para o inicio.
// console.log(umaString.replace("texto", "Texto alterado")); // Substitui uma palavra.

// let segString = "O rato roeu a roupa do rei de roma.";

// console.log(segString.replace(/r/g, "#")); // Substitui um texto usando expressões regulares.
// console.log(segString.length); // tamanho de uma string
// console.log(segString.slice(-5, -1)); // Divide uma string com um valor inicial e final.

// Divide uma string com um valor inicial e final.
// console.log(segString.substring(segString.length - 5, segString.length - 1));

// console.log(segString.split(" ", 5)); // divide uma string por um caracter.

// Converte um texto para Maiusculo
// console.log(segString.toUpperCase());

// Converte um texto para Minusculo
// console.log(segString.toLowerCase());

// Exercicio com strings

// const nome = prompt("Qual o seu nome completo?");
// const nome = "Daniel Latim";

// let qntLetras = nome.length;
// let segLetraNome = nome[1];
// let primeiroIndiceLetra = nome.indexOf("a");
// let ultimoIndiceLetra = nome.lastIndexOf("a");
// let ultimasLetras = nome.slice(-3);
// let palavrasNome = nome.split(" ");
// let maiusculo = nome.toUpperCase();
// let minusculo = nome.toLowerCase();

// document.body.innerHTML += `O seu nome é: <strong>${nome}</strong> <br/>`;
// document.body.innerHTML += `Seu nome tem <strong>${qntLetras}</strong> letras <br/>`;
// document.body.innerHTML += `A segunda letra do seu nome é: <strong>${segLetraNome}</strong> <br/>`;
// document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? <strong>${primeiroIndiceLetra}</strong> <br/>`;
// document.body.innerHTML += `Qual o último índice da letra a no seu nome? <strong>${ultimoIndiceLetra}</strong> <br/>`;
// document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${ultimasLetras}</strong> <br/>`;
// document.body.innerHTML += `As palavras do seu nome são: <strong>${palavrasNome}</strong> <br/>`;
// document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${maiusculo}</strong> <br/>`;
// document.body.innerHTML += `Seu nome com letras minusculas: <strong>${minusculo}</strong> <br/>`;

// console.log(minusculo);

//---------------------------------------------------------------------------------------------

/*
    Alert, confirm, Prompt (Navegador)
    
*/

// alert("Mensagem do alert");
// confirm("Essa é uma mensagem do confirma!");
// prompt("Campo para receber um valor do usuario!");

// Exercicio de soma dois numeros que o usuario envia.
// let numero1 = prompt("Digite um numero.");
// let numero2 = prompt("Digite um numero.");

// let resultado = Number(numero1) + Number(numero2);

// alert(`O resultado é: ${resultado}`);

//---------------------------------------------------------------------------------------------

/* 
    Operadores Aritimeticos: [+ - / *]
    + : Adição / Concatenação 
    - : Subtração
    / : Divisão
    ** : Potenciação
    % : Resto da divisão

    Precedencia dos Operadores Aritimeticos
    () : Em parenteses
    ** : Módulo
    * / % : O que vier primeiro
    + - : E por fim 

    Operadores de Icremento e Decremento
    ++ : Incremento
    -- : Decremento

    Operadores de Atrubuição
    += : Soma um valor
    -= : Subtrai um valor
    *= : Multiplica um valor
    ...

*/
/*
let num1 = 6;
let num2 = 10;

num1 += num2; // incremento

console.log(num1); // Imprime o resultado do incrmento.

// incremento;
console.log(num2++); // Imprime o valor e soma posteriorment.
console.log(++num2); // Soma e depois imprime o valor já com a soma
console.log(num2); // imprime o valor final.

// Decremento;
console.log(num2--); // Imprime o valor e subtrai posteriorment.
console.log(--num2); // Subtrai e depois imprime o valor já com a soma
console.log(num2); // imprime o valor final.
*/

//---------------------------------------------------------------------------------------------

/* 
    Dados Primitivos
    String, number, undefined, null, boolean, symbol
*/
/*
const nome = "Daniel"; //String
const nome1 = "Daniel"; //String
const nome2 = `Daniel`; //String

const num1 = 10; // number
const num2 = 10.52; // number

// Variavel undefined não pode ser criada como const.

let nomeAluno; // undefined -> Não aponta pra local nenhum da memória.
const sobreNomeAluno = null; // Nulo -> Não aponta pra local nenhum da memória.

const aprovado = false; // Boolean = true, false (Lógico)
*/
