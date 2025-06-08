/*

setInterval e setTimeout - Controlador de timer.
--------------------------------------------------------------

*/

function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

function funcaoDoInterval() {
  mostraHora();
}

// Cria um contador usando um valor final em milissegundos.
// setInterval(funcaoDoInterval, 1000);

// timer com função anonima.
setInterval(function () {
  // console.log("Função anonima: ", mostraHora());
}, 1000);

// timer armazenado em uma variavel.
const timer = setInterval(function () {
  console.log("Variavel: ", mostraHora());
}, 1000);

// Finaliza o timer após um tempo determinado em milissegundos.
setTimeout(function () {
  clearInterval(timer);
}, 5000);

setTimeout(function () {
  console.log("Olá Mundo");
}, 5000);
