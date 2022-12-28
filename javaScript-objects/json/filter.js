const clients = require('./clients.json');

function filterApatmentWithoutComplements(clients) {
    return clients.filter((client) => {
        return (client.address.apartment &&
            !client.address.hasOwnProperty('complement')
        );
    });
}

const filteredClients = filterApatmentWithoutComplements(clients);
console.log(filteredClients);