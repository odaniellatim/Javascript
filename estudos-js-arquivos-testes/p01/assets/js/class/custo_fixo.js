import { Lista_items } from "./lista_items.js"

export class Custo_fixo extends Lista_items {

    constructor(id, nome, valor, status, durabilidade) {
        super(id, nome)
        this._valor = valor
        this._status = status
        this.durabilidade = durabilidade
    }

    get valor() {
        return this._valor
    }

    get status() {
        return this._status
    }

    custo_fixo_total_dias() {
        return this.durabilidade * 30
    }


    get_json() {
        return {
            "id": this.id,
            "nome": this.nome,
            "valor": this.valor,
            "status": this.status,
            "durabilidade": this.durabilidade,
        }
    }
}
