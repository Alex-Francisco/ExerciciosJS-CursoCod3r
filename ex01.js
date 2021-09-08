/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */

function execOpsAritmeticas(valor1, valor2) {
  console.log(`Operação de soma: ${valor1} + ${valor2} = ${valor1 + valor2}`)
  console.log(`Operação de subtração: ${valor1} - ${valor2} = ${valor1 - valor2}`)
  console.log(`Operação de multiplicação: ${valor1} x ${valor2} = ${valor1 * valor2}`)
  console.log(`Operação de divisão: ${valor1} ÷ ${valor2} = ${valor1 / valor2}`)
}
execOpsAritmeticas(10, 20);
