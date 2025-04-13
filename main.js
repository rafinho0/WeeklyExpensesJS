// Importar a classe que calculara os gastos para ca com node.js
const CalcGastos = require("./CalcGastos");

// Criaremos o objeto da classe
const calcGastos = new CalcGastos();

const readline = require("readline-sync"); // Serve como o Scanner do java, porem eh do node.js

let dia = 1; // Variavel do dia comeca com 1

// Loop para passar os gastos da semana e calcular
while(dia <= 7) {
    let gasto = parseFloat(readline.question(`Digite o gasto do dia ${dia}: `))

    // Se gasto NAO for nulo e gasto for maior our igual a 0, iremos adicionar 
    // o gasto e aumentar o dia em 1, assim, 'loopando' mais uma vez.
    // Caso contrario ele retornara um erro e voce tera que adicionar um valor valido
    if(!isNaN(gasto) && gasto >= 0) {
        calcGastos.adicionarGasto(gasto);
        dia++
    } else {
        console.log("Erro! Este valor nao eh valido.");
    }
}

// Aqui iremos calcular o gasto total e o gasto medio, chamando os metodos da classe 'CalcGastos'
// Usaremos o 'toFixed' para termos apenas dois pontos flutuantes apos o ponto, assim formatando como dinheiro normal
gastoTotal = calcGastos.gastosSemanais.toFixed(2);
gastoMedioDia = calcGastos.mediaGastoDiario().toFixed(2);

// Valor total gasto na semana
console.log("===================================");
console.log("RESULTADOS:");

// Valor total gasto 
console.log(`O valor total gasto na semana foi de R$${gastoTotal}`);

// Valor total gasto em media por dia
console.log(`O valor, em media, gasto diariamente foi de R$${gastoMedioDia}`);
console.log("===================================");