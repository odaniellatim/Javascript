import { Local_storage } from "../../class/localstorage.js"
import { addCustoFixo, realoadInterface } from "../../functions/functions_custo_fixo.js"
import { updateRendaMensal, updateInterfaceCalculosRenda } from "../../functions/functions_renda_mensal.js"

export function loadItemsLocaStorageCustoFixo(nameLocalStorage, bdGlobal) {

    const loadDataLocalStorage = Local_storage.lerLocalStorage(nameLocalStorage) // Carregar dados localstorage

    // Se não tiver dados no Localstorage cancela a verificação
    if (loadDataLocalStorage === null) return Local_storage.saveLocalStorage(nameLocalStorage, bdGlobal)

    if (nameLocalStorage === "custo_fixo") {
        loadDataLocalStorage.map((value) => {
            addCustoFixo(value.nome, value.valor, value.status, value.durabilidade)
        })
    } else if (nameLocalStorage === "renda_mensal") {
        loadDataLocalStorage.map((value) => {
            updateRendaMensal(value.renda_mensal_valor, value.renda_mensal_dias, value.renda_mensal_horas, value.renda_mensal_projetos)

        })

    }

    //Atualiza os elementos da tela
    realoadInterface()
    updateInterfaceCalculosRenda()


}