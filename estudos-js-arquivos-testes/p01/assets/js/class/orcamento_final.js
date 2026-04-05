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


}