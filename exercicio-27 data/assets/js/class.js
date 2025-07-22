class alteraValor {
  constructor(valorInput) {
    this.valorInput = valorInput;
  }

  mensagemTela() {
    const divMostraTexto = document.querySelector(".resultado");
    divMostraTexto.innerHTML = this.valorInput;
    console.log(divMostraTexto);
  }
}

const divMostraTexto = document.querySelector(".resultado");
const inputTexto = document.querySelector(".input-text");
const txt = inputTexto.value;

mensagem = new alteraValor(txt);

document.addEventListener("input", verValor);

function verValor() {
  console.log(inputTexto.value);
  mensagem.mensagemTela();
}
