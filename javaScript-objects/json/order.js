const clients = require('./clients.json');

function orderClients(list, property,) {
    const result = list.sort((a, b) => {
        if (a[property] > b[property]) {
            return 1;
        }
        if (a[property] < b[property]) {
            return -1;
        }
        return 0;
    })
    return result;
}

const orderByNames = orderClients(clients, 'name');
console.log(orderByNames);