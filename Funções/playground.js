/**
 Dada a função calculaIdade, utilize os metodos call e aplly para modificar o valor de this.
 Crie seus proprios objetos para essa atividade
 */

function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
  nome: 'Maria',
  idade: 30,
};

const pessoa2 = {
  nome: 'Pedro',
  idade: 25,
};

const pessoa3 = {
  nome: 'Murillo',
  idade: 35,
};

const animal = {
  nome: 'Bart',
  idade: 8,
  raca: 'Chihuahua',
};

console.log(calculaIdade.call(pessoa3, 10));
console.log(calculaIdade.apply(pessoa2, [10]));
