/* Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. */

function resultBhaskara (ax2, bx, c) {
  let delta = (bx ** 2) - (4 * ax2 * c)
  let resultado = []
  
  if (delta < 0) {
    return "Delta é negativo"
  }

  let xMenos = (-bx - Math.sqrt(delta)) / 2 * ax2
  let xMais = (-bx + Math.sqrt(delta)) / 2 * ax2

  resultado.push(xMenos)
  resultado.push(xMais)
  return resultado
}

console.log(resultBhaskara(10, 4, 7));
console.log(resultBhaskara(15, 13, 2));