const notas = [7, 7, 8, 9];

const newNotas = [...notas]; // Spread operator(espalha os elementos do array)

newNotas.push(10);

console.log(`Notas originais = ${notas}`);
console.log(`Novas notas = ${newNotas}`);

