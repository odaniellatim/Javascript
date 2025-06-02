// 📌 Funções matemáticas básicas
function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b === 0 || a === 0) {
    return "erro divisão por 0";
  }
  return a / b;
}

// 📌 Função para cálculos mais complexos
function calculoEspecial(a, b, c) {
  return a * b + c;
}

// 📌 Função principal que organiza os cálculos
function executarCalculos(num1, num2) {
  let a = num1;
  let b = num2;
  let c = 5;

  const somaValores = soma(num1, num2);
  const subtracaoValores = subtracao(num1, num2);
  const multiplicacaoValores = multiplicacao(num1, num2);
  const divisaoValores = divisao(num1, num2);
  const calculoEspecialValores = calculoEspecial(num1, num2, c);

  const resultado1 = `A soma de ${a} + ${b} é: ` + somaValores;
  const resultado2 = `A subtracao de ${a} - ${b} é: ` + subtracaoValores;
  const resultado3 =
    `A multiplicacao de ${a} * ${b} é: ` + multiplicacaoValores;
  const resultado4 = `A divisao de ${a} / ${b} é: ` + divisaoValores;
  const resultado5 =
    `A calculoEspecial de ${a} * ${b} + ${c} é: ` + calculoEspecialValores;

  return resultado1 + resultado2 + resultado3 + resultado4 + resultado5;
}

// 📌 Testando com os valores dados
const valoresa = 1;
const valoresb = 1;
console.log(executarCalculos(valoresa, valoresb));
