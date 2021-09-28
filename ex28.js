/* Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

const vetorInteiros = [1, 3, 6, 8, 11, 12, 15, 22, 35, 39, 48, 52, 55, 68, 100, 103, 102, 110, 112];
let contPar = 0, contImpar = 0;

for (i in vetorInteiros) {
    if (vetorInteiros[i] % 2 == 0) {
        contPar++
    } else {
        contImpar++
    }
}

console.log(`Qtd números pares = ${contPar} || Qtd números ímpares = ${contImpar}`);