const notas = [10, 7.4, 9.5, 8.0, 7.5]

let somaNotas = 0;

notas.forEach(function (notas, i) { //function anonima (callback)
    somaNotas += notas;
    console.log(i, ` ${notas}`) //template string (interpolação)    
})
media = somaNotas / notas.length
console.log(`A média das notas é ${media}`)