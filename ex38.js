/* Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor. */

function intervaloImp(inicio, fim) {
    let maior = null, menor = null;
    
    if (inicio >= 0 && fim <= 100 && inicio <= 100 && fim >= 0) {
        if (inicio > fim) {
            maior = inicio
            menor = fim
        } else {
            maior = fim
            menor = inicio
        }
        console.log("");
        console.log(`Os números ímpares no intervalo de ${menor} e ${maior} são:`);
        for (i = menor; i <= maior; i++) {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
    } else {
        console.log("");
        console.log("Número passado é menor que 0 ou maior que 100");
    }
}

intervaloImp(3, 97);
intervaloImp(102, 15);
intervaloImp(100, 15);