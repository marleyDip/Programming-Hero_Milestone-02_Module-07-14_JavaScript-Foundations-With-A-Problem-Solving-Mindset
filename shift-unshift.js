const numbers = [12, 45, 145, 25, 78, 89, 94];

// Removes the first element from an array and returns it.
// If the array is empty, undefined is returned and the array is not modified.
// numbers.shift();
const first = numbers.shift();
console.log(numbers); // [ 45, 145, 25, 78, 89, 94 ]
console.log(first); // 12

// Inserts new elements at the start of an array, and returns the new length of the array.
numbers.unshift(20);
console.log(numbers); // [ 20, 45, 145, 25, 78, 89, 94 ]
