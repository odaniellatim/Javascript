const inputNomeMolde = document.querySelector("#input-nome-molde");
const inputQntBorracha = document.querySelector("#input-qnt-borracha");


const divTableinfoItems = document.querySelector("container__main__table__info-items");
const btnCadastrarItem = document.querySelector("#btn-cadastrar-item");
const table = document.querySelector(".result-items-info");

const searchMolde = document.querySelector("#pesquisar-molde");

//Variavel que contrala os ID dos items
let id;

//Banco de Dados do Sistema
let itemsCadastrados = [
    // { id: 1, nomeMolde: 'Coracao', qntBorracha: 35, qntCatalisador: 1.05 },
    // { id: 2, nomeMolde: 'Estrela', qntBorracha: 60, qntCatalisador: 1.75 },
    // { id: 3, nomeMolde: 'Letra R', qntBorracha: 55, qntCatalisador: 1.25 },
    // { id: 4, nomeMolde: 'Letra A', qntBorracha: 45, qntCatalisador: 0.75 },
    // { id: 5, nomeMolde: 'Xicara', qntBorracha: 75, qntCatalisador: 2.0 },
    // { id: 6, nomeMolde: 'Letra F', qntBorracha: 55, qntCatalisador: 1.25 },
    // { id: 7, nomeMolde: 'Letra G', qntBorracha: 45, qntCatalisador: 0.75 },
    // { id: 8, nomeMolde: 'Letra H', qntBorracha: 55, qntCatalisador: 1.25 },
    // { id: 9, nomeMolde: 'Letra W', qntBorracha: 45, qntCatalisador: 0.75 },
];

// Cria div Info Items Cadastrados
function criarDivDescricao() {
    const divDescricao = document.createElement("div")
    divDescricao.classList.add("container__main__table__info-items");

    return divDescricao
}

function resetInput() {
    inputNomeMolde.value = "";
    inputQntBorracha.value = ""
}

function focusInput() {
    inputNomeMolde.focus();
}

function addItemObj(obj) {
    return itemsCadastrados.push(obj);

}

function formulaBorracha() {

    const nomeMolde = inputNomeMolde.value;
    const qntBorracha = parseFloat(inputQntBorracha.value);

    const qntCatalisador = (qntBorracha * 3) / 100;
    qntCatalisador.toFixed(2);

    // id = Math.max(...itemsCadastrados.map(item => item.id)) + 1;

    const obj = { id, nomeMolde, qntBorracha, qntCatalisador };

    id++;

    return obj;
}

function paramItems(newDiv, varFor) {

    newDiv.innerHTML = `
            <div class="container__main__table__info-items__descricao">
                ${varFor.nomeMolde}
            </div>
            <div class="container__main__table__info-items__qnt-borracha">
            ${varFor.qntBorracha} ml
            </div>
            <div class="container__main__table__info-items__qnt-catalisador">
            ${varFor.qntCatalisador} ml
            </div>
            <div class="container__main__table__info-items__actions">
                <button class="btnEditar" data-acao="editar" data-id="${varFor.id}"></button>
                <button class="btnDeleta" data-acao="deletar" data-id="${varFor.id}"></button>
            </div>
        `;

    table.append(newDiv)

}

function listarItemsCadastrado(objItems) {
    table.innerHTML = '';
    for (let info of objItems) {

        const InfoItems = criarDivDescricao();

        paramItems(InfoItems, info);
    };

}

let itemId = null;

btnCadastrarItem.addEventListener("click", () => {

    if (itemId !== null) {
        const idParaAtualizar = itemId;
        const novosDados = formulaBorracha();

        const index = itemsCadastrados.findIndex(item => item.id === itemId);

        if (index > -1) {
            itemsCadastrados[index] = {
                id: idParaAtualizar,
                nomeMolde: novosDados.nomeMolde,
                qntBorracha: novosDados.qntBorracha,
                qntCatalisador: novosDados.qntCatalisador,
            };
        }

        itemId = null;
        btnCadastrarItem.textContent = "Cadastrar Item";
        popUpCadastro.style.display = 'none';

        listarItemsCadastrado(itemsCadastrados);

        storageSet();

    } else {
        const obj = formulaBorracha();
        addItemObj(obj)
        listarItemsCadastrado(itemsCadastrados);

        resetInput();
        focusInput();
        storageSet();
    }
});

// Função que faz o campo de busca funcionar
function itemsBusca(itemBusca) {
    table.innerHTML = '';
    const search = itemsCadastrados.filter((elemento) => {
        if (elemento.nomeMolde.indexOf(itemBusca) !== -1) {
            const InfoItems = criarDivDescricao();
            paramItems(InfoItems, elemento);
        }
    });
    return search;
}

// Evento que gerancia o Campo de Busca
searchMolde.addEventListener("keyup", (e) => {
    itemSearch = e.target.value;

    if (itemSearch) {
        itemsBusca(itemSearch)
    } else {
        listarItemsCadastrado(itemsCadastrados);
    }
});



document.addEventListener('DOMContentLoaded', () => {
    // Evento que gerencia o botão de Excluir item da lista
    document.addEventListener("click", (e) => {

        const btnRemover = e.target.closest('[data-acao="deletar"]');
        if (!btnRemover) {
            return;
        } else {
            const idItem = parseInt(btnRemover.dataset.id);
            itemsCadastrados = itemsCadastrados.filter(item => item.id !== idItem);
            listarItemsCadastrado(itemsCadastrados);
            storageSet();
        }
    });


    // Evento que gerencia o botão de Editar
    document.addEventListener("click", (e) => {
        const btnEditar = e.target.closest('[data-acao="editar"]');
        if (!btnEditar) {
            return;
        } else {
            itemId = parseInt(btnEditar.dataset.id);
            popUpCadastro.style.display = 'block';

            const itemEditar = itemsCadastrados.find(item => item.id === itemId);

            inputNomeMolde.value = `${itemEditar.nomeMolde}`
            inputQntBorracha.value = `${itemEditar.qntBorracha}`
            btnCadastrarItem.textContent = "Salvar Alterações";
        }
    });
});


function storageSet() {
    localStorage.clear();
    const json = JSON.stringify(itemsCadastrados)
    localStorage.setItem("config", json);
}

function storageGet() {

    const getConfig = localStorage.getItem('config');

    if (getConfig) {
        const json = JSON.parse(getConfig);
        itemsCadastrados = json;

        if (itemsCadastrados.length > 0) {
            id = Math.max(...itemsCadastrados.map(item => item.id)) + 1;
        } else {
            id = 1;
        }
    } else {
        itemsCadastrados = [];
        id = 1;
    }
}


function init() {
    storageGet(); // 1. Carrega os dados (e atualiza a variável global 'id')

    // 2. Verifica e lista APÓS o carregamento
    if (itemsCadastrados.length > 0) {
        listarItemsCadastrado(itemsCadastrados);
    } else {

        //Verifica se existe items no Array e lista na tela.
        //Se não tiver nenhum item apresenta uma mensagem.
        const spanNotFound = document.createElement("span");
        spanNotFound.classList.add("container__main__table__info-items__item-found");
        spanNotFound.innerText = "nenhum Item Cadastrado!"
        table.after(spanNotFound); // Você pode precisar mudar o append aqui dependendo da sua estrutura
    }
}

init()