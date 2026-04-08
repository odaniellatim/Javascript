export class Renda_mensal {
    constructor(rendaMensalValor, rendaMensalDiaTrabalhados, rendaMensalHorasTrabalhados, rendaMensalTotalProjetos) {
        this.rendaMensalValor = rendaMensalValor
        this.rendaMensalDiaTrabalhados = rendaMensalDiaTrabalhados
        this.rendaMensalHorasTrabalhados = rendaMensalHorasTrabalhados
        this.rendaMensalTotalProjetos = rendaMensalTotalProjetos
    }

    // Valor de vendas no mês para conseguir atingir a renda desejada.
    rendaMediaPorProjeto() {
        return this.rendaMensalValor / this.rendaMensalTotalProjetos
    }

    // valor de ganho por dia de acordo com a quantidade de dias definidos
    rendaMediaPorDia() {
        return this.rendaMensalValor / this.rendaMensalDiaTrabalhados
    }

    // valor de ganho por hora trabalhado de acordo com a quantidade de horas definidas no dia
    rendaMediaPorHora() {
        return this.rendaMensalValor / this.rendaMensalHorasTrabalhados
    }

    getJsonRendaMensal() {
        return {
            renda_mensal_valor: this.rendaMensalValor,
            renda_mensal_dias: this.rendaMensalDiaTrabalhados,
            renda_mensal_horas: this.rendaMensalHorasTrabalhados,
            renda_mensal_projetos: this.rendaMensalTotalProjetos,
        }
    }
}