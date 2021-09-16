/* Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

function diaDaSemana(dia) {
    switch(dia) {
        case 1:
            console.log("Domingo -> Fim de Semana");
            break;
        case 2:
            console.log("Segunda-Feira -> Dia Útil");
            break;
        case 3:
            console.log("Terça-Feira -> Dia Útil");
            break;
        case 4:
            console.log("Quarta-Feira -> Dia Útil");
            break;
        case 5:
            console.log("Quinta-Feira -> Dia Útil");
            break;
        case 6:
            console.log("Sexta-Feira -> Dia Útil");
            break;
        case 7:
            console.log("Sábado -> Fim de Semana");
            break;
        default:
            console.log("Dia Inválido!")
    }
}


diaDaSemana(0);
diaDaSemana(1);
diaDaSemana(2);
diaDaSemana(3);
diaDaSemana(4);
diaDaSemana(5);
diaDaSemana(6);
diaDaSemana(7);
