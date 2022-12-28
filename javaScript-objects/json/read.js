const data = require('./client.json');

// console.log(data);
// console.log(typeof data);

const clientInString = JSON.stringify(data);//convert object to string
console.log(clientInString);
console.log(typeof clientInString);

console.log(clientInString.name)

const objectClient = JSON.parse(clientInString); //convert string to object
console.log(objectClient)
