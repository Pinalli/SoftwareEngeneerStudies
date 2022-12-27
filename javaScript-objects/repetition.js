const client = {
    name: 'Juan',
    age: 32,
    email: 'juan@email.com',
    phone: ['51 99999999', '51 88888888'], //array into object
}
//list
client.addresses = [
    {
        street: 'Av. Brasil',
        number: ' 1000',
        city: 'Porto Alegre',
        country: 'Brazil',
        apartment: true,
        complement: 'Apto 100',
    },
];

for (let key in client) {
    //return the type of the value
    let type = typeof client[key];
    if (type != 'object' && type != 'function') {
        console.log(`The key ${key} has the value ${client[key]}`);
    }
}