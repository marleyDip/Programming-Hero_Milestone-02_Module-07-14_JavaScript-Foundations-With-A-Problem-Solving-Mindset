// Variable can hold only one value, one data
const player1 = 45;
const player2 = 98;
const player3 = 56;
const player4 = 45;
const player5 = 98;
const player6 = 56;

// array can hold more than one value
const team = []; // empty array

const marks = [123, 89, 45, 69, 78]; // Number Array

const players = ["jamir", "khamir", "namir", "damir"]; //  String Array

const richStudent = [true, false, true, false, false, false]; // Boolean Array

/**
 *
 * 1. Standard Primitive Arrays
 * - These are simple, single-level lists containing primitive values rather then complex objects.
 *
 * String Array:
 * -- const fruits = ["apple", "banana", "cherry"];
 *
 * Number Array:
 * -- const scores = [95, 82, 88, 100]
 *
 * Boolean Array:
 * -- const stepsCompleted = [true, true, false];
 *
 */

/**
 *
 * 2. Array of Objects
 * - An array of objects in JavaScript is a data structure that stores multiple individual objects inside a single list container, allowing you to manage collections of complex data efficiently.
 * - It combines the ordered indexing of arrays with key-value pairing of objects
 *
 * - You can create an array of objects by placing object literals {} separated by commas inside square brackets [].
 *
 * Accessing and Modifying Data
 * To interact with specific entries, combine bracket notation (for the array index) with dot notation (for the object property).
 * - Read data: users[0].name returns "Alice".
 * - Update data: users[1].active = true changes Bob's status.
 *
 * Avoid Shallow Copy
 * When copying or altering arrays of objects using basic methods like the spread operator [...users], JavaScript performs a shallow copy.
 * - The top-level array is new, but the inner objects still reference the original data pointers.
 * - If you modify a nested object property inside your copy, it will unintentionally change the original array too.
 *
 */

const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true },
];

console.log(users[0].name); // Alice

users[1].active = true;
console.log(users[1].active); // true

/**
 *
 * 3. Multidimensional Arrays (Arrays of Arrays)
 * - An array where each item inside the main list in another array.
 * - These are ideal for grids, matrices, coordinates, or spreadsheet-like data.
 *
 * - A multidimensional array in JavaScript is essentially an array of arrays.
 * - Because JavaScript does not have a native "matrix" type, you achieve multiple dimensions by nesting arrays inside other arrays.
 *
 *
 * Creating a 2D Array
 * -- The easiest way to define a multidimensional array is by using array literal notation (square brackets).
 * -- Think of a 2D array as a grid with rows and columns.
 *
 * A 3x3 grid (Matrix)
 * const matrix = [
 *   [1, 2, 3], // Row index 0; Column index 0, Column index 1, Column index 2
 *   [4, 5, 6], // Row index 1; Column index 0, Column index 1, Column index 2
 *   [7, 8, 9]  // Row index 2; Column index 0, Column index 1, Column index 2
 * ]
 *
 * To extract a value, use chained square brackets [row][column].
 * -- Remember that JavaScript uses zero-based indexing.
 *
 * -- matrix[0] targets the entire first row: [1, 2, 3]
 * -- matrix[1][2] targets Row index 1, Column index 2, which yields 6
 *
 */

const matrix = [
  ,
  // Row 0
  [7, 8, 9], // Row 1
];

// Accessing data: row index first, then column index; matrix[1] => Row 1, matrix[1][2] => Row 1 and Column 2
console.log(matrix[1][2]); // Output: 9

/**
 *
 * 3. Mixed / Heterogeneous Arrays
 * - JavaScript arrays can hold values of completely different data types all at once.
 * - Note: This is generally discouraged in production code because it makes data unpredictable.
 *
 */

const mixedList = [42, "hello", true, null, { id: 1 }, [10, 20]];

/**
 *
 * Alternative "Array-Like" Collections
 * - If you want lists with unique behavior, JavaScript has two built-in alternatives to standard arrays:
 *
 * 1) Set: A collection of unique values. It automatically blocks duplicate entries.
 *
 * 2) Map: A collection of key-value pairs where the keys can be any data type (unlike regular objects, which only allow string/symbol keys)
 *
 */

const uniqueNumber = new Set([1, 2, 2, 3]); // Result: Set(3) { 1, 2, 3 }

const userRole = new Map();
userRole.set("admin", { permissions: true });

