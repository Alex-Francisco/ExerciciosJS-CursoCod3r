/* ​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e 
retorne true ou false. */

function verificaDivisao3(numeroPassado) {
    if (numeroPassado % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(verificaDivisao3(10));
console.log(verificaDivisao3(21));
console.log(verificaDivisao3(30));
console.log(verificaDivisao3(5));