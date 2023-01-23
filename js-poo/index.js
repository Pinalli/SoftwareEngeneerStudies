import User from './User.js'
import Teacher from './Teacher.js'
import Admin from './Admin.js'

// const newUser = new User('Pinalli', 'pinalli@email.com', '1969-12-09')
// console.log(newUser.displayInfo())

const newAdmin = new Admin('Rinaldi', 'r@email.com', '1908-04-23')
console.log( newAdmin.name)
newAdmin.name = 'Joseph'
console.log( newAdmin.name)
// newUser.#name = 'Joseph''
// console.log(newAdmin.displayInfo())
// console.log(newAdmin.adminName())

// const newTeacher = new Teacher('Gabriel', 'g@email.com', '1990-01-01', 'Math')
// console.log(newTeacher.displayInfo())