import { addItemsTabelaCustoFixo, tbodyCustoFixo, addCustoFixo, inputNomeCustoFixo, inputValorCustoFixo, inputStatusCustoFixo, inputDurabilidadeCustoFixo, resetarInputCadastroCustoFixo, removerCustoFixoTabela, btnAddCustoFixo, loadItemsLocaStorageCustoFixo, Local_storage, BD_GERAL_SYSTEM, totalItemCustoFixo, totalMedia, realoadInterface } from "./content/app.js"

loadItemsLocaStorageCustoFixo("custo_fixo")

btnAddCustoFixo.addEventListener("click", () => {

    // Cadastro do Custo Fixo
    addCustoFixo(inputNomeCustoFixo.value, inputValorCustoFixo.value, inputStatusCustoFixo.value, inputDurabilidadeCustoFixo.value)

    //Atualiza os elementos da tela
    realoadInterface()

    // Reseta os campos do formulario
    resetarInputCadastroCustoFixo()

    // Atualiza o banco de dados com o novo cadastro
    Local_storage.saveLocalStorage("custo_fixo", BD_GERAL_SYSTEM)
})

// Click no link para remover o item cadastrado (Removendo da classe e da tela do usuario)
tbodyCustoFixo.addEventListener("click", (e) => {

    // Ativa as funções somente se clicar no link
    if (e.target.tagName === "BUTTON") {
        const db = removerCustoFixoTabela(e.target.id)

        //Atualiza os elementos da tela
        realoadInterface()

        console.log("EXCLUIDOS", db)
    }


})

