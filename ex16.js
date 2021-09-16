/* Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valoresnuméricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas */

function calculadora(valor1, valor2, operacao) {
    switch(operacao) {
        case "+":
            console.log(`A soma de ${valor1} + ${valor2} = ${valor1 + valor2}`);
            break;
        case "-":
            console.log(`A subtração de ${valor1} - ${valor2} = ${valor1 - valor2}`);
            break;
        case "*":
            console.log(`A multiplicação de ${valor1} x ${valor2} = ${valor1 * valor2}`);
            break;
        case "/":
            console.log(`A divisão de ${valor1} ÷ ${valor2} = ${valor1 / valor2}`);
            break;
        default:
            console.log("Erro. Operador inválido");
            break;
    }
}

calculadora(10, 20, "+");
calculadora(120, 60, "-");
calculadora(250, 10, "*");
calculadora(100, 10, "/");
calculadora(500, 40, "$");