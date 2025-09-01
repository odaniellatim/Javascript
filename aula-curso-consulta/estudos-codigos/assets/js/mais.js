// Classe base
class Base {
  //static resultado = document.querySelector("#resultado");
  //static btn = document.querySelector("#button");
  // static inputNome = document.querySelector(".nome");

  constructor(dataAtual) {
    this.date = dataAtual;
    this.resultado = document.querySelector("#resultado");
    this.btn = document.querySelector("#button");
    this.inputNome = document.querySelector("#nome");
    this.nome = "";
    if (this.constructor === Base) {
      console.warn("A classe Base não pode ser instanciada.");
      throw new ReferenceError("A classe Pessoa não pode ser instanciada.");
    }
  }
}

//classe base para criar a pessoa
class Pessoa extends Base {
  constructor(dataAtual) {
    super(dataAtual);
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
    if (erro === 1) {
      return alert(`${erro}: ${msg}`);
    } else {
      return alert(`${erro}: ${msg}`);
    }
  }

  //função alterar o nome
  AtualizarNome() {
    //console.log(this.inputNome);
    const valorInput = this.inputNome.value;
    // console.log(valorInput);

    if (valorInput !== "") {
      this.resultado.innerHTML += `${this.setNome(valorInput)} - ${this.setDate()}<br/>`;
      this.inputNome.value = "";
      this.inputNome.focus();
      this.mensagem(1, "Cadastro realizado com sucesso.");
    } else {
      return this.mensagem(2, "Preencha o campo corretamente.");
    }
  }

  //Método para chamar os eventos de click
  EventosButton() {
    this.btn.addEventListener("click", () => {
      this.AtualizarNome();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        return this.AtualizarNome();
      }
    });
  }
}

const dataAtual = Date.now();
// const resultado = document.querySelector("#resultado");
// const btn = document.querySelector("#button");
// const inputNome = document.querySelector(".nome");

//instancia objeto
const p1 = new Pessoa(dataAtual);

//Chama a função que verifica se o botão foi clicado
p1.EventosButton();
