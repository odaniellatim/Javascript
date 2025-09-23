//Simulando um Banco de Dados
// let dicionario = {
//     "nome": "Daniel Latim",
//     "idade": 32,
//     "formacao": "Ensino Completo",
//     "interesses": ["PS4", "PS5", "XBOX"]
// }

const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const formacao = document.querySelector("#formacao");
const interesses = document.querySelector("#interesses");
const buttom = document.querySelector("#enviar");
const resultado = document.querySelector("#resultado")

// Construindo um objeto com classe para facilitar na construção dos métodos.
class Pessoa{
    constructor(nome, idade, formacao, interesses){
        this.nome = nome
        this.idade = idade
        this.formacao = formacao
        this.interesses = interesses
    }
    getNome(){
        return this.nome
    }
    getIdade(){
        return this.idade
    }
    getFormacao(){
        return this.formacao
    }
    getInteresses(){        
        return this.interesses
    }
}

//Destruturando os dados do (Banco de Dados Simulado)
// const {nome, idade, formacao, interesses} = dicionario

function inputOpcao(input){
        const selecao = []

        for(let i = 0; i < input.options.length; i++){
            const opcao = input.options[i]

            if(opcao.selected){
                selecao.push(opcao.value)
            }
        }
        return selecao
}

function cadastroUsuario(nome, idade, formacao, interesses){
    const option = inputOpcao(interesses)
    p1 = new Pessoa(nome.value, idade.value, formacao.value, option)
    resultado.innerHTML += `${p1.getNome()}<br>`;
    resultado.innerHTML += `${p1.getIdade()}<br>`;
    resultado.innerHTML += `${p1.getFormacao()}<br>`;
    resultado.innerHTML += `${p1.getInteresses()}<br>`;
    resetCampos();

    console.log(p1.getNome())
    console.log(p1.getIdade())
    console.log(p1.getFormacao())
    console.log(p1.getInteresses())
}

function resetCampos(){
    nome.value = ''
    idade.value = ''
    formacao.value = ''
    interesses.value = ''
}
//Instanciando o objeto e chamando os métodos.
// p1 = new Pessoa(nome, idade, formacao, interesses)
// console.log(p1.getNome())
// console.log(p1.getIdade())
// console.log(p1.getFormacao())
// console.log(p1.getInteresses())

//Controla o evento
buttom.addEventListener("click", ()=>{
    cadastroUsuario(nome, idade, formacao, interesses)
})