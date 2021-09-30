/* Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos ,
bem como a soma dos elementos. */

function progAritmetica(n, a1, r) {
    for (let cont = 0; cont < n; cont++) {
        console.log(a1 + r * cont);
    }
    console.log('Total = ' + (n * (a1 + (a1 + ((n-1)*r))))/2)    
}

function progGeometrica(n, a1, r) {
    for (let cont = 0; cont < n; cont++) {
        console.log(a1 * (r ** cont))
    }
    console.log("Total = " + (a1 * ((r ** n) - 1)) / (r - 1));
}

progAritmetica(10, 20, 30) //mostrar 10 termos, iniciando em 20, pulando de 30 em 30
console.log("");
progGeometrica(3, 5, 12)