const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const media = [10, 7, 9, 6]

let listaNotasAlunos = [alunos, media]

for (let i = 0; i < listaNotasAlunos[0].length; i++) {
    console.log(listaNotasAlunos[0][i] + ' sua nota é ' + listaNotasAlunos[1][i])
}
