import User from './User.js'
import Teacher from './Teacher.js'
import Admin from './Admin.js'

const newUser = new User('Pinalli', 'pinalli@email.com', '1969 - 12 - 09')
console.log(newUser.displayInfo())

// newUser.#name = 'Joseph'
// console.log(newUser.name)