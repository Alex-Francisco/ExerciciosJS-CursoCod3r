/* Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A. */

notas = [5.2, 7.5, 8.5, 9.3, 3.5, -3.5, 9.7, 11.2];

function conceito(notasAluno) {
    let media = 0;
    for (let nota in notasAluno) {
        if (notasAluno[nota] >= 0.0 && notasAluno[nota] <= 4.9) {
            console.log(`Nota -> ${notasAluno[nota]} é igual ao conceito D`);
        } else if (notasAluno[nota] >= 5.0 && notasAluno[nota] <= 6.9) {
            console.log(`Nota -> ${notasAluno[nota]} é igual ao conceito C`);
        } else if (notasAluno[nota] >= 7.0 && notasAluno[nota] <= 8.9) {
            console.log(`Nota -> ${notasAluno[nota]} é igual ao conceito B`);
        } else if (notasAluno[nota] >= 9.0 && notasAluno[nota] <= 10.0) {
            console.log(`Nota -> ${notasAluno[nota]} é igual ao conceito A`);
        } else {
            console.log(`A nota ${notasAluno[nota]} é inválida!`);
        }
    }
}

conceito(notas);