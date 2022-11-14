enum Gender {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other'
}

class Employee {
    fullName: string = "";
    gender: Gender = Gender.OTHER;
    birthday?: Date;
    email: string ="";
    phoneNumber: string ="";
    constructor(fullName: string, gender: Gender,  email: string, phoneNumber: string, birthday?: Date) {
        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber; 
    }
}
let employeeList: Employee[] = [];
employeeList.push(new Employee('viet', Gender.MALE,'viet@gmail.com','0987654321',new Date("2001-01-08")))
employeeList.push(new Employee('thuy', Gender.FEMALE,'thuy@gmail.com','0987654322',new Date("2001-03-18")))

function showEmployee(employee: Employee){
    console.log(employee);   
}

employeeList.forEach(showEmployee)