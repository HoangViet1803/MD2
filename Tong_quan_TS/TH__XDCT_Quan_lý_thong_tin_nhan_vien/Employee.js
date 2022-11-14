var Gender;
(function(Gender) {
    Gender["MALE"] = "male";
    Gender["FEMALE"] = "female";
    Gender["OTHER"] = "other";
})(Gender || (Gender = {}));
var Employee = /** @class */ (function() {
    function Employee(fullName, gender, email, phoneNumber, birthday) {
        this.fullName = "";
        this.gender = Gender.OTHER;
        this.email = "";
        this.phoneNumber = "";
        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    return Employee;
}());
var employeeList = [];
// @ts-ignore
employeeList.push(new Employee('viet', Gender.MALE, 'viet@gmail.com', '0987654321', new Date("2001-01-08")));
// @ts-ignore
employeeList.push(new Employee('thuy', Gender.MALE, 'thuy@gmail.com', '0987654322', new Date("2001-03-18")));

function showEmployee(employee) {
    console.log(employee);
}
employeeList.forEach(showEmployee);