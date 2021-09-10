/* ​Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.) */

// let pontuacao = "10 20 20 8 25 3 0 30 1" assim não vai era pra retornar [3, 7]
let pontuacao = "30 40 20 4 51 25 42 38 56 0" // assim vai

function checarPontuacao(pontuacao) {
    let pontosFeito = pontuacao.split(" ");
    let qtdRecord = 0;
    let piorPontuacao = 1;
    let maiorPontuacao = pontosFeito[0];
    let menorPontuacao = pontosFeito[0];
    
    for (posicaoValor = 0; posicaoValor < pontosFeito.length; posicaoValor++) {
        
        if (pontosFeito[posicaoValor] > maiorPontuacao) {
            maiorPontuacao = pontosFeito[posicaoValor]
            qtdRecord++
        } else if (pontosFeito[posicaoValor] < menorPontuacao){
            menorPontuacao = pontosFeito[posicaoValor]
            piorPontuacao = posicaoValor + 1 
        }
    }
    return [qtdRecord, piorPontuacao]
}
console.log(checarPontuacao(pontuacao))
