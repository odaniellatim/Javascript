// Capturar evento de submite do formulario.

const form = document.querySelector("#formulario");
form.addEventListener("submit", EventoEscuta);
//  {
//   e.preventDefault();
//   const inputPeso = e.target.querySelector("#peso");
//   const inputAltura = e.target.querySelector("#altura");
//   const peso = Number(inputPeso.value);
//   const altura = Number(inputAltura.value);
//   if (!peso) {
//     setResultado("Peso Inválido", false);
//     return;
//   }
//   if (!altura) {
//     setResultado("Altura Inválida", false);
//     return;
//   }
//   const imc = getImc(peso, altura);
//   const nivelImc = getNivelImc(imc);
//   const msg = `Seu IMC é ${imc} (${nivelImc}).`;
//   setResultado(msg, true);
// });

function EventoEscuta(e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Peso Inválido", false);
    return;
  }

  if (!altura) {
    setResultado("Altura Inválida", false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
}

function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obsidade grau 1",
    "Obsidade grau 2",
    "Obsidade grau 3",
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

// Função que cria um elemento html.
function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = criaP(); // cria um elemnto html p

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }
  //   p.classList.add("paragrafo-resultado"); // atribui uma classe no elemento html
  p.innerHTML = msg; // insere um texto dentro do html
  resultado.appendChild(p); // apresenta o elemnto html e o texto em um local na tela.
}
