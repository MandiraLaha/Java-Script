let arr = ['suze', 'roz', 'kit', 'rozy'];
// let result = arr.map((item) => {
//     return 'friend' + item;
// })
// console.log(result);
// let arr2 = [1, 2, 3, 4];
// let result = arr2.filter((item) => {
//     return item % 2 === 0;
// })
// console.log(result);
let result = arr.filter((item) => {
    return item.length === 3;
})
console.log(result);

