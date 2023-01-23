import User from './User.js';

export default class Adnin extends User {
    constructor(name, email, birthday, role = 'admin', active = true) {
        super(name, email, birthday, role, active);
    }

    createCourse(courseName, vacancies) {
        return ` Course by ${courseName} created with ${vacancies} vacancies `
        console.log('Creating course...');
    }
}

// const newAdmin = new Adnin('John', 'j@email.com', '1990/01/01');

// console.log(newAdmin.createCourse('JS', 10));

// console.log(newAdmin);
// console.log(newAdmin.displayInfo());