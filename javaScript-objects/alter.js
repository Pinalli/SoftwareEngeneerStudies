const person = {
    name: 'John',
    profission: 'Developer',
}
console.log(person.name)
console.log(person.phone) // undefined

person.phone = "51 98989898"
console.log(person.phone)

person.name = 'John Doe'
console.log(person)

person = newPerson // Error: Assignment to constant variable.