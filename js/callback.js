const names = ['John', 'Paul', 'George', 'Ringo'];

names.forEach(function (name) {
    console.log(name);
});


console.log('-------Arrow function----------');

names.forEach((name) => {
    console.log(name);
});

console.log('-------Outra forma----------');

function printName(name) {
    console.log(name);
}
names.forEach(printName); //parametro da função é uma função