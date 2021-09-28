/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */

const vetor = [1, 3, 7, 9, 10, 12, 15, 19, 20, 32, 35, 40, 100, 120, 200];
let qtdDentro = 0, qtdFora = 0;

function intervalo(vetorPassado) {
    for (i in vetorPassado) {
        if (vetorPassado[i] >= 10 && vetorPassado[i] <= 20) {
            qtdDentro++;
        } else {
            qtdFora++;
        }
    }
    console.log(`Qtd dentro do intervalo: ${qtdDentro} || Qtd fora do intervalo ${qtdFora}`);
}

intervalo(vetor)

