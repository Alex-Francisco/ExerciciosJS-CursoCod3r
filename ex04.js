/* Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

function calcDivisao (dividendo, divisor) {
  resultDivisao = Math.floor(dividendo / divisor)
  restoDivisao = dividendo % divisor
  console.log (`${dividendo} ÷ ${divisor} = ${resultDivisao} e tem resto ${restoDivisao}`)
}

calcDivisao(10, 2);
calcDivisao(5, 2);

