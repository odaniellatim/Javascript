//Global
import { BD_GERAL_SYSTEM } from "../bd/bd_global.js"

// Classes
import { Orcamento_final } from "../class/orcamento_final.js"
import { Local_storage } from "../class/localstorage.js"

// Seletores
import { tbodyCustoFixo, inputNomeCustoFixo, inputValorCustoFixo, inputStatusCustoFixo, inputDurabilidadeCustoFixo, spanTotalItensCadastradosCustoFixo, pValorTotalCustoFixo, pValorMedioCustoFixo, inputSearchCustoFixo, divAtualizarCustoFixo, divListarCustoFixo, inputUpdateNomeCustoFixo, inputUpdateValorCustoFixo, inputUpdateStatusCustoFixo, inputUpdateDurabilidadeCustoFixo, inputUpdateIdHidden } from "../ui/ui_seletor_elementos.js"


// Variaveis globais
//--------------------------------------------------------------------------------------------------------------

// instacia da classe Orçamento Final com acesso aos métodos de outras classes
export const NEWITEM = new Orcamento_final() // Instancia da classe que gerencia o objeto custo fixo
export const LC = new Local_storage() // Instancia da classe para salvar os dados no LocalStorage



// Adicionando novos custo fixo usando classe e funcao construtora
export function addCustoFixo(nome, valor, status, durabilidade) {
    const addItem = NEWITEM.addCustoFixo(nome, Number(valor), status, Number(durabilidade))
    return addItem
}

// Lista e adiciona o valor médio e total do custo fixo na tela do usuario
export function totalMedia() {
    const valorTotal = NEWITEM.valorTotalCustoFixo()
    const valorMedioMensal = NEWITEM.valorMedioMensalCustoFixo()
    pValorTotalCustoFixo.innerHTML = "TOTAL INVESTIMENTO: R$ " + valorTotal
    pValorMedioCustoFixo.innerHTML = "VALOR PROJETO/VENDA R$ " + valorMedioMensal.toFixed(2)
}

// Reseta | Limpar os campos do formulario
export function resetarInputCadastroCustoFixo() {
    inputNomeCustoFixo.value = ""
    inputValorCustoFixo.value = ""
    inputStatusCustoFixo.value = ""
    inputDurabilidadeCustoFixo.value = ""
}

// Cria o elemento TR com o id do item na tabela
export function addTrTabela(id) {
    const elementoTr = document.createElement("tr")
    elementoTr.id = id
    return elementoTr
}

// Cria o item na tabela com os elementos necessarios
export function addItemsTabelaCustoFixo(BD_GLOBAL = null) {
    // 1. Limpa o conteúdo atual da tabela antes de renderizar
    tbodyCustoFixo.innerHTML = "";

    if (BD_GLOBAL === null) {
        BD_GLOBAL = BD_GERAL_SYSTEM
    }

    if (BD_GLOBAL.length <= 0) {
        const tr = addTrTabela(); // Cria uma nova linha para CADA item do array
        tr.innerHTML = `               
            <td colspan="5" class="text-center">Nenhum item cadastrado.</td>
        `;
        tbodyCustoFixo.appendChild(tr);
    } else {

        BD_GLOBAL.forEach(item => {
            const tr = addTrTabela(item.id); // Cria uma nova linha para CADA item do array
            tr.innerHTML = `    
            <th>${item.nome}</th>
            <td>R$ ${item.valor}</td>
            <td>${item.status}</td>
            <td class="d-none d-md-table-cell">${item.durabilidade}</td>
            <td>
            <button id="${Number(item.id)}" value="remover" class="btn btn-link" title="${item.nome}-${item.id}">Remover</a>
            <button id="${Number(item.id)}" value="atualizar" class="btn btn-link" title="${item.nome}-${item.id}" >Atualizar</a>
            </td>
        `;
            // Adiciona a TR preenchida dentro do corpo da tabela
            tbodyCustoFixo.appendChild(tr);
        });
    }
}

// Remover item da lista de custo fixo
export function removerCustoFixoTabela(id) {
    const elementoRemovido = NEWITEM.removerCustoFixo(id)
    // Verifica se tem itens salvos na variavel DATA_CUSTO_FIXO
    addItemsTabelaCustoFixo()
    return elementoRemovido
}

// Remover item da lista de custo fixo
export function atualizarCustoFixo(id, newNome, newValor, newStatus, newDurabilidade) {
    const elementoRemovido = NEWITEM.atualizarDadosCustoFixo(id, newNome, newValor, newStatus, newDurabilidade)
    // Verifica se tem itens salvos na variavel DATA_CUSTO_FIXO
    addItemsTabelaCustoFixo()
    return elementoRemovido
}

