/*

OBJETO DATE
--------------------------------------------------------------

*/

const tresHoras = 60 * 60 * 3 * 1000; // tres horas em milissegundos
const umDia = 60 * 60 * 24 * 1000; // 1 Dia em milessegundos
const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix
console.log(data.toString());

console.log("Dia:", data.getDate());
console.log("Mês:", data.getMonth() + 1); // Mẽs começa do zero
console.log("Ano:", data.getFullYear());
console.log("Hora:", data.getHours());
console.log("Minuto:", data.getMinutes());
console.log("Segundo:", data.getSeconds());
console.log("Milesemo Segundo:", data.getMilliseconds());
console.log("Dia semana:", data.getDay()); // 0 - Domingo, 6 - Sabado

console.log("Data Atual em Milissegundos:", Date.now());

const novaData = new Date(2019, 3, 20, 15, 14, 27, 500); // Mês: 0-11
console.log(novaData.toString());

const novaData2 = new Date("2019-04-20 20:20:59"); // Mês: 0-11
console.log(novaData2.toString());

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formaDAta(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia} / ${mes} / ${ano} - ${hora}:${min}:${seg}`;
}

const data1 = new Date();
const dataBrasil = formaDAta(data1);
console.log("Data: ", dataBrasil);
