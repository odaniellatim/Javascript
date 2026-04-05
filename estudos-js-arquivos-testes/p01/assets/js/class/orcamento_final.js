import { Custo_fixo } from "./custo_fixo.js"

export class Orcamento_final {

    constructor() {
        this.custoFixo = []
    }

    addCustoFixo(nome, valor, status, durabilidade) {
        const newItem = new Custo_fixo((this.custoFixo.length + 1), nome, valor, status, durabilidade)
        this.custoFixo.push(newItem)
        return newItem
    }

    valorTotalCustoFixo() {
        const valorTotal = this.custoFixo.reduce((start, current) => { return start += current.valor }, 0)
        return valorTotal
    }

    valorMedioMensalCustoFixo() {
        const totalItens = (this.custoFixo.length === 0) ? 1 : this.custoFixo.length
        const valorMedioMensal = this.custoFixo.reduce((start, current) => { return start += current.valor }, 0)
        return (valorMedioMensal / totalItens)
    }

    removerCustoFixo(id) {
        if (this.custoFixo.length <= 0) {
            console.log("Nenhum item disponivel para remover.")
        }
        const newDATA = this.custoFixo.filter(value => value.id !== Number(id))
        this.custoFixo = newDATA
        return this.custoFixo
    }

    getObjCustoFixo() {
        return this.custoFixo
    }


}