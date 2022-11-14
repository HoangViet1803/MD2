// @ts-nocheck
/** Các kiểu dữ liệu nguyên thủy */
// Kiểu boolean: có 2 giá trị true và false
var isShow = false;
// Kiểu number:
var num1 = 0;
var num2 = 1;
// Kiểu string
var myName = "viethenry";
// Kiểu void: được sử dụng khi hàm không trả về bất kỳ giá trị nào, tuy hay được gọi là hafmm void nhưng thực chất nó là một kiểu dữ liệu với giá trị null, trong TS thì có thêm giá trị undefined
var variable;
console.log(variable);

function showMessage(message) {
    alert(message);
}
// Kiểu null và undefined: cả hai kiểu này đều là giá trị của kiểu void, cả  2 đều rất ít sử dụng trong quá trình xây dựng dự án
var u = undefined;
var n = null;
// Kiểu any: Một biến với kiểu này có thể có giá trị là một string, number hoặc bất kỳ kiểu nào
var x = 2021;
x = 'hoang';
x = [1, 2, 3, 4, 5];
x = {
    name: 'viet',
    age: 18,
    add: 'HaNoi'
};
/** Các kiểu dữ liệu do người dùng định nghĩa */
// Kiểu Array
var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3, 4, 5];
var list3 = ['viet', 'thuy'];
var list4 = ['viet', 'thuy'];
// Kiểu tuple: là kiểu dữ liệu đặc biệt có thể chứa nhiều giá trị với nhiều kiểu dữ liệu con khác nhau.
// Tuple là một mảng nhưng đã xác định được số phần tử và kiểu dữ liệu cho mỗi phần tử đó
var viet = ['henry', 18];
// Kiểu enum: sử dụng để cho phép một biến có thể là một tập hợp các hằng số được định sẵn
var City;
(function(City) {
    City[City["HaNoi"] = 0] = "HaNoi";
    City["HoChiMinh"] = "HCM";
    City["DaNang"] = "DN";
})(City || (City = {}));;
var city1 = City.HoChiMinh;
console.log(city1);
var city2 = City.HaNoi;
console.log(city2);
// Kiểu object
var student;
student = {
    name: 'viet',
    age: 22
};
var pro = {
    name: 'viet',
    age: 22,
    address: 'HaNoi'
};
// // Kiểu never
// function handleException (errorMessage: string): never{
//     throw Error(errorMessage)
// }
// function runInfinity():never {
// 		while(true) {
// 				console.log("running...")
// 		}
// }
// handleException ("just a test error");
// Kiểu liên hợp (Unions type)
function addNumberOrString(a, b) {
    if (typeof(a) === 'number' && typeof(b) === 'number') {
        return a + b;
    }
    if (typeof(a) === 'string' && typeof(b) === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers ỏ strings');
}
addNumberOrString(6, 9);