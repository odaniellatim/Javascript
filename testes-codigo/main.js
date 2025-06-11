const tagHtml = document.querySelector(".cadastro");
const button = tagHtml.querySelector(".button");
const inputTexto = tagHtml.querySelector(".texto-item");
let id = 1; // contador
let textArray = []; // array de itens na lista

// seleciona a classe lista html
const listaItems = document.querySelector(".lista");
listaItems.innerText = "";
listaItems.appendChild(criaDiv());

button.addEventListener("click", cadastroTexto);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    cadastroTexto();
  }
});

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
  inputTexto.focus();
}

function cadastroTexto() {
  if (inputTexto.value === "") return;
  // seleciona a classe alinhamento html nova
  const divAlign = document.querySelector(".alinhamento");
  const p = divAlign.appendChild(criaP());
  const TextoInputValor = inputTexto.value.toUpperCase();

  cadastroArray(TextoInputValor);
  formataTextoLista(id, p, TextoInputValor);

  // Limpa o input de Texto
  limpaInput();

  // soma um valor na variavel id para criar os indice na lista de itens
  id = id + 1;
}

function formataTextoLista(id, p, TextoInputValor) {
  const resultTextoLista = (p.innerHTML =
    `<b>${id}</b>. ${TextoInputValor}`.toUpperCase());
  return resultTextoLista;
}

function cadastroArray(textInput) {
  textArray.push(textInput);
}
