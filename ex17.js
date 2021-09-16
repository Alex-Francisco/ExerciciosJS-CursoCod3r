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
    switch(plano) {
        case "A":
            planoAumento = 10;
            let aumento = salarioAtual * (planoAumento / 100) + salarioAtual
            console.log(`O salario atual é de R$${salarioAtual} e o plano atual é ${planoPassado}, o que dá direito ao aumento de ${planoAumento}%`);
            console.log(`O novo salário do funcionário é de R$${aumento}`)
            break;
        case "B":
            planoAumento = 20;
            let aumento = salarioAtual * (planoAumento / 100) + salarioAtual
        default:
            console.log("teste")
    }
}

novoSalario(1200, "A")