// Trocar todos os elementos pares e diferentes de zero de um array pelo numero 0.
// Se o array for vazio, retorne -1


function substituiPares(array) {
  if (!array) return -1;
  if (!array.length) return -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      console.log("Você já é zero!");
    } else if (array[i] % 2 === 0) {
      console.log(`Substituindo ${array[i]} por zero`);
      array[i] = 0;
    }
  }
  return array;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];

console.log(substituiPares(null));
console.log(substituiPares(undefined));
console.log(substituiPares(arr));
