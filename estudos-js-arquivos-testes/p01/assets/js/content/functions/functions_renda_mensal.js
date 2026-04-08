import { NEWITEM } from "../bd/bd_global.js"
import { divRendaMensalMediaProjeto, divRendaMensalRendaHora, inputRendaMensalValor, divRendaMensalRendaMinuto, inputRendaMensalHoras, inputRendaMensalProjetos } from "../ui/ui_seletor_elementos.js"

// Eventos Click Update Renda Mensal
export function eventRendaMensalUpdate() {
    const rendaValor = inputRendaMensalValor.value
    const rendaDias = divRendaMensalRendaMinuto.value
    const rendaHoras = inputRendaMensalHoras.value
    const rendaProjetos = inputRendaMensalProjetos.value

    const addRenda = updateRendaMensal(rendaValor, rendaDias, rendaHoras, rendaProjetos)

    // Atualiza a interface
    updateInterfaceCalculosRenda()
}

// Função para atualizar e cadastrar as informações do formulario
export function updateRendaMensal(rendaValor, rendaDias, rendaHoras, rendaProjetos) {
    const addItem = NEWITEM.addRendaMensal(rendaValor, rendaDias, rendaHoras, rendaProjetos)
    return addItem
}

// Função das métricas com os ganhos por venda
export function updateInterfaceCalculosRenda() {
    divRendaMensalMediaProjeto.innerHTML = `VALOR MÉDIO: R$ ${NEWITEM.rendaMediaProjetos()}`
    divRendaMensalRendaMinuto.innerHTML = `RENDA MINUTO: R$ ${NEWITEM.rendaMediaMinuto()}`
    divRendaMensalRendaHora.innerHTML = `RENDA HORA: R$ ${NEWITEM.rendaMediaHora()}`
}