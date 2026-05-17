export class TodoModel {
    constructor() {
        this.todo = []
        this.id = 1
    }

    totalItemTodo() {
        return this.todo.length
    }

    cadatrar(nome, descricao) {
        const novoItem = {
            id: this.id++,
            nome: nome,
            descricao: descricao
        }
        this.todo.push(novoItem)
        return this.todo
    }

    remover(id) {
        const listaAtualizada = this.todo.filter((todo) => todo.id != id)
        this.todo = listaAtualizada
        return this.todo
    }


}