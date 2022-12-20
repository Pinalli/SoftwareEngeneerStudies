// Array é uma estrutura de dados que armazena uma coleção de valores
const notas = [10, 6.5, 8, 7.5]

notas.push(9) // adiciona um elemento no final do array
//notas.pop(9) // remove um elemento do array

const media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length

console.log(`As notas são ${notas}`)
console.log(`A média é ${media}`) // template string (interpolação de
