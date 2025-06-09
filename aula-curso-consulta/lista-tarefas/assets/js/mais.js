const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

inputTarefa.addEventListener("keypress", keypressEnter);

document.addEventListener("click", function (e) {
  const tagHtml = e.target;

  if (tagHtml.classList.contains("apagar")) {
    tagHtml.parentElement.remove();
    salvarTarefas();
  }

  if (tagHtml.classList.contains("btn-tarefa")) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function criaTarefa(textoInput) {
  const li = criaLi(); // Cria o html LI
  li.innerText = textoInput;

  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

function criaLi() {
  const li = document.createElement("li");
  return li;
}

function keypressEnter(e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
}

function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function criaBotaoApagar(li) {
  li.innerText += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.textContent = "Apagar";
  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute("Title", "Apagar tarefa.");
  li.appendChild(botaoApagar);
}

// btnTarefa.addEventListener("click", function () {
//   if (!inputTarefa.value) return;
//   criaTarefa(inputTarefa.value);
// });

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    listaDeTarefas.push(tarefaTexto);
  }

  salvaBD(listaDeTarefas);
}

function salvaBD(tarefasBD) {
  const tarefasJSON = JSON.stringify(tarefasBD);

  localStorage.setItem("tarefasBD", tarefasJSON);
}

function bdItems() {
  const tarefas = localStorage.getItem("tarefasBD");
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}

bdItems();
