//classe
class Pessoa {
  //static resultado = document.querySelector("#resultado");
  //static btn = document.querySelector("#button");
  // static inputNome = document.querySelector(".nome");

  constructor(dataAtual, resultado, btn, inputNome) {
    this.date = dataAtual;
    this.nome = "";
    this.btn = btn;
    this.inputNome = inputNome;
    this.resultado = resultado;
    // if (this.constructor === Pessoa) {
    //   console.warn("A classe Pessoa não pode ser instanciada.");
    //   throw new ReferenceError("A classe Pessoa não pode ser instanciada.");
    // }
  }

  setNome(nome) {
    return (this.nome = nome);
  }

  // Retorna a data atual
  setDate() {
    const dataAtualizada = Date.now();
    this.date = dataAtualizada;
    return this.date;
  }

  //mesagem de erro e validação
  mensagem(erro, msg) {
    return alert(`${erro}: ${msg}`);
  }

  //função alterar o nome
  AtualizarNome() {
    //console.log(this.inputNome);
    const valorInput = document.querySelector(".nome").value;
    console.log(valorInput);

    if (valorInput !== "") {
      this.resultado.innerHTML += `${this.setNome(valorInput)} - ${this.setDate()}<br/>`;
      this.inputNome.value = "";
      this.inputNome.focus();
      this.mensagem(1, "Cadastro realizado com sucesso.");
    } else {
      return this.mensagem(1, "Preencha o campo corretamente.");
    }
  }

  //Método para chamar os eventos de click
  EventosButton() {
    this.btn.addEventListener("click", this.AtualizarNome);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        return this.AtualizarNome();
      }
    });
  }
}

const dataAtual = Date.now();
const resultado = document.querySelector("#resultado");
const btn = document.querySelector("#button");
const inputNome = document.querySelector(".nome");

//instancia objeto
const p1 = new Pessoa(dataAtual, resultado, btn, inputNome);

//Chama a função que verifica se o botão foi clicado
p1.EventosButton();
