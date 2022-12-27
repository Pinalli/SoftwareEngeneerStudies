const client = {
    name: 'Marie',
    age: 20,
    cpf: '67845678910',
    email: 'marie@email.com'
}

console.log(`The name of client is ${client['name']} and she is has ${client['age']} years old.`);

const keys = ['name', 'age', 'cpf', 'email'];
keys.forEach((key) => {
    console.log(`The key ${key} have value ${client[key]}`);
});