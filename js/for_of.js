const notas = [10, 7.4, 9.5, 8.0, 7.5]


let somaNotas = 0;
for (let nota of notas) {
    somaNotas += nota
}
media = somaNotas / notas.length
console.log(`A média das notas é ${media}`)