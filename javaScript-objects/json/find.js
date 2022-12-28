const clients = require('./clients.json');

function find(list, key, value) {
    //return list.find((item) => item[key] === value); or
    return list.find((item) => item[key].includes(value));//finds the first item that matches the condition
}

const findedClient = find(clients, 'name', 'Emilee');
console.log(findedClient);