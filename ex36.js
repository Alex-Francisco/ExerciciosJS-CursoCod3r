/* Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. */

function calcMult(vetorPassado, numPassado) {
    let resultado = []
    for (let i = 0; i < vetorPassado.length; i++) {
        resultado.push(vetorPassado[i] * numPassado);
    }
    console.log(resultado);
}

function calcMult2(vetorPassado, numPassado) {
    let resultado = []
    for( let i = 0; i < vetorPassado.length; i++) {
        if (vetorPassado[i] > 5) {
            resultado.push(vetorPassado[i] * numPassado);
        }
    }
    console.log(resultado);
}

vetor = [1, 5, 10, 50, 100];
calcMult(vetor, 5);
calcMult2(vetor, 4);
calcMult2(vetor, 10);