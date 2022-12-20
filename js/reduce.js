const salaJS = [7, 8, 8, 7, 1, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 8, 9, 5, 6, 7, 3.5, 8, 9, 5];

function calculaMedia(notasSalas) {
    const somaDasNotas = notasSalas.reduce((abc, nota) => abc + nota, 0)
    const media = somaDasNotas / notasSalas.length;
    return media;
}

console.log(`A média da sala de JS é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);