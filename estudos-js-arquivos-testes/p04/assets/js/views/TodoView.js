export const TodoElementos = {

    elementos: {
        bodyDocument: document,
        listaTodo: document.querySelector("#list-todo"),
        inputAddTodo: document.querySelector("#input-add-tarefa"),
        inputAddDescricao: document.querySelector("#input-add-descricao"),
        btnAddTodo: document.querySelector("#btn-add-tarefa"),
        btnEditarTodo: document.querySelector("#editar-item"),
        btnRemoverTodo: document.querySelector("#remover-item"),

        divTodo: document.querySelector("#todo"),

        //Expandir todo
        pItemTitle: document.querySelector("#item-title"),
        pDescricao: document.querySelector(".descricao"),

        spanTotalItens: document.querySelector("#itensCadastrados"),

        //Div para Alertas de Sucesso / Erro / Notificações
        divMsgSuccess: document.querySelector("#msg-alert"),
    },

    valueInput() {
        return {
            txtHedline: this.elementos.inputAddTodo.value,
            txtdescricao: this.elementos.inputAddDescricao.value
        }
    },

    htmlTodoItem(item) {

        this.elementos.listaTodo.innerHTML = ""
        const itemview = item.map((item) => {
            let fmtItem =
                `<div id="todo" class="row  p-1 p-sm-2 mt-2 border-bottom border-light-subtle">
                <div class="row m-0 p-0">
                    <div class="col-12 col-sm-8 p-2 m-0" title="${item.descricao}">
                        <p id="item-title" class="p-0 m-0  ">${item.id}. ${item.nome}</p>
                        <p class="py-2 m-0 d-none descricao border-top">${item.descricao}</p>
                    </div>
                    <div class="row col-sm-4 m-0 p-0">
                    <div class="col-6 m-0 p-0 ">
                        <div class="p-1 d-grid">
                        <button id="editar-item" value="${item.id}" class="btn btn-sm btn-outline-primary btn-primary disabled">Editar</button>
                        </div>
                    </div>
                    <div class="col-6 m-0 p-0">
                        <div class="p-1 d-grid">
                        <button id="remover-item" value="${item.id}" class="btn btn-sm btn-outline-danger">Apagar</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>`

            return fmtItem
        }).join('');

        this.elementos.listaTodo.innerHTML = itemview
    },

    limparInput() {
        this.elementos.inputAddTodo.value = ""
        this.elementos.inputAddDescricao.value = ""
    },

    focoInput() {
        return this.elementos.inputAddTodo.focus()
    },

    nenhumItemListado() {
        const fmt = `
            <div id="todo" class="row bg-light p-1 p-sm-2 mt-2 border border-secondary rounded-3 ">
                <p class="text-center p-0 m-0">Nenhum item cadastrado.</p>
            </div>`
        const nenhumCadastro = this.elementos.listaTodo.innerHTML = fmt
        return nenhumCadastro
    },

    expandirDescricao(elementoClicado) {
        const pDescricao = elementoClicado.nextElementSibling;
        if (pDescricao) {
            pDescricao.classList.toggle("d-none")
        }
    },

    itemLength(totalItens) {
        return this.elementos.spanTotalItens.innerHTML = totalItens
    },

    alertSuccess(menssage, color, time = 5000) {
        this.elementos.divMsgSuccess.classList.remove("d-none")
        this.elementos.divMsgSuccess.innerHTML = `<div id="alert" class="alert alert-${color}" role="alert">${menssage}</div>`

        setTimeout(() => {
            const alert = this.elementos.divMsgSuccess
            alert.classList.add("d-none")
        }, time)
    },
}
