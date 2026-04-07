export class Lista_items {
    constructor(id, nome) {
        this.id = id
        this._nome = nome
    }

    get nome() {
        return this._nome
    }
}