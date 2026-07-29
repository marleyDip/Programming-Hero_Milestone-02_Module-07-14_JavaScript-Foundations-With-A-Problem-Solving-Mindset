// slice() Method
const digits = [1, 2, 3, 4, 5, 6];

const slice = digits.slice(2, 6); // index 2, 3, 4, 5
console.log(slice); // [ 3, 4, 5, 6 ]

console.log(digits); // [ 1, 2, 3, 4, 5, 6 ]

// splice() Method
const numbers = [1, 2, 3, 4, 5, 6];

const parts = numbers.splice(2, 2); // index 2, 3
console.log(parts); // [3, 4]
console.log(numbers); // [ 1, 2, 5, 6 ]

const results = [1, 2, 3, 4, 5, 6];

const part = results.splice(2, 2, 99, 999, 9999); // index 2, 3 and add 99, 999, 9999
console.log(part); // [3, 4]
console.log(results); // [1, 2, 99, 999, 9999, 5, 6];
