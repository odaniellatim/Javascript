import { LocalStorage } from "../models/LocalStorage.js"
import { TodoModel } from "../models/TodoModel.js"
import { TodoElementos } from "../views/TodoView.js"
import { ElementosDOM } from "../interface/TodoView.js"
import { Task } from "../types/Task.js"

export class TodoController {
    todoModel: TodoModel
    view: ElementosDOM

    constructor() {
        this.todoModel = new TodoModel()
        this.view = TodoElementos
    }

    startApp() {
        const data: Task[] | [] = LocalStorage.carregarDados()

        if (data.length > 0) {
            data.forEach((item) => {
                const update = this.todoModel.cadatrar(item.nome, item.descricao)
                this.listarTodo(update)
            });
        }
        console.log("App iniciado")
        this.view.elementos.btnAddTodo.addEventListener("click", (e) => this.addTodo(e))
        this.view.elementos.bodyDocument.addEventListener("keydown", (e) => this.addTodo(e))
        this.view.elementos.listaTodo.addEventListener("click", (e) => this.removerTodo(e))
        this.view.elementos.listaTodo.addEventListener("click", (e) => this.mostrarDescricao(e))


        const totalItem = this.todoModel.totalItemTodo()
        if (totalItem <= 0) {
            this.view.nenhumItemListado()
            this.view.limparInput()
        }
        this.totalListaTodo()
    }

    totalListaTodo() {
        const total = this.todoModel.totalItemTodo()
        if (total <= 0) {
            this.view.nenhumItemListado()
        }
        this.view.itemLength(total)
    }

    addTodo(e) {
        const nomeTodo = this.view.valueInput()

        if (e.keyCode === 13 || e.target.id === "btn-add-tarefa") {
            // Validação para ver se os campos nao estão vazios e evitar
            if (nomeTodo.txtHedline === "" || nomeTodo.txtdescricao === "") {
                // Alerta de cadastro com sucesso
                this.view.alertSuccess(`Você precisa preencher os campos corretamente!`, "warning", 4000)
                return
            }

            // Verifica se os campos foram preenchidos com textos suficiente.
            if (nomeTodo.txtHedline.length < 3) {
                this.view.alertSuccess(`O campo da tarefa precisa ter no minimo 3 caracteres`, "danger", 4000)
                return
            } else if (nomeTodo.txtdescricao.length < 5) {
                this.view.alertSuccess(`O campo da descrição precisa ter no minimo 5 caracteres`, "danger", 4000)
                return
            }

            // Executa o processo de cadastro dos itens
            const additem = this.todoModel.cadatrar(nomeTodo.txtHedline, nomeTodo.txtdescricao)
            LocalStorage.salvar(additem)
            this.view.limparInput()
            this.view.focoInput()
            this.totalListaTodo()
            this.listarTodo(additem)

            // Alerta de cadastro com sucesso
            this.view.alertSuccess(`Item ${nomeTodo.txtHedline} adicionado com sucesso!`, "success", 3000)
        }
    }

    removerTodo(e) {
        if (e.target.id === "remover-item") {
            const btnRemover = e.target.value
            const listaAtual = this.todoModel.remover(btnRemover)
            this.listarTodo(listaAtual)
            this.totalListaTodo()
            LocalStorage.salvar(listaAtual)
            this.view.alertSuccess("Item removido com sucesso!", "success", 3000)
        }
    }

    listarTodo(item) {
        this.view.htmlTodoItem(item)
    }

    mostrarDescricao(e) {
        if (e.target.id === "item-title") {
            this.view.expandirDescricao(e.target)
        }
    }
}