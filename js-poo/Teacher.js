import User from './User.js';

export default class Teacher extends User {
    constructor(name, email, birthday, role = 'teacher', active = true) {
        super(name, email, birthday, role, active);
    }


    approvesStudent(student, course) {
        return ` Student ${student} approves in course ${course} `
    }
}

const newTeacher = new Teacher('Paul Mackenzi', 'paul@email.com', '1967/07/23');
console.log(newTeacher);
console.log(newTeacher.displayInfo());
console.log(newTeacher.approvesStudent('John', 'JS'));