const valoresDicionario = [
  // {"valor1": 10, "valor2": 12},
  // {"valor1": 15, "valor2": 20},
  // {"valor1": 20, "valor2": 30},
  // {"valor1": 30, "valor2": 15},
  // {"valor1": 12, "valor2": 12},
];

const container = document.querySelector(".container");
const valorInput1 = container.querySelector(".valor1");
const valorInput2 = container.querySelector(".valor2");
const resultado = document.querySelector(".resultado");
const botao = document.querySelector(".button");
const statusBar = document.querySelector(".status");

botao.addEventListener("click", calcularValor);
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    calcularValor(e);
  }
});

statusBar.innerText = "Preencha os valores para calcular.";
statusBar.classList.remove("erro", "sucess");
hidenNotify();

function calcularValor(e) {
  const eventoTarget = e.target;

  const number1 = valorInput1.value;
  const number2 = valorInput2.value;

  if (number1 > 0 || number2 > 0) {
    valoresDicionario.push({
      numero1: Number(number1),
      numero2: Number(number2),
      resultado: Number(0),
    });

    let valor1;
    let valor2;
    let valor3;

    valoresDicionario.forEach((item, indice) => {
      const key1 = Object.keys(item)[0];
      const key2 = Object.keys(item)[1];
      const key3 = Object.keys(item)[2];

      valor1 = item[key1];
      valor2 = item[key2];

      const totalSoma = somar(valor1, valor2);
      valor3 = valoresDicionario[indice].resultado = totalSoma;
    });

    resultadoConta(valor1, valor2, valor3);

    focusInput();

    addClassSucess();

    statusBar.innerText = "Conta Realizada com Sucesso!";
  } else {
    addClassErro();
    statusBar.innerText = "Preencha os campos com um numero maior que zero!";
    focusInput();
  }
}

function resultadoConta(valor1, valor2, valor3) {
  let template = `<b>R$ ${valor1.toFixed(2)}</b> + `;
  template += `<b>R$ ${valor2.toFixed(2)}</b> = `;
  template += `<b>R$ ${valor3.toFixed(2)}</b> `;

  const newElement = document.createElement("p");
  resultado.appendChild(newElement);

  newElement.innerHTML += template;
  console.log(valoresDicionario);
}

// function calcular(){

//   const number1 = valorInput1.value;
//   const number2 = valorInput2.value;

//   valoresDicionario.push({numero1: Number(number1), numero2: Number(number2)});

//   for(let i of valoresDicionario){
//     const keys1 = Object.keys(i)[0];
//     const keys2 = Object.keys(i)[1];
//     const valKeys1 = i[keys1];
//     const valKeys2 = i[keys2];

//     somar(valKeys1, valKeys2);
//   }
// }

function somar(val1, val2) {
  const number1 = val1;
  const number2 = val2;
  const result = number1 + number2;
  return result;
}

function focusInput() {
  valorInput1.value = "";
  valorInput2.value = "";
  valorInput1.focus();
}

function addClassErro() {
  statusBar.classList.add("erro");
  statusBar.classList.remove("sucess");
}

function addClassSucess() {
  statusBar.classList.add("sucess");
  statusBar.classList.remove("erro");
}

// function hidenNotify() {
//   sucess = statusBar.classList.contains("sucess");
//   erro = statusBar.classList.contains("erro");

//   if (sucess) {
//     setTimeout(() => {
//       statusBar.classList.add("hidden");
//       addClassSucess();
//     }, 5000);
//     setTimeout(() => {
//       removeHidden();
//     }, 15000);
//     return;
//   }
//   if (erro) {
//     setTimeout(() => {
//       statusBar.classList.add("hidden");
//       addClassErro();
//     }, 5000);
//     setTimeout(() => {
//       removeHidden();
//     }, 15000);
//   }
// }

// function removeHidden() {
//   statusBar.classList.remove("hidden");
// }
