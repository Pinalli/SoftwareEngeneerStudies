const client = {
    name: 'Juan',
    age: 32,
    email: 'juan@email.com',
    phone: ['51 99999999', '51 88888888'], //array into object
}

//add new property
client.type = 'Premium'

//object into object
client.address = {
    street: 'Av. Brasil',
    number: ' 1000',
    city: 'Porto Alegre',
    country: 'Brazil',
    apartment: true,
    complement: 'Apto 100'
}


console.log(client)
