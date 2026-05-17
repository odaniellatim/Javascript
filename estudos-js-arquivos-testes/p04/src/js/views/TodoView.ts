import { ElementosDOM } from "../interface/TodoView";
import { Task } from "../types/Task";

export const TodoElementos: ElementosDOM = {

    elementos: {
        bodyDocument: document.body,
        listaTodo: document.querySelector("#list-todo") as HTMLDivElement,
        inputAddTodo: document.querySelector("#input-add-tarefa") as HTMLInputElement,
        inputAddDescricao: document.querySelector("#input-add-descricao") as HTMLInputElement,
        btnAddTodo: document.querySelector("#btn-add-tarefa") as HTMLButtonElement,
        btnEditarTodo: document.querySelector("#editar-item") as HTMLButtonElement,
        btnRemoverTodo: document.querySelector("#remover-item") as HTMLButtonElement,

        divTodo: document.querySelector("#todo") as HTMLDivElement,

        //Expandir todo
        pItemTitle: document.querySelector("#item-title") as HTMLParagraphElement,
        pDescricao: document.querySelector(".descricao") as HTMLParagraphElement,

        spanTotalItens: document.querySelector("#itensCadastrados") as HTMLSpanElement,

        //Div para Alertas de Sucesso / Erro / Notificações
        divMsgSuccess: document.querySelector("#msg-alert") as HTMLDivElement,
    },

    valueInput(): { txtHedline: string, txtdescricao: string } {
        return {
            txtHedline: this.elementos.inputAddTodo.value,
            txtdescricao: this.elementos.inputAddDescricao.value
        }
    },

    htmlTodoItem(item: Task[]) {

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

    limparInput(): void {
        this.elementos.inputAddTodo.value = ""
        this.elementos.inputAddDescricao.value = ""
    },

    focoInput(): void {
        return this.elementos.inputAddTodo.focus()
    },

    nenhumItemListado(): string {
        const fmt = `
            <div id="todo" class="row bg-light p-1 p-sm-2 mt-2 border border-secondary rounded-3 ">
                <p class="text-center p-0 m-0">Nenhum item cadastrado.</p>
            </div>`
        const nenhumCadastro = this.elementos.listaTodo.innerHTML = fmt
        return nenhumCadastro
    },

    expandirDescricao(elementoClicado: HTMLElement): void {
        const pDescricao = elementoClicado.nextElementSibling;
        if (pDescricao) {
            pDescricao.classList.toggle("d-none")
        }
    },

    itemLength(totalItens: number): string {
        return this.elementos.spanTotalItens.innerHTML = totalItens.toString()
    },

    alertSuccess(menssage: string, color: string, time: number = 5000): void {
        this.elementos.divMsgSuccess.classList.remove("d-none")
        this.elementos.divMsgSuccess.innerHTML = `<div id="alert" class="alert alert-${color}" role="alert">${menssage}</div>`

        setTimeout(() => {
            const alert = this.elementos.divMsgSuccess
            alert.classList.add("d-none")
        }, time)
    },
}
