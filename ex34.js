/* Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

function avaliaStrig(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    let existeChar = null;

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if(str1[i] == str2[i]) {
                existeChar = true            
            } else {
                existeChar = false;
            }
        }
    }

    existeChar ? console.log(true) : console.log(false);
   
}

avaliaStrig("dois", "dois");
avaliaStrig("Meu", "mel");