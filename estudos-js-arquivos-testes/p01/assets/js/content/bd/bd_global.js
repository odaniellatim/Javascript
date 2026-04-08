import { Orcamento_final } from "../class/orcamento_final.js"
import { Local_storage } from "../class/localstorage.js"

// Variaveis globais
//--------------------------------------------------------------------------------------------------------------

// instacia da classe Orçamento Final com acesso aos métodos de outras classes
export const NEWITEM = new Orcamento_final() // Instancia da classe que gerencia o objeto custo fixo
export const LC = new Local_storage() // Instancia da classe para salvar os dados no LocalStorage


//CUSTO FIXO: VARIAVEL BANCO DE DADOS GLOBAL
export let BD_CUSTO_FIXO_GLOBAL = []

export function setBD_CUSTO_FIXO_GLOBAL(NEWITEM) {
    BD_CUSTO_FIXO_GLOBAL = NEWITEM
}

//RENDA MENSAL: VARIAVEL BANCO DE DADOS GLOBAL
export let BD_RENDA_MENSAL_GLOBAL = []

export function setBD_RENDA_MENSAL_GLOBAL(NEWITEM) {
    BD_RENDA_MENSAL_GLOBAL = NEWITEM
}