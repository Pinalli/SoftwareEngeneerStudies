const client = {
    name: 'Juan',
    age: 32,
    email: 'juan@email.com',
    phone: ['51 99999999', '51 88888888'], //array into object
}

//add new property
client.type = 'Premium'

//list
client.addresses = [
    {
        street: 'Av. Brasil',
        number: ' 1000',
        city: 'Porto Alegre',
        country: 'Brazil',
        apartment: true,
        complement: 'Apto 100'
    }
];
//add new address in list
client.addresses.push({
    street: 'Av. Peter Pan',
    number: '234',
    city: 'Ijuí',
    country: 'Brazil',
    apartment: false,
    complement: 'Casa 1'
});
//filter only apartment
const listApartment = client.addresses.filter((address) => address.apartment === true)


//console.log(client.addresses)
//console.log(client)
console.log(listApartment)
