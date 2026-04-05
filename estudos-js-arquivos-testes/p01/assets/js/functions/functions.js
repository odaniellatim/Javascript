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
const spanTotalItensCadastradosCustoFixo = document.querySelector("#total-itens-custo-fixo")

// instacia da classe Orçamento Final com acesso aos métodos de outras classes
const newItem = new Orcamento_final()

// Variavel que vai armazenar todos os valores do objeto Custo Fixo
export let DATA_CUSTO_FIXO = [
    // { "id": 1, "nome": "a", "valor": 1, "status": "pendente", "durabilidade": 1 },
    // { "id": 1, "nome": "b", "valor": 1, "status": "pendente", "durabilidade": 1 },
    // { "id": 1, "nome": "c", "valor": 1, "status": "pendente", "durabilidade": 1 },
    // { "id": 1, "nome": "d", "valor": 1, "status": "pendente", "durabilidade": 1 },
    // { "id": 1, "nome": "e", "valor": 1, "status": "pendente", "durabilidade": 1 },
    // { "id": 1, "nome": "f", "valor": 1, "status": "pendente", "durabilidade": 1 },
    // { "id": 1, "nome": "g", "valor": 1, "status": "pendente", "durabilidade": 1 },
    // { "id": 1, "nome": "h", "valor": 1, "status": "pendente", "durabilidade": 1 },
]

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
export function addItemsTabela() {
    // 1. Limpa o conteúdo atual da tabela antes de renderizar
    tbodyCustoFixo.innerHTML = "";

    if (DATA_CUSTO_FIXO.length <= 0) {
        const tr = addTrTabela(); // Cria uma nova linha para CADA item do array
        tr.innerHTML = `               
            <td colspan="5" class="text-center">Nenhum item cadastrado.</td>
        `;
        tbodyCustoFixo.appendChild(tr);
    } else {
        DATA_CUSTO_FIXO.forEach(item => {
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
}

// Remover item da lista de custo fixo
export function removerCustoFixoTabela(id) {
    const elementoRemovido = newItem.removerCustoFixo(id)
    addItemsTabela()
    totalMedia()
    return elementoRemovido
}

// Puxa da classe o objeto completo com as informações do custo fixo
// Essa função aperfeiçoar usando o localstorage
export function DATA() {
    DATA_CUSTO_FIXO = newItem.getObjCustoFixo()
    spanTotalItensCadastradosCustoFixo.innerHTML = DATA_CUSTO_FIXO.length;
    return DATA_CUSTO_FIXO
}


