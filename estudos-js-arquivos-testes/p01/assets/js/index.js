import { addCustoFixo, totalMedia, resetarInputCadastroCustoFixo, inputNomeCustoFixo, inputValorCustoFixo, inputStatusCustoFixo, inputDurabilidadeCustoFixo, tbodyCustoFixo } from "./functions/functions.js"

// Seleção do Botão de cadastro
const btnAddCustoFixo = document.querySelector("#cadastrar-custo-fixo")

// Variavel que vai armazenar todos os valores do objeto Custo Fixo
let DATA_CUSTO_FIXO = [
    // { "id": 1, "nome": "a", "valor": 1, "status": "pendente", "durabilidade": 1 },
    // { "id": 1, "nome": "a", "valor": 1, "status": "pendente", "durabilidade": 1 },
    // { "id": 1, "nome": "a", "valor": 1, "status": "pendente", "durabilidade": 1 },
    // { "id": 1, "nome": "a", "valor": 1, "status": "pendente", "durabilidade": 1 },
    // { "id": 1, "nome": "a", "valor": 1, "status": "pendente", "durabilidade": 1 },
    // { "id": 1, "nome": "a", "valor": 1, "status": "pendente", "durabilidade": 1 },
    // { "id": 1, "nome": "a", "valor": 1, "status": "pendente", "durabilidade": 1 },
    // { "id": 1, "nome": "a", "valor": 1, "status": "pendente", "durabilidade": 1 },
]

btnAddCustoFixo.addEventListener("click", () => {

    const item = addCustoFixo(inputNomeCustoFixo.value, inputValorCustoFixo.value, inputStatusCustoFixo.value, inputDurabilidadeCustoFixo.value)

    DATA_CUSTO_FIXO.push(item.get_json())
    console.log(DATA_CUSTO_FIXO)

    // Funcao para listar os valores na tela do usuario (Media | Total)
    totalMedia()

    // Limpar Campos do cadastro
    resetarInputCadastroCustoFixo()

    addItemsTabela(DATA_CUSTO_FIXO)


})

function addTrTabela() {
    const elementoTr = document.createElement("tr")
    return elementoTr
}

addItemsTabela(DATA_CUSTO_FIXO)

function addItemsTabela(data) {
    if (data <= 0) {
        const tr = addTrTabela(); // Cria uma nova linha para CADA item do array
        tr.innerHTML = `    
           
            <td colspan="5" class="text-center">Nenhum item cadastrado.</td>
        `;
        tbodyCustoFixo.appendChild(tr);
    } else {
        data.forEach(item => {
            const tr = addTrTabela(); // Cria uma nova linha para CADA item do array

            tr.innerHTML = `    
            <th>${item.nome}</th>
            <td>R$ ${item.valor}</td>
            <td>${item.status}</td>
            <td class="d-none d-md-table-cell">${item.durabilidade}</td>
            <td><a href="#">Editar</a></td>
        `;

            // Adiciona a TR preenchida dentro do corpo da tabela
            tbodyCustoFixo.appendChild(tr);
        });
    }
}

