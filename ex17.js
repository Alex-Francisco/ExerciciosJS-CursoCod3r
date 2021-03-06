/* Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido */

function novoSalario(salarioAtual, plano) {
    let planoPassado = plano.toUpperCase().trim();
    let planoAumento = null;

    function aumento(salarioAtual, plano) {
        let aumento = salarioAtual * (planoAumento / 100) + salarioAtual
        console.log(`O salario atual é de R$ ${salarioAtual} e o plano atual é ${planoPassado}, o que dá direito ao aumento de ${planoAumento}%`);
        console.log(`O novo salário do funcionário é de R$${aumento}`)
    }

    switch(planoPassado) {
        case "A":
            planoAumento = 10;
            aumento(salarioAtual, planoPassado);
            break;
        case "B":
            planoAumento = 15;
            aumento(salarioAtual, planoPassado);
            break;
        case "C":
            planoAumento = 20;
            aumento(salarioAtual, planoPassado);
            break;
        default:
            console.log("Plano inválido");
            break;
    }
}

novoSalario(1800, "a");
novoSalario(2200, "B");
novoSalario(3000, "C");
novoSalario(2000, "D");