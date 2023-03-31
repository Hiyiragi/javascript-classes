class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get birthYear() {
        const yearNow = new Date().getFullYear();
        return yearNow - this.age
    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
class Teacher extends User{
    constructor(firstName, lastName, age, groups, experience){
        super(firstName, lastName, age);
        this.groups = groups;
        this.yearsOfExperience = experience;
    }

    isGroupTeacher(group) {
        return this.groups.includes(group);
    }

}
class Student extends User{
    constructor(firstName, lastName, age, group, averageGrade){
        super(firstName, lastName, age);
        this.group = group;
        this.averageGrade = averageGrade;
    }

    static MIN_GRADE_FOR_SCHOLARSHIP = 4;

    isEligibleForScholarship() {
        if (this.averageGrade >= Student.MIN_GRADE_FOR_SCHOLARSHIP) {
            return true
        } else {
            return false
        }
    }

   

}

const teacher1 = new Teacher('Brad', 'Pitt', 59, ['50b', '51c'], 41);
const student1 = new Student('Tom', 'Cruise', 60, '50b', 4.9);
const student2 = new Student('Leonardo', 'DiCaprio', 48, '62c', 3.9);