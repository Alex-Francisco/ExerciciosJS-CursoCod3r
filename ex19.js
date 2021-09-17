/* O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80 

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente */

function calcPedido(codItem, quantidade) {
  switch(codItem) {
    case 100:
      console.log(`Item Pedido: Cachorro Quente | Quantidade: ${quantidade} => Total do pedido = R$ ${(quantidade * 3.00).toFixed(2).replace(".",",")}`);
      break;
    case 200:
      console.log(`Item Pedido: Hambúrguer Simples | Quantidade: ${quantidade} => Total do pedido = R$ ${(quantidade * 4.00).toFixed(2).replace(".", ",")}`);
      break;
    case 300:
      console.log(`Item Pedido: Cheeseburguer | Quantidade: ${quantidade} => Total do pedido = R$ ${(quantidade * 5.50).toFixed(2).replace(".", ",")}`);
      break;
    case 400:
      console.log(`Item Pedido: Bauru | Quantidade: ${quantidade} => Total do pedido = R$ ${(quantidade * 7.50).toFixed(2).replace(".", ",")}`);
      break;
    case 500:
      console.log(`Item Pedido: Refrigerante | Quantidade: ${quantidade} => Total do pedido = R$ ${(quantidade * 3.50).toFixed(2).replace(".", ",")}`);
      break;
    case 600:
      console.log(`Item Pedido: Suco | Quantidade: ${quantidade} => Total do pedido = R$ ${(quantidade * 2.80).toFixed(2).replace(".", ",")}`);
      break;
  }
}

calcPedido(100, 10);
calcPedido(200, 4);
calcPedido(300, 2);
calcPedido(400, 6);
calcPedido(500, 3);
calcPedido(600, 5);