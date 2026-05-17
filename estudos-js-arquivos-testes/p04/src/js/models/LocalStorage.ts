import { Task } from "../types/Task"

export class LocalStorage {

    static salvar(lista: Task): void {
        const json = JSON.stringify(lista)
        localStorage.setItem("todo", json)
        console.log("Dados salvo com sucesso!")
    }

    static carregarDados(): Task[] {
        let lista = localStorage.getItem("todo")
        if (!lista) return [];

        const data = JSON.parse(lista)
        let obj = Array.isArray(data) ? (data) : [data]
        return obj
    }
}