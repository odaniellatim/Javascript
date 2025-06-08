function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "GMT",
  });
}

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
const relogioBG = "rgb(244, 244, 244)";

let segundos = 0;
let timer;

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000);
}

document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("iniciar")) {
    iniciarR();
  }
  if (el.classList.contains("pausar")) {
    pausarR();
  }
  if (el.classList.contains("zerar")) {
    zerarR();
  }
});

function iniciarR() {
  relogio.classList.remove("pausado");
  relogio.style.background = relogioBG;
  relogio.style.borderColor = relogioBG;
  relogio.style.border = clearInterval(timer);
  iniciaRelogio();
}

function pausarR() {
  relogio.classList.add("pausado");
  relogio.style.background = "rgb(228, 172, 168)";
  relogio.style.borderColor = "rgb(158, 2, 2)";
  clearInterval(timer);
}

function zerarR() {
  clearInterval(timer);
  segundos = 0;
  relogio.style.background = relogioBG;
  relogio.style.borderColor = relogioBG;
  relogio.classList.remove("pausado");
  relogio.innerHTML = "00:00:00";
}

// iniciar.addEventListener("click", function (event) {
//   relogio.classList.remove("pausado");
//   clearInterval(timer);
//   iniciaRelogio();
// });

// pausar.addEventListener("click", function (event) {
//   relogio.classList.add("pausado");
//   clearInterval(timer);
// });

// zerar.addEventListener("click", function (event) {
//   clearInterval(timer);
//   segundos = 0;
//   relogio.classList.remove("pausado");
//   relogio.innerHTML = "00:00:00";
// });
