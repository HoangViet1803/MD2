// readonly được sử dụng để làm cho một thuộc tính có dạng chỉ đọc trong class, type hoặc interface 
// nó có thể được truy cập bên ngoài class nhưng giá trị của chúng không thể thay đổi. Vì không thể thay đổi bên ngoài class nên chúng các thuộc tính đó cần được khởi tạo ngay khi khai báo hoặc được khởi tạo bên trong phương thức khởi tạo (constructor) của class
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.empName = name;
    }
    return Employee;
}());
var emp = new Employee(1, 'viet');
function visitForBirthday(home) {
    // Có thể đọc và cập nhật các thuộc tính từ "home.resident"
    console.log("Happy birthday ".concat(home.resident.name, "!"));
    ;
    home.resident.age++;
}
;
;
var writablePerson = {
    name: "Person McPersonface",
    age: 42
};
var person1 = {
    name: 'viet',
    age: 22
};
// person1.name = 'henry' --> Error
// Dòng bên dưới là đúng cú pháp
var readonlyPerson = writablePerson;
console.log(readonlyPerson.age);
writablePerson.age++;
console.log(readonlyPerson.age);
