/*

ESTRUTURA SWITCH/CASE
--------------------------------------------------------------

*/

const data = new Date("1987-04-13 00:00:00");
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
// if (diaSemana === 0) {
//   diaSemanaTexto = "Domingo";
// } else if (diaSemana === 1) {
//   diaSemanaTexto = "Segunda";
// } else if (diaSemana === 2) {
//   diaSemanaTexto = "Terça";
// } else if (diaSemana === 3) {
//   diaSemanaTexto = "Quarta";
// } else if (diaSemana === 4) {
//   diaSemanaTexto = "Quinta";
// } else if (diaSemana === 5) {
//   diaSemanaTexto = "Sexta";
// } else if (diaSemana === 6) {
//   diaSemanaTexto = "Sábado";
// } else {
//   diaSemanaTexto = "";
// }

function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;
  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "Domingo";
      return diaSemanaTexto;
    // break;
    case 1:
      diaSemanaTexto = "Segunda";
      return diaSemanaTexto;
    // break;
    case 2:
      diaSemanaTexto = "Terça";
      return diaSemanaTexto;
    // break;
    case 2:
      diaSemanaTexto = "Quarta";
      return diaSemanaTexto;
    // break;
    case 4:
      diaSemanaTexto = "Quinta";
      return diaSemanaTexto;
    // break;
    case 5:
      diaSemanaTexto = "Sexta";
      return diaSemanaTexto;
    // break;
    case 6:
      diaSemanaTexto = "Sábado";
      return diaSemanaTexto;
    // break;
    default:
      diaSemanaTexto = "";
      return diaSemanaTexto;
  }
}

console.log(diaSemana, diaSemanaTexto);
