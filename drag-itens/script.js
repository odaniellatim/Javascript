const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const btn = document.querySelector("#btn_transferir");

const todosCursos = [...document.querySelectorAll(".curso")];

todosCursos.map((el) => {
  el.addEventListener("click", (evt) => {
    const curso = evt.target;
    curso.classList.toggle("selecionado");
  });
});

btn.addEventListener("click", () => {
  const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
  const cursosNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado")];
  cursosSelecionados.map((el) => {
    caixa2.appendChild(el);
  });
  cursosNaoSelecionados.map((el) => {
    caixa1.appendChild(el);
  });
});

/*
Testando a fonte usando no vs code para entender as diferenças e também qual é mais facil para ler e entender nos minimos detalhes.

*/
