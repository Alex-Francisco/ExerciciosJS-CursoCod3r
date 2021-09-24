/* Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

function mediaPonderada(codAluno, nota1, nota2, nota3) {
    let p1 = 4, p2 =3, p3 = 3;
    if (nota1 > nota2 && nota1 > nota3) {
        media = ((nota1 * p1) + (nota2 * p2) + (nota3 * p3)) / (p1 + p2 + p3);  
        
    } else if (nota2 > nota1 && nota2 > nota3) {
        media = ((nota2 * p1) + (nota1 * p2) + (nota3 * p3)) / (p1 + p2 + p3);
    }
        
}