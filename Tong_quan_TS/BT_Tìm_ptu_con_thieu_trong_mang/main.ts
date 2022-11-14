let numbers: number[] = [0,1,3,4,5,7,8,10];
let miss: number[] = [];
for (let i = 0; i <= 10; ++i) {
    if(numbers.indexOf(i) == -1) {
        miss.push(i);
    }
}
console.log(miss);
