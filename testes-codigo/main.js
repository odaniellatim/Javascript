class NomeUser {
  constructor(nome, sobreNome) {
    this.nome = nome;
    this.sobreNome = sobreNome;
  }

  nomeCompleto() {
    let inputNome = this.nome.value;
    let inputSobrenome = this.sobreNome.value;
    const div = document.querySelector(".nomeCompleto");

    // if (inputNome && inputSobrenome) {
    // }

    if (!inputNome) {
      return (div.innerHTML = "<strong>Nome está vazio</strong>");
    }
    if (!inputSobrenome) {
      return (div.innerHTML = "<strong>Sobrenome está vazio</strong>");
    } else {
      let nc = `<span>${inputNome} ${inputSobrenome}</span>`;
      return nc;
    }
  }

  imprimeNome() {
    const div = document.querySelector(".nomeCompleto");
    const nomeImpresso = (div.innerHTML = `<b>${this.nomeCompleto()}</b>`);

    return nomeImpresso;
  }

  start() {
    const button = document.querySelector(".button");

    button.addEventListener("click", () => {
      this.imprimeNome();
    });
  }
}

const user1 = new NomeUser(document.querySelector("#name"), document.querySelector("#lastname"));

user1.start();
