class NomeUser {
  constructor() {
    this.meuArray = [];
    this.localStorageKey = "bd"; // Defina a chave para o localStorage
    this.exibirDadosSalvos();
    this.consultarDados();
  }

  nomeCompleto(nameValue, lastnameValue) {
    return this.validaCampos(nameValue, lastnameValue);
  }

  validaCampos(nome, sobrenome) {
    const div = document.querySelector(".nomeCompleto");

    if (!nome) {
      this.log(1, "Erro: preencha o campo nome");
      return (div.innerHTML = "<strong>Nome está vazio</strong>");
    }
    if (!sobrenome) {
      this.log(1, "Erro: preencha o campo sobrenome");
      return (div.innerHTML = "<strong>Sobrenome está vazio</strong>");
    } else {
      return this.imprimeNome(nome, sobrenome);
    }
  }

  imprimeNome(nome, sobrenome) {
    const div = document.querySelector(".nomeCompleto");
    this.log(2, "Nome cadastrado com sucesso");

    return (div.innerHTML += `<span>${nome} ${sobrenome}</span>`);
  }

  completo() {
    const campoNome = document.querySelector("#name"); // Acessa os elementos aqui
    const campoSobrenome = document.querySelector("#lastname"); // Acessa os elementos aqui

    // Extrai os valores dos inputs AQUI, no momento do clique
    const inputNome = campoNome.value;
    const inputSobrenome = campoSobrenome.value;

    // Passa o nome completo formatado para imprimeNome
    this.validaCampos(inputNome, inputSobrenome);
    this.focuInput(campoNome);
    this.resetInput(campoNome, campoSobrenome);

    this.saveDados();
  }

  clickButton() {
    const button = document.querySelector(".button");

    button.addEventListener("click", () => {
      this.completo();
    });
  }

  clickEnter() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.completo();
      }
    });
  }

  focuInput(campoNome) {
    campoNome.focus();
  }

  resetInput(campoNome, campoSobrenome) {
    campoNome.value = "";
    campoSobrenome.value = "";
  }

  log(erro, msg) {
    const log = document.querySelector(".log");

    const logItem = {
      erroNumero: erro,
      mensagem: msg,
    };

    // const keys = Object.keys(item);
    // const values = Object.values(item);
    this.meuArray.push(logItem);

    if (erro == 2) {
      return (log.innerHTML += `<div class="sucess">${msg}</div>`);
    }
    if (erro == 1) {
      return (log.innerHTML += `<div class="erro">${msg}</div>`);
    }
  }

  saveDados() {
    const array = JSON.stringify(this.meuArray);
    const bd = localStorage.setItem("bd", array);
  }

  consultarDados() {
    const bd = localStorage.getItem(this.localStorageKey);
    this.meuArray = bd ? JSON.parse(bd) : [];

    if (!Array.isArray(this.meuArray)) {
      return (this.meuArray = []);
    }
  }

  exibirDadosSalvos() {
    const log = document.querySelector(".log");

    if (this.meuArray.length > 0) {
      this.meuArray.forEach((item) => {
        if (item.erroNumero == 2) {
          return (log.innerHTML += `<div class="sucess">${item.mensagem}</div>`);
        }
        if (item.erroNumero == 1) {
          return (log.innerHTML += `<div class="erro">${item.mensagem}</div>`);
        }
      });
    } else {
      log.innerHTML = `<span>Nenhum item no banco de dados<span>`;
    }
  }
}

const user1 = new NomeUser();
user1.exibirDadosSalvos();

user1.clickEnter();
user1.clickButton();
