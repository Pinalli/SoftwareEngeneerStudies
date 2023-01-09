
const user = {
    name: 'John',
    email: 'john@email.com',
    bornDate: '1990/01/01',
    role: 'admin',
    active: true,
    displayInfo: function () {
        console.log(`Name: ${this.name} = Email: ${this.email}`);
    }
}

const admin = {
    name: 'Jane',
    email: 'j@j.mail.com',
    role: 'admin',
    createCourse() {
        console.log('Creating course');
    }
}

Object.setPrototypeOf(admin, user);
admin.createCourse();
admin.displayInfo();



// const display = function () {
//     console.log(`Name: ${this.name} = Email: ${this.email}`);
// }
// const displayName = display.bind(user);