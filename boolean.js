// constant
const isRich = false;
console.log(isRich); // false

const isPandit = true;
console.log(isPandit); // true
console.log(typeof isPandit); // boolean

/**
 *
 * The Boolean Data Type
 *
 * In JavaScript, a Boolean is a primitive data type that can only have one of two values: true or false
 * The Boolean value of an expression is the basis for all JavaScript comparisons and conditions.
 *
 * Key Boolean Characteristics
 * 1. true and false are boolean data types
 * 2. true and false are the only possible boolean values
 * 3. true and false must be written in lowercase
 * 4. true and false must be written without quotes
 *
 * Boolean Use Cases
 * Very often, in programming, you will need a data type that can represent one of two values, like:
 * 1. yes or no
 * 2. on or off
 * 3. true or false
 *
 * Boolean values are fundamental for logical operations and control flow in JavaScript programming.
 *
 *
 */

// Comparisons - All JavaScript comparison operators (like ==, !=, <, >) return true or false from the comparison.

let x = 5;

console.log(x == 8); // Equal to = false
console.log(x != 8); // Not equal to = true
console.log(x > 8); // Greater than = false
console.log(x < 8); // Less than = true

// Conditions - Booleans are extensively used in if statements to determine the code blocks to execute based on the logic.

// if (day == "Monday")	true or false
// if (salary > 9000)	true or false
// if (age < 18)	true or false

const hour = new Date().getHours();
let greetings;

if (hour > 10 && hour < 18) {
  greetings = "Good Day!";
} else if (hour > 18 && hour < 22) {
  greetings = "Good Evening!";
} else if (hour > 4 && hour < 10) {
  greetings = "Good Morning!";
} else {
  greetings = "Good Night!";
}

console.log("The Hour is", greetings);
