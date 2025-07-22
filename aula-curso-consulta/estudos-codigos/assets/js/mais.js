//classe
class Pessoa {
  static resultado = document.querySelector("#resultado");
  static btn = document.querySelector("#button");
  static inputNome = document.querySelector(".nome");

  constructor() {
    this.date = Date.now();
    this.nome = "";
    // if (this.constructor === Pessoa) {
    //   console.warn("A classe Pessoa não pode ser instanciada.");
    //   throw new ReferenceError("A classe Pessoa não pode ser instanciada.");
    // }
  }

  static setNome(nome) {
    return (this.nome = nome);
  }

  // Retorna a data atual
  setDate() {
    return this.date;
  }

  //função alterar o nome
  static AtualizarNome() {
    const valorInput = Pessoa.inputNome.value;
    Pessoa.resultado.innerHTML += `${Pessoa.setNome(valorInput)} - ${p1.setDate()}<br/>`;
  }

  //Método para chamar os eventos de click
  static EventosButton() {
    Pessoa.btn.addEventListener("click", Pessoa.AtualizarNome);
  }
}

//instancia objeto
const p1 = new Pessoa();

//Chama a função que verifica se o botão foi clicado
Pessoa.EventosButton();
