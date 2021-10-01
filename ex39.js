/* Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar */

let vetor1 = [1, 3, 5, 7, 9];
let vetor2 = [2, 4, 6, 8, 10];

function inverter(v1, v2) {
    if (v1.length == v2.length) {
        for (let i = 0; i < v1.length; i++) {
            v1[i] = v1[i] + v2[i];
            v2[i] = v1[i] - v2[i];
            v1[i] = v1[i] - v2[i];
        }
    } else {
        console.log("O tamanho dos vetores é diferente.");
    }
    console.log(v1);
    console.log(v2);
}

inverter(vetor1, vetor2);

