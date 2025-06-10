const tagHtml = document.querySelector(".cadastro");
const button = tagHtml.querySelector(".button");
const inputTexto = tagHtml.querySelector(".texto-item");

// seleciona a classe lista html
const listaItems = document.querySelector(".lista");
listaItems.innerText = "";
listaItems.appendChild(criaDiv());

function cadastroTexto() {
  // seleciona a classe alinhamento html nova
  const divAlign = document.querySelector(".alinhamento");

  const p = divAlign.appendChild(criaP());
  p.innerText = inputTexto.value;

  indiceItens();

  // Limpa o input de Texto
  limpaInput();
}

button.addEventListener("click", cadastroTexto);

function criaDiv() {
  const criaDivElement = document.createElement("div");
  criaDivElement.classList.add("alinhamento");
  return criaDivElement;
}

function criaP() {
  const criaElement = document.createElement("p");
  criaElement.classList.add("item");
  // criaElement.innerText = indiceItens();
  return criaElement;
}

function indiceItens() {
  let lista = [];
  // lista = document.querySelectorAll("p");

  lista.push(inputTexto.value);

  console.log(lista);
  for (let indice in lista.length) {
    console.log(typeof indice, indice);
    return indice;
  }
}

function limpaInput() {
  inputTexto.value = "";
  inputTexto.focus();
}
