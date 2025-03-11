// Importar a classe que calculara os gastos para ca com node.js
const CalcGastos = require("./CalcGastos");

// Criaremos o objeto da classe
const calcGastos = new CalcGastos();

const readline = require("readline-sync"); // Serve como o Scanner do java, porem eh do node.js

let dia = 1; // Variavel do dia comeca com 1

// Loop para passar os gastos da semana e calcular
while(dia <= 7) {
    let gasto = parseFloat(readline.question(`Digite o gasto do dia ${dia}: `))

    if(!isNaN(gasto) && gasto >= 0) {
        calcGastos.adicionarGasto(gasto);
        dia++
    } else {
        console.log("Erro! Este valor nao eh valido.");
    }
}

gastoTotal = calcGastos.gastosSemanais.toFixed(2);
gastoMedioDia = calcGastos.mediaGastoDiario().toFixed(2);

// Valor total gasto na semana
console.log("===================================");
console.log("RESULTADOS:");

console.log(`O valor total gasto na semana foi de R$${gastoTotal}`);

// Valor total gasto em media por dia
console.log(`O valor, em media, gasto diariamente foi de R$${gastoMedioDia}`);

// Mensagem final
