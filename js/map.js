const notas = [10, 7.4, 9.5, 8.0, 7.5]

const notasAtuais = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1
    //se for maior ou igual a 10, retorna 10

})
console.log(`Notas = ${notas}`) //não altera o array original
console.log(`Notas com + 1 ponto =  ${notasAtuais}`) 