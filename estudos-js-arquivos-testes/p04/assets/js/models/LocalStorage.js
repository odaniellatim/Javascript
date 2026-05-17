export class LocalStorage {

    static salvar(lista) {
        const json = JSON.stringify(lista)
        localStorage.setItem("todo", json)
        console.log("Dados salvo com sucesso!")
    }

    static carregarDados() {
        const lista = localStorage.getItem("todo")
        const obj = JSON.parse(lista)
        return obj
    }
}