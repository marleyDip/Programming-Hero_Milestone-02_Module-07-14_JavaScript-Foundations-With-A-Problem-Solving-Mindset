// Task 1 - Basic Array: Create & Store more than one value in a variable, console, Length, Index, Get and Set by Index, Adding & Removing - Array elements - push, pop, shift & unshift, Basic Array Methods - includes, indexOf, Array Traversal - for...of, for, while.

// Create an array with 3 items of your choice. Log it.
// const myFamilyMember = ["Deep", "Nadira", "Nafisa"];
const myFavoriteFruits = ["Mango", "Apple", "Watermelon"];

// Log it to the console
console.log(myFavoriteFruits); // ["Mango", "Apple", "Watermelon"]

console.log();

// Log the length of the array from Task 1.
console.log(myFavoriteFruits.length); // 3

console.log();

// Log the item at index 0 and index 2 of the array.
const firstItem = myFavoriteFruits[0];
const secondItem = myFavoriteFruits[2];

console.log(firstItem, secondItem); // Mango Watermelon

console.log(myFavoriteFruits[0]); // Mango
console.log(myFavoriteFruits[1]); // Apple
console.log(myFavoriteFruits[2]); // Watermelon

console.log();

// Change the item at index 1 to a new value. Log the array.
myFavoriteFruits[1] = "Orange";
console.log(myFavoriteFruits[1]); // Orange

// Log the updated array
console.log(myFavoriteFruits); // [ 'Mango', 'Orange', 'Watermelon' ]

console.log();

// Add one item to the end of the array. Log the array.
myFavoriteFruits.push("Red Grapes", "Banana");
console.log(myFavoriteFruits); // [ 'Mango', 'Orange', 'Watermelon', 'Red Grapes', 'Banana' ]

// console.log(myFavoriteFruits.push("Strawberry")); // add to array but return length = 6
const addItem = myFavoriteFruits.push("Strawberry");
console.log(addItem); // 6

console.log(myFavoriteFruits); // [ 'Mango', 'Orange', 'Watermelon', 'Red Grapes', 'Banana', 'Strawberry' ]

console.log();

// Remove the last item from the array. Log the array and the removed value.
console.log(myFavoriteFruits.pop()); // Strawberry
console.log(myFavoriteFruits); // [ 'Mango', 'Orange', 'Watermelon', 'Red Grapes', 'Banana' ]

const removeItem = myFavoriteFruits.pop();
console.log(myFavoriteFruits); // [ 'Mango', 'Orange', 'Watermelon', 'Red Grapes' ]
console.log(removeItem); // Banana

console.log();

// Add one item to the start of the array. Log the array.
myFavoriteFruits.unshift("Papaya", "Guava");
console.log(myFavoriteFruits); // [ 'Papaya', 'Guava', 'Mango', 'Orange', 'Watermelon', 'Red Grapes' ]

// console.log(myFavoriteFruits.unshift("Pineapple")); // It returns length = 7
const add = myFavoriteFruits.unshift("Pineapple");
console.log(add); // 7

// console.log(myFavoriteFruits); // [ 'Papaya', 'Guava', 'Mango', 'Orange', 'Watermelon', 'Red Grapes' ]

console.log(myFavoriteFruits.indexOf("Papaya")); // 1
console.log(myFavoriteFruits.indexOf("Guava")); // 2
console.log(myFavoriteFruits.indexOf("Pineapple")); // 0
console.log(myFavoriteFruits.indexOf("Orange")); // 4

console.log(myFavoriteFruits); // [ 'Pineapple', 'Papaya', 'Guava', 'Mango', 'Orange', 'Watermelon', 'Red Grapes' ]

console.log();

// Remove the first item from the array. Log the array and the removed value.
const remove1 = myFavoriteFruits.shift();
const remove2 = myFavoriteFruits.shift();
console.log(myFavoriteFruits); // [ 'Guava', 'Mango', 'Orange', 'Watermelon', 'Red Grapes' ]
console.log(remove1, remove2); // Pineapple Papaya

console.log(myFavoriteFruits.shift()); // Guava
console.log(myFavoriteFruits); // [ 'Mango', 'Orange', 'Watermelon', 'Red Grapes' ]

console.log();

// Check whether the array contains a specific value. Log true or false.
console.log(myFavoriteFruits.includes("Pineapple")); // false
const hasFruit = myFavoriteFruits.includes("Watermelon");
console.log(hasFruit); // true

console.log();

// Find the position of a specific value in the array. Log the number.
console.log(myFavoriteFruits.indexOf("Orange", 1)); // 1
console.log(myFavoriteFruits.indexOf("Orange", 2)); // -1, not exists after index 2, so it out of the box and return -1

const positionFruit = myFavoriteFruits.indexOf("Watermelon");
console.log(positionFruit); // 2

console.log(myFavoriteFruits.indexOf(23)); // -1

console.log();

// Loop through the array with a for loop and log each item.
// for...of loop, Direct extract the array values
for (const favoriteFruit of myFavoriteFruits) {
  console.log(favoriteFruit);
} // Mango Orange Watermelon Red Grapes

// Here, regular for loop - 1st extract the index of the array element, and then extract values of those position by array[i]
for (let i = 0; i < myFavoriteFruits.length; i++) {
  console.log(i, myFavoriteFruits[i]);
}
// 0 Mango
// 1 Orange
// 2 Watermelon
// 3 Red Grapes

console.log();

// Loop through the array with a while loop and log each item.
let i = 0;

// while (i < myFavoriteFruits.length) {
while (i <= myFavoriteFruits.length - 1) {
  console.log(i, myFavoriteFruits[i]);
  i++;
}
// 0 Mango
// 1 Orange
// 2 Watermelon
// 3 Red Grapes

let p = myFavoriteFruits.length - 1;

while (p >= 0) {
  console.log(p, myFavoriteFruits[p]);
  p--;
}

// 3 Red Grapes
// 2 Watermelon
// 1 Orange
// 0 Mango

// let p = myFavoriteFruits.length;
// 4 undefined
// 3 Red Grapes
// 2 Watermelon
// 1 Orange
// 0 Mango

// while (p > 0) {
// 4 undefined
// 3 Red Grapes
// 2 Watermelon
// 1 Orange
