const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i]
}

const media = somaNotas / notas.length
console.log(`A média das notas é ${media}`)