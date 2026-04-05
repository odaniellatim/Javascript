import { Orcamento_final } from "../class/orcamento_final.js"

// Seleção dos itens com os resultado do valor total e média dos custos fixos
const pValorTotalCustoFixo = document.querySelector("#valor-total-custo-fixo")
const pValorMedioCustoFixo = document.querySelector("#valor-medio-custo-fixo")

//Seleção dos inputs de cadastros
export const inputNomeCustoFixo = document.querySelector(".form-nome-custo-fixo")
export const inputValorCustoFixo = document.querySelector(".form-valor-custo-fixo")
export const inputStatusCustoFixo = document.querySelector(".form-status-custo-fixo")
export const inputDurabilidadeCustoFixo = document.querySelector(".form-durabilidade-custo-fixo")

// Elemento da Tabela para listar os itens cadastrados
export const tbodyCustoFixo = document.querySelector("#tbody-custo-fixo")

// instacia da classe Orçamento Final com acesso aos métodos de outras classes
const newItem = new Orcamento_final()

// Adicionando novos custo fixo usando classe e funcao construtora
export function addCustoFixo(nome, valor, status, durabilidade) {
    const addItem = newItem.addCustoFixo(nome, Number(valor), status, Number(durabilidade))
    return addItem
}

// Lista e adiciona o valor médio e total do custo fixo na tela do usuario
export function totalMedia() {
    const valorTotal = newItem.valorTotalCustoFixo()
    const valorMedioMensal = newItem.valorMedioMensalCustoFixo()
    pValorTotalCustoFixo.innerHTML = "TOTAL CUSTO FIXO: R$ " + valorTotal
    pValorMedioCustoFixo.innerHTML = "TOTAL MENSAL R$ " + valorMedioMensal.toFixed(2)
}

export function resetarInputCadastroCustoFixo() {
    inputNomeCustoFixo.value = ""
    inputValorCustoFixo.value = ""
    inputStatusCustoFixo.value = ""
    inputDurabilidadeCustoFixo.value = ""
}