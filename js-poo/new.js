function User(name, email) {
    this.name = name;
    this.email = email;

    this.displayInfo = function () {
        return (`Name: ${this.name} = Email: ${this.email}`);
    }
}

// const user = new User('John', 'j@j.com');
// console.log(user.displayInfo());

// function Admin(role) {
//     User.call(this, 'John', 'j@j.com')//this is User
//     this.role = role || 'student';
// }

// Admin.prototype = Object.create(User.prototype);
// const newUser = new Admin('admin')
// console.log(newUser.displayInfo());
// console.log(newUser.role);

const user = {
    init: function (name, email) {
        this.name = name
        this.email = email
    },
    displayInfo: function (name) {
        return this.name
    }
}
const newUser = Object.create(user);
newUser.init('John', 'j@email.com')
console.log(newUser.displayInfo());
// console.log(newUser.displayInfo('John'));
// console.log(user.isPrototypeOf(newUser))

