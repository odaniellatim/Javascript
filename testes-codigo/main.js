const tagHtml = document.querySelector(".cadastro");

const inputTexto = tagHtml.querySelector(".texto-item");
const inputValor = tagHtml.querySelector(".valor-item");

const button = tagHtml.querySelector(".button");

const totalItensLista = document.querySelector(".total-produto");
const divValorTotal = document.querySelector(".valor-total");

let id = 1; // contador
let textArray = []; // array de itens na lista
let valorArray = []; // array para soma total do valor itens;

// seleciona a classe lista html
const listaItems = document.querySelector(".lista");
listaItems.innerHTML = ""; // reseta div lista
//cria a div no container
listaItems.appendChild(criaDiv());

button.addEventListener("click", cadastroTexto);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    cadastroTexto();
  }
});

function carrinhoTotal() {
  if (id === "1") {
    totalItensLista.innerHTML = `<b>${id}</b> - Produto no carrinho`;
  } else {
    totalItensLista.innerHTML = `<b>${id}</b> - Produtos no carrinho`;
  }
}

function cadastroTexto() {
  //Validação Campos em Branco
  if (!inputTexto.value && !inputValor.value) {
    inputTexto.style.borderColor = "";
    inputTexto.style.borderColor = "red";
    inputValor.style.borderColor = "red";
    return;
  } else if (!inputTexto.value) {
    inputTexto.style.borderColor = "";
    inputTexto.style.borderColor = "red";
    return;
  } else if (!inputValor.value) {
    inputTexto.style.borderColor = "";
    inputValor.style.borderColor = "red";
    return;
  }

  // seleciona a classe alinhamento html nova
  const divAlign = document.querySelector(".alinhamento");
  const p = divAlign.appendChild(criaP());
  const textoInputValor = inputTexto.value.toUpperCase();
  const valInput = Number(inputValor.value).toFixed(2);

  cadastroArray(textoInputValor + "," + valInput);

  // Apresenta texto input tela
  const ar = formataTextoLista(p, textoInputValor, valInput);

  //Carrinho de compras total itens
  carrinhoTotal();

  //Valor total Carrinho
  const somaItens = totalValorTotalCarrinho().toFixed(2);
  divValorTotal.innerHTML = `Total Carrinho: <b>${somaItens}</b>`;

  // Limpa o input de Texto
  limpaInput();

  // soma um valor na variavel id para criar os indice na lista de itens
  id = id + 1;
}

function totalValorTotalCarrinho() {
  saldo = Number(inputValor.value);
  valorArray.push(saldo);
  sum = 0;
  for (let i = 0; i < valorArray.length; i++) {
    sum += valorArray[i];
  }
  return sum;
}

function formataTextoLista(p, textoInputValor, valInput) {
  const resultTextoLista =
    (p.innerHTML = `${textoInputValor} <span class="price"> R$ ${valInput}<span>`);
  return resultTextoLista;
}

function cadastroArray(textInput) {
  return textArray.push(textInput);
}

function criaDiv() {
  const criaDivElement = document.createElement("div");
  criaDivElement.classList.add("alinhamento");
  return criaDivElement;
}

function criaP() {
  const criaElement = document.createElement("p");
  criaElement.classList.add("item");
  return criaElement;
}

function limpaInput() {
  inputTexto.value = "";
  inputValor.value = "";
  inputTexto.style.borderColor = "";
  inputValor.style.borderColor = "";
  inputTexto.focus();
}
