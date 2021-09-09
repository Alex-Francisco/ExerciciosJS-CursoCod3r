/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */


function calcJurosSimples(capitalIni, txJuros, tempAp) {
    txJurosConvertida = txJuros/100
    let juros = capitalIni * txJurosConvertida * tempAp
    console.log(`Seu capital aplicado foi de ${capitalIni} com uma taxa de juros simples de ${txJuros}% ao mês, sendo que ao final do tempo de ${tempAp} mês/meses você obteve o montante de -> ${juros+capitalIni}`)
}

calcJurosSimples(1200, 2.5, 10); //1200 aplicado com taxa de juros de 2.5% ao mês durante 14 meses
calcJurosSimples(1200, 2, 14);

function calcJurosComposto(capitalIni, txJuros, tempAp) {
    txJurosConvertida = txJuros/100
    let juros = capitalIni * (1 + txJurosConvertida)**tempAp
    console.log(`Seu capital aplicado foi de ${capitalIni} com uma taxa de juros composto de ${txJuros}% ao ano, sendo que ao final do tempo de ${tempAp} anos você obteve o montante de -> ${juros.toFixed(2)}`)
}

calcJurosComposto(1400, 7, 2) //1400 aplicado com taxa de juros composto de 7% ao ano durante 2 anos