// Puxa da classe o objeto completo com as informações do custo fixo
// Essa função aperfeiçoar usando o localstorage
export function totalItemCustoFixo() {
    spanTotalItensCadastradosCustoFixo.innerHTML = NEWITEM.custoFixoLength()
}

// Pesquisa de itens Custo Fixo usando nome do item como busca
export function searchCustoFixoTabela(title) {

    let search = BD_GERAL_SYSTEM.filter((value) => value.nome.toLowerCase() === title.toLowerCase())
    if (!search.length > 0) {
        search = BD_GERAL_SYSTEM
    }
    realoadInterface(search)
}

// Recarrega a interface com os elementos atualizados do banco de dados global
export function realoadInterface(search = null) {
    // Lista os itens totais cadastrados
    totalItemCustoFixo()

    // Verifica se tem itens salvos na variavel DATA_CUSTO_FIXO
    addItemsTabelaCustoFixo(search)

    // Funcao para listar os valores na tela do usuario (Media | Total)
    totalMedia()
}

// Função usada para ativar a busca dos custos fixos
export function inputSearchCustoFixoFn(e) {

    realoadInterface()
    searchCustoFixoTabela(inputSearchCustoFixo.value)
    inputSearchCustoFixo.value = ""
    inputSearchCustoFixo.focus()
}

// Função que ativa o evento de click no botão do formulario para add novos custos fixos.
export function btnAddCustoFixoFn(e) {
    // Cadastro do Custo Fixo
    addCustoFixo(inputNomeCustoFixo.value, inputValorCustoFixo.value, inputStatusCustoFixo.value, inputDurabilidadeCustoFixo.value)

    //Atualiza os elementos da tela
    realoadInterface()

    // Reseta os campos do formulario
    resetarInputCadastroCustoFixo()

    // Atualiza o banco de dados com o novo cadastro
    Local_storage.saveLocalStorage("custo_fixo", BD_GERAL_SYSTEM)
}


// Função que ativa o evento de click no link para remover o custo fixo cadastrado
export function tbodyCustoFixoFn(e) {
    // Ativa as funções somente se clicar no link de remover
    if (e.target.value === "remover") {
        const db = removerCustoFixoTabela(e.target.id)

        //Atualiza os elementos da tela
        realoadInterface()
    }

    // Ativa as funções somente se clicar no link de atualizar
    if (e.target.value === "atualizar") {
        //Utiliza o mesmo form para atualizar alterando algumas propriedade para funcionar
        divListarCustoFixo.classList.add("d-none")
        divAtualizarCustoFixo.classList.remove("d-none")

        updateCustoFixoFn(e.target.id)

        //Atualiza os elementos da tela
        realoadInterface()

    }

    // Ativa as funções somente se clicar no link de atualizar
    if (e.target.id === "btn-atualizar-custo-fixo") {

        const idCustoFixo = inputUpdateIdHidden.value
        //Utiliza o mesmo form para atualizar alterando algumas propriedade para funcionar
        updateDataNovosDados(idCustoFixo)

    }


}

// Atualiza os campos do formulario com as informações referente ao id 
export function updateCustoFixoFn(idCustoFixoUpdate) {
    // Atualiza os campos do input com o valor atual
    let itemAtualizar = BD_GERAL_SYSTEM.map((value) => {
        if (Number(value.id) === Number(idCustoFixoUpdate)) {
            inputUpdateIdHidden.value = value.id
            inputUpdateNomeCustoFixo.value = value.nome
            inputUpdateValorCustoFixo.value = value.valor
            inputUpdateStatusCustoFixo.value = value.status
            inputUpdateDurabilidadeCustoFixo.value = value.durabilidade
        }
    })
}

export function updateDataNovosDados(idCustoFixoUpdate) {
    // Envia os valores para a classe Custo Fixo Atualizar os dados.

    // Recebe os novos valores para atualizar no banco e remover o item desatualizado
    const newNome = inputUpdateNomeCustoFixo.value
    const newValor = inputUpdateValorCustoFixo.value
    const newStatus = inputUpdateStatusCustoFixo.value
    const newDurabilidade = inputUpdateDurabilidadeCustoFixo.value
    const db = atualizarCustoFixo(idCustoFixoUpdate, newNome, newValor, newStatus, newDurabilidade)

    //Utiliza o mesmo form para atualizar alterando algumas propriedade para funcionar
    divListarCustoFixo.classList.remove("d-none")
    divAtualizarCustoFixo.classList.add("d-none")

    realoadInterface()
    //console.log(idCustoFixoUpdate, newNome, newValor, newStatus, newDurabilidade)
}