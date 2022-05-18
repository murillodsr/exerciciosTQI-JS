//verifica de duas maneiras diferentes entre si, se uma string é um palindromo

//solução 1
function verificaPalindromo(string) {
  if (!string) return "string inexistente";

  return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ovo"));


//solução 2

function verificaPalindromo2(string) {
  if (!string) return "string inexistente";

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) { // verifica caracter com caracter!
      return false;
    }
  }
  return true;
}

console.log(verificaPalindromo2("abba"));