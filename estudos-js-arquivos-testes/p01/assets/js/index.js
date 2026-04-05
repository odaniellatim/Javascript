import { addCustoFixo, totalMedia, resetarInputCadastroCustoFixo, inputNomeCustoFixo, inputValorCustoFixo, inputStatusCustoFixo, inputDurabilidadeCustoFixo, addItemsTabela, tbodyCustoFixo, removerCustoFixoTabela, DATA, DATA_CUSTO_FIXO } from "./functions/functions.js"

// Verifica se tem itens salvos na variavel DATA_CUSTO_FIXO
addItemsTabela()

//Adiciona os items custo fixo cadastrado na variavel global
DATA()

// Seleção do Botão de cadastro
const btnAddCustoFixo = document.querySelector("#cadastrar-custo-fixo")

btnAddCustoFixo.addEventListener("click", () => {

    const item = addCustoFixo(inputNomeCustoFixo.value, inputValorCustoFixo.value, inputStatusCustoFixo.value, inputDurabilidadeCustoFixo.value)

    // Funcao para listar os valores na tela do usuario (Media | Total)
    totalMedia()

    // Limpar Campos do cadastro
    resetarInputCadastroCustoFixo()

    // Lista as informações na tela do usuario (Tabela com a lista de items)
    addItemsTabela()

    // Chama a função data para atualizar as informações na tela usando a variavel global
    DATA()

})

// Click no link para remover o item cadastrado (Removendo da classe e da tela do usuario)
tbodyCustoFixo.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        removerCustoFixoTabela(e.target.id)
        addItemsTabela()
        DATA()
    }
    addItemsTabela()
})

