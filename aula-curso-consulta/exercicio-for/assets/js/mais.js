/*

EXERCICIOS
--------------------------------------------------------------

*/

const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];

const container = document.querySelector(".resultado");
const resultado = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  let textoCriado = document.createTextNode(texto);

  tagCriada.appendChild(textoCriado);
  resultado.appendChild(tagCriada);

  if (tag == "p") {
    tagCriada.classList.add("p"); // Adicionar uma classe na nova div criada.
    tagCriada.style.background = "red"; // Adicionar uma uma cor na nova classe criada.
  } else if (tag == "div") {
    tagCriada.classList.add("div");
    tagCriada.style.background = "blue";
  } else if (tag == "footer") {
    tagCriada.classList.add("footer");
    tagCriada.style.background = "violet";
  } else if (tag == "section") {
    tagCriada.classList.add("section");
    tagCriada.style.background = "orange";
  }
}

container.appendChild(resultado);
