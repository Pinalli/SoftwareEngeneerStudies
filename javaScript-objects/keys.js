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

// return array with keys
const keysObject = Object.keys(client);
console.log(keysObject);
if (!keysObject.includes('name')) {
    console.error('The object does not have the name key');
} else {
    console.log('The object has the name key');
}