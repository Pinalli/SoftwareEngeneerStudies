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

    #userObjMount() { //private method
        return ({
            name: this.#name,
            email: this.#email,
            birthday: this.#birthday,
            role: this.#role,
            active: this.#active
        })
    }


    displayInfo() {
        const objUser = this.#userObjMount();
        return (`Name: ${objUser.name},  Email: ${objUser.email},  Birthday: ${objUser.birthday}, Role: ${objUser.role}, Active: ${objUser.active}
        }`);
    }


}


// const newUser = new User('John', 'j@j.com', '1990/01/01');
// console.log(newUser)
// console.log(newUser.displayInfo());

// console.log(User.prototype.isPrototypeOf(newUser));//true