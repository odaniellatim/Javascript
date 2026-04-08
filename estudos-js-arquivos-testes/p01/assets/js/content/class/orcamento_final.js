import { BD_CUSTO_FIXO_GLOBAL, setBD_CUSTO_FIXO_GLOBAL, setBD_RENDA_MENSAL_GLOBAL } from "../bd/bd_global.js"
import { Custo_fixo } from "./custo_fixo.js"
import { Local_storage } from "./localstorage.js"
import { Renda_mensal } from "./renda_mensal.js"

export class Orcamento_final {

    constructor() {
        this._custoFixo = []
        this._rendaMensal = []
    }

    // CUSTO FIXO

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
        setBD_CUSTO_FIXO_GLOBAL(this.custoFixo)
    }

    // Valor total referente a todos os custo fixo cadastrado 
    valorTotalCustoFixo() {

        // Calcula o valor de acordo com a durabilidade divindo o valor pago por mês
        const valorTotalUmMes = this.custoFixo.reduce((start, current) => {
            if (current.durabilidade <= 1) {
                start += current.valor
            }
            return start
        }, 0)

        // Calcula o valor de acordo com a durabilidade divindo o valor pago por mês
        const valorTotalMaiorMes = this.custoFixo.reduce((start, current) => {
            if (current.durabilidade > 1) {
                start += (current.valor / current.durabilidade)
            }
            return start
        }, 0)
        return (valorTotalUmMes + valorTotalMaiorMes).toFixed(2)
    }

    // Calcula o valor ideal de custo fixo para atribuir em cada projeto/venda
    valorMedioMensalCustoFixo() {
        const totalItens = (this.custoFixo.length === 0) ? 1 : this.custoFixo.length
        const valorMedioMensal = this.custoFixo.reduce((start, current) => { return start += current.valor }, 0)
        return (valorMedioMensal / totalItens) / 20// quantidade de projetos planejado
    }

    // Remove o custo fixo pelo ID
    removerCustoFixo(id) {
        if (this.custoFixo.length <= 0) {
            console.log("Nenhum item disponivel para remover.")
        }
        const newDATA = this.custoFixo.filter(value => Number(value.id) !== Number(id))
        this.custoFixo = newDATA
        setBD_CUSTO_FIXO_GLOBAL(this.custoFixo)
        Local_storage.saveLocalStorage("custo_fixo", this.custoFixo)

        return this.custoFixo
    }

    // Atualiza o custo fixo usando o ID
    atualizarDadosCustoFixo(id, newNome, newValor, newStatus, newDurabilidade) {

        const updateCF = BD_CUSTO_FIXO_GLOBAL.filter((value) => value.id !== Number(id))
        this.custoFixo = updateCF
        this.custoFixo.push({
            id: Number(id),
            nome: newNome,
            valor: Number(newValor),
            status: newStatus,
            durabilidade: Number(newDurabilidade),
        })
        setBD_CUSTO_FIXO_GLOBAL(this.custoFixo)
        Local_storage.saveLocalStorage("custo_fixo", this.custoFixo)
    }

    getObjCustoFixo() {
        return this.custoFixo
    }

    // RENDA MENSAL

    get rendaMensal() {
        return this._rendaMensal
    }

    set rendaMensal(newData) {
        return this._rendaMensal = newData
    }

    addRendaMensal(rendaValor, rendaDias, rendaHoras, rendaProjetos) {
        this.rendaMensal = [] // Zerar a lista de items para manter apenas um item no banco

        // Executa o cadastro usando a classe Renda Mensal
        const rn = new Renda_mensal(rendaValor, rendaDias, rendaHoras, rendaProjetos)
        this.rendaMensal.push(rn.getJsonRendaMensal())

        // Salva os dados no banco de dados global (variavel)
        setBD_RENDA_MENSAL_GLOBAL(this.rendaMensal)

        // Salva os dados no navegador para manter salvo
        Local_storage.saveLocalStorage("renda_mensal", this.rendaMensal)
        return this.rendaMensal

    }

    rendaMediaProjetos() {
        const rendaMediaProj = this.rendaMensal.map((value) => {
            return (value.renda_mensal_valor / value.renda_mensal_projetos)
        })
        return Number(rendaMediaProj).toFixed(2)

    }

    rendaMediaHora() {
        const rendaMed = this.rendaMensal.map((value) => {
            return (value.renda_mensal_valor / (value.renda_mensal_dias * value.renda_mensal_horas))
        })
        return Number(rendaMed).toFixed(2)
    }

    // valor de ganho por dia de acordo com a quantidade de dias definidos
    rendaMediaMinuto() {
        const rendaMediaProj = this.rendaMensal.map((value) => {
            const MINUTOS = 60
            return this.rendaMediaHora() / MINUTOS
        })
        return Number(rendaMediaProj).toFixed(2)
    }


}