// readonly được sử dụng để làm cho một thuộc tính có dạng chỉ đọc trong class, type hoặc interface 
// nó có thể được truy cập bên ngoài class nhưng giá trị của chúng không thể thay đổi. Vì không thể thay đổi bên ngoài class nên chúng các thuộc tính đó cần được khởi tạo ngay khi khai báo hoặc được khởi tạo bên trong phương thức khởi tạo (constructor) của class
class Employee {
    readonly empCode: number;
    empName: string;

    constructor(code: number, name: string) {
        this.empCode = code;
        this.empName = name;
    }
}
let emp = new Employee(1,'viet');

// readonly với đối tượng
/** Việc sử dụng từ khóa readonly không ngụ ý rằng một giá trị là hoàn toàn bất biến (immutable) - không thể thay đổi nội dung bên trong. Nó chỉ có nghĩa là bản thân thuộc tính đó không thể được sửa lại giá trị */
interface Home {
    readonly resident: {name: string; age: number}
}
function visitForBirthday(home: Home) {
    // Có thể đọc và cập nhật các thuộc tính từ "home.resident"
    console.log(`Happy birthday ${home.resident.name}!`);;
    home.resident.age++
}
// Nhưng không thể ghi vào "resident" trên 'Home'
// function evict(home: Home) {
//     home.resident = {
//         name: 'abc',
//         age: 42
//     }
// }

// readonly với biến tham chiếu
interface Person {
    name: string;
    age: number;
};
interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
};
let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42,
};
let person1: ReadonlyPerson = {
    name: 'viet',
    age: 22
}
// person1.name = 'henry' --> Error

// Dòng bên dưới là đúng cú pháp
let readonlyPerson: ReadonlyPerson = writablePerson;
console.log(readonlyPerson.age); 
writablePerson.age++;
console.log(readonlyPerson.age); 