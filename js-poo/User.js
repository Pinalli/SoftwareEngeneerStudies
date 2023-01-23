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

    get name() {
        return this.#name;
    }

    set name(newName) {
        if(newName === ''){
            throw new Error('Name cannot be empty');
        }
        else{
        this.#name = newName;
        console.log('Name changed successfully')
        }
    }

    get email() {
        return this.#email;
    }
    
    set email(newEmail) {
        this.#email = newEmail;
    }

    get birthday() {
        return this.#birthday;
    }

    set birthday(newBirthday) {
        this.#birthday = newBirthday;
    }

    get role() {
        return this.#role;
    }

    set role(newRole) {
        this.#role = newRole;
    }    

    get active() {
        return this.#active;
    }
  
    set active(newActive) {
        this.#active = newActive;
    }

    // #userObjMount() { //private method
    //     return ({
    //         name: this.#name,
    //         email: this.#email,
    //         birthday: this.#birthday,
    //         role: this.#role,
    //         active: this.#active
    //     })
    // }


    displayInfo() {
       // const this = this.#userObjMount();
        return (`Name: ${this.name},  Email: ${this.email},  Birthday: ${this.birthday}, Role: ${this.role}, Active: ${this.active}
        }`);
    }
}


// const newUser = new User('John', 'j@j.com', '1990/01/01');
// console.log(newUser)
// console.log(newUser.displayInfo());

// console.log(User.prototype.isPrototypeOf(newUser));//true