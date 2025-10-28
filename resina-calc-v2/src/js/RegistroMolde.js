export class RegistroMolde {

    constructor(nome, qntBorracha) {
        this.nome = nome;
        this.qntBorracha = qntBorracha;
        this.valorBorracha = 60;
        this.horaTrabalho = 0;
        this.valorDespesa = 0;
        this.porcentagemLucro = 0;
    }

    itemsList() {
        return {
            nome: this.nome,
            "qnt-borracha": this.qntBorracha,
            "valor-borracha": this.valorBorracha,
            "hora-trabalho": this.horaTrabalho,
            "valor-despesa": this.valorDespesa,
            "lucro": this.porcentagemLucro,
        }
    }

    custoBorracha() {
        const valorGramaBorracha = this.valorBorracha / 1000;
        const valorTotalBorracha = this.qntBorracha * valorGramaBorracha;
        return valorTotalBorracha
    }
}