/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

vetor = [-20, 2, -5, 15, 27, -6, -202, 105, 55, -10];

function numerosNegativos(vetorPassado) {
    qtdNegativo = 0;
    for (i in vetorPassado) {
        if (vetorPassado[i] < 0) {
            qtdNegativo++;
        }
    }
    console.log(`A quantidade de números negativos é igual a -> ${qtdNegativo}`);
}

numerosNegativos(vetor);
