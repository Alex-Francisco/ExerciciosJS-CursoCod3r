/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

function ladosTriangulo (ab, cd, ef) {
  if (ab + cd > ef && ab + ef > cd && ef + cd > ab) {
        console.log("Ok! Com essas medidas é possível formar um triângulo.");
      } else
        console.log("Negativo! Não se pode formar um triângulo com essas medidas.");
}

ladosTriangulo(16, 20, 30);
ladosTriangulo(20, 15, 5);