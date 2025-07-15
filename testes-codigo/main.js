class NomeUser {
  constructor(name, lastname) {}

  nomeCompleto(nameValue, lastnameValue) {
    return this.validaCampos(nameValue, lastnameValue);
  }

  validaCampos(nome, sobrenome) {
    const div = document.querySelector(".nomeCompleto");

    if (!nome) {
      return (div.innerHTML = "<strong>Nome está vazio</strong>");
    }
    if (!sobrenome) {
      return (div.innerHTML = "<strong>Sobrenome está vazio</strong>");
    }

    return `<span>${nome} ${sobrenome}</span>`;
  }

  imprimeNome(nomeCompletoFormatado) {
    const div = document.querySelector(".nomeCompleto");
    return (div.innerHTML = `<b>${nomeCompletoFormatado}</b>`);
  }

  completo() {
    const campoNome = document.querySelector("#name"); // Acessa os elementos aqui
    const campoSobrenome = document.querySelector("#lastname"); // Acessa os elementos aqui

    // Extrai os valores dos inputs AQUI, no momento do clique
    const inputNome = campoNome.value;
    const inputSobrenome = campoSobrenome.value;

    // Chama nomeCompleto com os valores
    const nomeCompletoFormatado = this.nomeCompleto(inputNome, inputSobrenome);

    // Passa o nome completo formatado para imprimeNome
    this.imprimeNome(nomeCompletoFormatado);
  }

  clickButton() {
    const button = document.querySelector(".button");

    button.addEventListener("click", () => {
      this.completo();
      this.log();
    });
  }

  clickEnter() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.completo();
      }
      this.log();
    });
  }

  log() {
    console.log("Eventos de click e execução");
  }
}

const user1 = new NomeUser();

user1.clickEnter();
user1.clickButton();
