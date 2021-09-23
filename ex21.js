/* Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

function pagPlano(idade) {
    let valor = 100, p1 = 80, p2 = 50, p3 = 95, p4 = 130;

    if (idade >= 0 && idade < 10) {
        console.log(`Idade informada -> ${idade} | Deve ser pago o valor de R$ ${(valor+p1).toFixed(2).replace(".",",")}`);
    } else if (idade >= 10 && idade <= 30) {
        console.log(`Idade informada -> ${idade} | Deve ser pago o valor de R$ ${(valor+p2).toFixed(2).replace(".",",")}`);
    } else if (idade > 30 && idade <= 60) {
        console.log(`Idade informada -> ${idade} | Deve ser pago o valor de R$ ${(valor+p3).toFixed(2).replace(".",",")}`);
    } else if (idade > 60) {
        console.log(`Idade informada -> ${idade} | Deve ser pago o valor de R$ ${(valor+p4).toFixed(2).replace(".",",")}`)
    }
}

pagPlano(5);
pagPlano(15);
pagPlano(32);
pagPlano(70);
