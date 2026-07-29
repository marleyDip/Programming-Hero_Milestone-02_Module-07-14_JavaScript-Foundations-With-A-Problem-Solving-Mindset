// Removes the last element from an array and returns it.
// If the array is empty, undefined is returned and the array is not modified.

const numbers = [12, 45, 145, 25, 78, 89, 94];
console.log(numbers);

// Removes the last element from an array and returns it.

// numbers.pop();
const firstOut = numbers.pop();
console.log(numbers); // [ 12, 45, 145, 25, 78, 89 ]
console.log(firstOut); // 94

// numbers.pop();
const secondOut = numbers.pop();
console.log(numbers); // [ 12, 45, 145, 25, 78 ]
console.log(secondOut); // 89

// numbers.pop();
const thirdOut = numbers.pop();
console.log(numbers); // [ 12, 45, 145, 25]
console.log(thirdOut); // 78

console.log(firstOut, secondOut, thirdOut); // 94 89 78

// If the array is empty, undefined is returned and the array is not modified.

const emptyArray = [];
console.log(emptyArray); // []

// emptyArray.pop();
const empty = emptyArray.pop();
console.log(emptyArray); // []
console.log(empty); // undefined
