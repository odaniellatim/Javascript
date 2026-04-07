import { Orcamento_final, tbodyCustoFixo, spanTotalItensCadastradosCustoFixo, pValorTotalCustoFixo, pValorMedioCustoFixo, inputNomeCustoFixo, inputValorCustoFixo, inputStatusCustoFixo, inputDurabilidadeCustoFixo, Local_storage, BD_GERAL_SYSTEM, loadItemsLocaStorageCustoFixo } from "../app.js"

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
export function addItemsTabelaCustoFixo() {
    // 1. Limpa o conteúdo atual da tabela antes de renderizar
    tbodyCustoFixo.innerHTML = "";

    if (BD_GERAL_SYSTEM.length <= 0) {
        const tr = addTrTabela(); // Cria uma nova linha para CADA item do array
        tr.innerHTML = `               
            <td colspan="5" class="text-center">Nenhum item cadastrado.</td>
        `;
        tbodyCustoFixo.appendChild(tr);
    } else {

        BD_GERAL_SYSTEM.forEach(item => {
            const tr = addTrTabela(item.id); // Cria uma nova linha para CADA item do array
            tr.innerHTML = `    
            <th>${item.nome}</th>
            <td>R$ ${item.valor}</td>
            <td>${item.status}</td>
            <td class="d-none d-md-table-cell">${item.durabilidade}</td>
            <td><button id="${Number(item.id)}" class="btn btn-link" title="${item.nome}-${item.id}">Remover</a></td>
        `;
            // Adiciona a TR preenchida dentro do corpo da tabela
            tbodyCustoFixo.appendChild(tr);
        });
    }

    // console.log("BD_GERAL: ", BD_GERAL_SYSTEM)
}

// Remover item da lista de custo fixo
export function removerCustoFixoTabela(id) {
    const elementoRemovido = NEWITEM.removerCustoFixo(id)
    // Verifica se tem itens salvos na variavel DATA_CUSTO_FIXO
    addItemsTabelaCustoFixo()
    return elementoRemovido
}

// Puxa da classe o objeto completo com as informações do custo fixo
// Essa função aperfeiçoar usando o localstorage
export function totalItemCustoFixo() {
    spanTotalItensCadastradosCustoFixo.innerHTML = NEWITEM.custoFixoLength()
}

// Recarrega a interface com os elementos atualizados do banco de dados global
export function realoadInterface() {
    // Lista os itens totais cadastrados
    totalItemCustoFixo()

    // Verifica se tem itens salvos na variavel DATA_CUSTO_FIXO
    addItemsTabelaCustoFixo()

    // Funcao para listar os valores na tela do usuario (Media | Total)
    totalMedia()
}