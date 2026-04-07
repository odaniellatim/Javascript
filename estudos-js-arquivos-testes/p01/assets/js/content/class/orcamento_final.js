import { BD_GERAL_SYSTEM, setBD_GERAL_SYSTEM } from "../bd/bd_global.js"
import { Custo_fixo } from "./custo_fixo.js"
import { Local_storage } from "./localstorage.js"

export class Orcamento_final {

    constructor() {
        this._custoFixo = []
    }

    get custoFixo() {
        return this._custoFixo
    }

    set custoFixo(arrCustoFixo) {
        return this._custoFixo = arrCustoFixo
    }

    custoFixoLength() {
        return this.custoFixo.length
    }

    addCustoFixo(nome, valor, status, durabilidade) {
        const newItem = new Custo_fixo((this.custoFixo.length + 1), nome, valor, status, durabilidade)
        this.custoFixo.push(newItem.getJsonCustoFixo())
        setBD_GERAL_SYSTEM(this.custoFixo)
    }

    valorTotalCustoFixo() {
        const valorTotal = this.custoFixo.reduce((start, current) => { return start += current.valor }, 0)
        return valorTotal
    }

    valorMedioMensalCustoFixo() {
        const totalItens = (this.custoFixo.length === 0) ? 1 : this.custoFixo.length
        const valorMedioMensal = this.custoFixo.reduce((start, current) => { return start += current.valor }, 0)
        return (valorMedioMensal / totalItens) / 20 // quantidade de projetos planejado
    }

    removerCustoFixo(id) {
        if (this.custoFixo.length <= 0) {
            console.log("Nenhum item disponivel para remover.")
        }
        const newDATA = this.custoFixo.filter(value => Number(value.id) !== Number(id))
        this.custoFixo = newDATA
        setBD_GERAL_SYSTEM(this.custoFixo)
        Local_storage.saveLocalStorage("custo_fixo", this.custoFixo)

        return this.custoFixo
    }

    atualizarDadosCustoFixo(id, newNome, newValor, newStatus, newDurabilidade) {
        console.log(id, newNome, newValor, newStatus, newDurabilidade)

        const updateCF = BD_GERAL_SYSTEM.filter((value) => value.id !== Number(id))
        this.custoFixo = updateCF
        this.custoFixo.push({
            id: Number(id),
            nome: newNome,
            valor: Number(newValor),
            status: newStatus,
            durabilidade: Number(newDurabilidade),
        })
        setBD_GERAL_SYSTEM(this.custoFixo)
        Local_storage.saveLocalStorage("custo_fixo", this.custoFixo)
    }

    getObjCustoFixo() {
        return this.custoFixo
    }

}