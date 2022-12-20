const alunos = ['João', 'Maria', 'Pedro', 'José', 'Lucas', 'Ana', 'Paulo', 'Bento', 'Carla', 'Julia', 'Marcos', 'Mariana', 'Rafael', 'Ricardo', 'Roberto', 'Tatiana', 'Vitor', 'Vitória']

// Slice retorna um novo array a partir do índice passado como parâmetro
const sala1 = alunos.slice(0, alunos.length / 2) // ['João', 'Maria', 'Pedro', 'José', 'Lucas', 'Ana']
const sala2 = alunos.slice(alunos.length / 2) // ['Paulo', 'Bento', 'Carla', 'Julia', 'Marcos', 'Mariana', 'Rafael']
console.log(`Sala1 = ${sala1}`)
console.log(`Sala2 = ${sala2}`)