/**
1. Crie uma função que recebe o array alunos e um numero que ira representar a media final;
2. Percorra o array e popule um novo array auxiliar apenas com os alunos cuja a notas são maiores ou 
    igual a media final;
3. Utilize a técnica "objetc destructuring" para manipular as propriedades desejadas de cada aluno.
 */


const alunos = [
  {
    nome: 'João',
    nota: 5,
    turma: '1A'
  },
  {
    nome: 'Jose',
    nota: 6,
    turma: '1B'
  },
  {
    nome: 'Maria',
    nota: 4,
    turma: '1A'
  },
  {
    nome: 'Pedro',
    nota: 6,
    turma: '1B'
  },
  {
    nome: 'Madalena',
    nota: 4,
    turma: '1A'
  },
  {
    nome: 'Murillo',
    nota: 9,
    turma: '1B'
  }
];

function alunosAprovados(array, media) {
  let aprovados = [];

  for (let i = 0; i < array.length; i++) {
    const { nota, nome } = array[i];

    if (nota >= media) {
      aprovados.push(nome);
    }
  }
  return aprovados;
}

console.log(alunosAprovados(alunos, 6));