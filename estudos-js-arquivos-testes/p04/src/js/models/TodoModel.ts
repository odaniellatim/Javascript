import { Task } from "../types/Task"

export class TodoModel {
    todo: Task[]
    id: number

    constructor() {
        this.todo = []
        this.id = 1
    }

    totalItemTodo(): number {
        return this.todo.length
    }

    cadatrar(nome: string, descricao: string): Task[] {
        const novoItem = {
            id: this.id++,
            nome: nome,
            descricao: descricao
        }
        this.todo.push(novoItem)
        return this.todo
    }

    remover(id: number) {
        const listaAtualizada = this.todo.filter((todo) => todo.id != id)
        this.todo = listaAtualizada
        return this.todo
    }
}