//SELECIONA OS PARAGRAFOS E CLASSE DIV PARAGRAFOS.
const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");

//ALTERA AS CORES DOS PARAGRAFOS
const color = document.querySelector(".color");
color.addEventListener("change", alteraCor);

//ALTERA AS CORES DO BACKGROUND DOS PARAGRAFOS
const colorBG = document.querySelector(".color-bg");
colorBG.addEventListener("change", alteraBG);

// FUNÇÃO QUE ALTERA A COR DO TEXTO DO PARAGRAFO
function alteraCor() {
  let novaCor = color.value;

  for (novacor of ps) {
    novacor.style.color = novaCor;
  }
}

// FUNÇÃO QUE ALTERA A COR DO BACKGROUND DOS PARAGRAFO
function alteraBG() {
  let corBG = colorBG.value;

  for (newBG of ps) {
    newBG.style.background = corBG;
  }
}

for (let p of ps) {
  p.style.background = colorBG.value;
  p.style.color = color.value;
  p.style.borderRadius = "5px";
  p.style.padding = "5px";
}

// const estilosBody = getComputedStyle(document.body);
// const backgroundColorBody = estilosBody.backgroundColor;
// let fontColor = "white";
