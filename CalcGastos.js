class CalcGastos {
    constructor() {
        this.gastosSemanais = 0;
    }

    adicionarGasto(valor) {
        this.gastosSemanais += valor;
    }

    mediaGastoDiario() {
        return this.gastosSemanais / 7;
    }
}

module.exports = CalcGastos;