/**
 *
 * new Map()
 *
 * - In JavaScript, new Map() creates a built-in collections of key-value pairs that remembers the original insertion order of the keys and allows any data type (including objects, functions, and primitives) to be used as a key.
 *
 *
 * Essential Map Methods and Properties
 *
 * Action          Method / Property       Example
 *
 * Add / Update    set(key, value)         userMap.set('role', 'admin');
 *
 * Read Value      get(key)                userMap.get('role'); // 'admin'
 *
 * Check Key       has(key)                userMap.has('role'); // true
 *
 * Get Size        size                    userMap.size; // 1
 *
 * Remove Key      delete(key)             userMap.delete('role');
 *
 * Clear All       clear()                 userMap.clear();
 *
 *
 *
 * Map vs Object: When to use which?
 *
 * 1) Use a Map when you require frequent additions and removals of pairs (better performance), need non-string keys, or rely on preserving insertion order.
 *
 *
 * 2) Use an Object for basic structured records, JSON data serialization, or simple configuration where keys are known string identifiers.
 *
 */

// You can initialize an empty Map or pass an iterable array of [key, value] pairs.

// 1. Create an empty Map
const userMap = new Map();

// 2. Create and initialize a Map with data
const productMap = new Map([
  ["id", 101],
  ["name", "Laptop"],
]);

// Key Advantage: Non-String Keys
// Unlike regular JavaScript Objects which automatically coerce keys into strings, a Map preserves the exact data type of the key.

const frameworkMap = new Map();

const keyObject = { id: 1 };
const keyFunction = () => {};

// Objects and functions work perfectly as keys
frameworkMap.set(keyObject, "Metadata Linked to Object");
frameworkMap.set(keyFunction, "Metadata Linked to Function");

console.log(frameworkMap.get(keyObject)); // 'Metadata Linked to Object'

// Iteration - Maps are fully iterable out-of-the-box. You can loop through them using a for...of loop or the built-in forEach method.

const inventory = new Map([
  ["apples", 5],
  ["bananas", 12],
]);

// Loop through [key, value] pairs
for (const [fruit, count] of inventory) {
  console.log(`${fruit}: ${count}`);
}

// Loop through keys only
for (const fruit of inventory.keys()) {
  console.log(fruit);
}

// Loop through values only
for (const count of inventory.values()) {
  console.log(count);
}

/**
 *
 * new Set()
 * - In JavaScript, new Set() is a built-in constructor used to create a Set object, which is a collection of unique values.
 * - Unlike an array, a Set cannot contain duplicate elements, and its operations like adding, deleting, and checking for items are highly optimized.
 *
 *
 *
 * Core Properties & Methods
 * Method    Syntax               Description
 *
 * size      set.size             Returns the number of unique elements.
 *
 * add()     set.add(value)       Adds a new element to the end.
 *
 * has()     set.has(value)       Returns true if the value exists, otherwise false.
 *
 * delete()  set.delete(value)    Removes the specified element from the set.
 *
 * clear()   set.clear() Removes  all elements from the set.
 *
 *
 * Advanced: Modern Set Methods
 * Modern JavaScript environments fully support built-in mathematical set operations natively:
 *
 * - union(other): Combines elements from both sets.
 *
 * - intersection(other): Returns only elements present in both sets.
 *
 * - difference(other): Returns elements in the first set but not the second.
 *
 * - symmetricDifference(other): Returns elements unique to each set.
 *
 */

// You can instantiate an empty Set or initialize it by passing an iterable like an Array:

// Empty set
const emptySet = new Set();

// Initialized with an array (duplicates are automatically removed)
const colors = new Set(["red", "blue", "green", "blue"]);
console.log(colors); // Set(3) {'red', 'blue', 'green'}

// Core Properties & Methods
const numbers = new Set();

numbers.add(10); // Set: {10}
numbers.add(20); // Set: {10, 20}
numbers.add(10); // Ignored (duplicate)

console.log(numbers.has(20)); // true
console.log(numbers.size); // 2

numbers.delete(10); // Set: {20}
numbers.clear(); // Set: {}

// Converting Between Arrays and Sets
// The most common real-world use case for new Set() is to remove duplicates from an array. You can quickly convert a Set back into an array using the spread syntax (...):
const duplicateNumbers = [1, 2, 2, 3, 4, 4, 5];

// Deduplicate using Set and convert back to Array
const uniqueNumbers = [...new Set(duplicateNumbers)];

console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// Iterating Over a Set
// Sets preserve the insertion order of elements and are fully iterable. You can loop through them using for...of or .forEach():

const names = new Set(["Alice", "Bob"]);

for (const name of names) {
  console.log(name);
}

// Advanced: Modern Set Methods
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

console.log(setA.intersection(setB)); // Set(1) {3}
console.log(setA.union(setB)); // Set(5) {1, 2, 3, 4, 5}
