/* Faça um algoritmo que calcule o fatorial de um número. */

function calFatorial(numero) {
    let resultado = 1
    for(i = numero; i > 1; i--) {
        resultado *= i
    }
    console.log(`O fatorial de ${numero} é ${resultado}`)
}

calFatorial(6);