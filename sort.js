// let a = [3, 5, 1, 8, 11];
// const result = a.sort((a, b) => {
//     return a - b;
// });
// console.log(result);

let arr = [3, 2, 1, 56, 10000, 167];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log('min is:', min);
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max)
        max = arr[i];
}
console.log('max is:', max);
