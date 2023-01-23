export default class User {
    #name //private property
    #email
    #birthday
    #role
    #active
    constructor(name, email, birthday, role, active = true) {
        this.#name = name;
        this.#email = email;
        this.#birthday = birthday;
        this.#role = role || 'student';
        this.#active = active;
    }

    displayInfo() {
        return (`Name: ${this.#name},  Email: ${this.#email}`);
    }

}



// const newUser = new User('John', 'j@j.com', '1990/01/01');
// console.log(newUser)
// console.log(newUser.displayInfo());

// console.log(User.prototype.isPrototypeOf(newUser));//true