/* Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

const vetor = [10, 5, 19, 35, 67, 14, 19, 3, 7, 100, 1, 27, 95, 203, 49, -3, 27, 101];

function menorValor(vetorPassado) {
    let menor = vetorPassado[0];
    let maior = vetorPassado[0];
    for (i in vetorPassado) {
        if (vetorPassado[i] < menor) {
            menor = vetorPassado[i];
        }

        if (vetorPassado[i] > maior) {
            maior = vetorPassado[i];
        }
    }
    console.log(`Menor valor achado -> ${menor} || Maior valor achado -> ${maior}`);
}

menorValor(vetor);
