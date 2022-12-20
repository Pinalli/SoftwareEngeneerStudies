const names = ["John", "Paul", "George", "Ringo", "Paul", "George", "Ringo", "Alice"];

// const newSet = new Set(names);

// const namesAtual = [...newSet];

const namesAtual = [...new Set(names)];

// console.log(newSet); // Set { 'John', 'Paul', 'George', 'Ringo' }
console.log("============")
console.log(namesAtual);