/* Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

vetor = [10, 35, 55, 100, 15, 45];

function mediaVetor(vetorPassado) {
    let media = 0, total = 0;
    
    for (i in vetorPassado) {
        total += vetorPassado[i];
    }
    media = total / vetor.length
    console.log(`A média aritmética dos valores no vetor é igual a -> ${media.toFixed(2)}`);
}

mediaVetor(vetor);