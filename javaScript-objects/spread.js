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
        number: 100,
        city: 'Porto Alegre',
        country: 'Brazil',
        apartment: true,
        complement: 'Apto 100',
    },
];

function callForClient(ComercialPhone, ResidentialPhone) {
    console.log(`Calling to ${ComercialPhone} and ${ResidentialPhone}`);
}

//callForClient(client.phone[0], client.phone[1]); or
callForClient(...client.phone); //scattering

const order = {
    destinataire: client.name,
    ...client.addresses[0]
}
console.log(order);