import { BD_GERAL_SYSTEM, Local_storage, addCustoFixo, realoadInterface } from "../../app.js"

export function loadItemsLocaStorageCustoFixo(data_type) {


    const loadDataLocalStorage = Local_storage.lerLocalStorage(data_type) // Carregar dados localstorage
    // console.log("LOAD: ", loadDataLocalStorage)

    // Se não tiver dados no Localstorage cancela a verificação
    if (loadDataLocalStorage === null) return Local_storage.saveLocalStorage("custo_fixo", BD_GERAL_SYSTEM)

    loadDataLocalStorage.map((value) => {
        addCustoFixo(value.nome, value.valor, value.status, value.durabilidade)
    })

    //Atualiza os elementos da tela
    realoadInterface()
}