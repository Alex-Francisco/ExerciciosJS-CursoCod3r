/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

function ladosTriangulo (ab, cd, ef) {
  if (ab + cd > ef && ab + ef > cd && ef + cd > ab) {
        console.log("Ok! Com essas medidas é possível formar um triângulo.");
        if (ab == cd && cd == ef) {
          console.log("O triângulo formado é Equilátero.");
        } else if (ab != cd && cd != ef && ef != ab) {
          console.log("O triângulo formado é Escaleno");
        } else {
          console.log("O triângulo formado é Isósceles");
        }
      } else
        console.log("Negativo! Não se pode formar um triângulo com essas medidas.");
}

ladosTriangulo(5, 8, 7);
ladosTriangulo(16, 20, 30);
ladosTriangulo(15, 15, 15);
ladosTriangulo(20, 15, 5);
ladosTriangulo(10, 25, 13);