/**
 *
 * String & Array Methods
 * 1. includes()
 * 2. indexOf()
 *
 *
 * 1) includes(): The JavaScript includes() method checks if an array or a string contains a specific value, returning either true or false.
 * It provides a modern, readable alternative to older patterns like indexOf() !== -1.
 *
 * Important Gotchas:
 *
 * i) Case-Sensitivity: Both string and array variants are strictly case-sensitive. For example, 'Hello'.includes('hello') returns false.
 *
 * ii) Objects: includes() does not work for finding objects inside arrays unless you pass the exact same reference.
 * -- For finding matching object properties, use Array.some() instead.
 *
 * iii) NaN Support: Unlike indexOf(), includes() can successfully find NaN inside an array
 *
 *
 * 2. indexOf():The indexOf() method in JavaScript returns the first index at which a given element or substring can be found.
 * -- It returns -1 if the value is not present.
 * -- This method works similarly on both Strings and Arrays.
 *
 *
 *
 *  Important Gotchas
 *
 * i) Case-Sensitivity: indexOf() treats uppercase and lowercase characters as different values. Finding "hello" in "Hello" will return -1.
 *
 * ii) Strict Equality (===): For arrays, it uses strict comparison. The string "5" will not match the number 5.
 *
 * iii) Objects: It checks objects by reference, not by content. To find objects by their properties, use findIndex() instead.
 *
 *
 */

/**
 *
 * Basic Array Methods
 * - includes()
 * - concat()
 * - join()
 * - indexOf
 * - Array.isArray()
 *
 *
 * 1) includes(): The array version determines whether a specific item exists as an element within the array.
 *
 * -- syntax: array.includes(searchElement, fromIndex)
 *
 * -- searchElement: The item you want to find.
 * -- fromIndex (Optional): The index position to start searching from (defaults to 0)
 *
 *
 *
 * 2) concat(): To combine multiple arrays using the concat() method in JavaScript, you call concat() on your first array and pass the remaining arrays as comma-separated arguments.
 *
 * -- This method does not change your original arrays.
 * -- It returns a brand new merged array instead.
 *
 * -- syntax: array1.concat(value2, value3, ..., valueN)
 *
 *
 * 2)  ES6 spread operator (...): The spread operator allows you to spread an iterable collection (object or array) into another collection. Using this operator on arrays, you can merge the contents of arrays together.
 *
 *
 *
 *
 * 3) join() : The join() method in JavaScript converts an array into a single string by concatenating all of its elements.
 * -- By default, it separates the elements with a comma, but you can pass any custom string as a separator.
 *
 * -- syntax: array.join(separator);
 *
 * -- separator (Optional): The string that will go between each element. If omitted, it defaults to a comma ","
 *
 * i) Non-destructive: It does not change your original array; it simply generates and returns a completely new string.
 *
 * ii) Handles empty values gracefully: If an item in your array is null or undefined, the method treats it as an empty string rather than throwing an error or printing "null".
 *
 * iii) Empty arrays: Running .join() on a blank array [] will simply output an empty string "".
 *
 *
 *
 *
 * 4) indexOf(): It searches an array for an item and returns its structural index position.
 *
 * -- syntax: array.indexOf(searchElement, fromIndex)
 *
 * -- searchElement: The item or text you want to find.
 * -- fromIndex (Optional): The index where the search should start. It defaults to 0.
 *
 *
 *
 * 5) Array.isArray(): The Array.isArray() method in JavaScript checks whether a passed value is an array, returning true or false.
 *
 * -- You must call it directly as Array.isArray(value) because it is a static method.
 * -- Calling myVariable.isArray() will throw an error.
 *
 */

// Determines whether an array includes a certain element, returning true or false as appropriate.

const numbers = [12, 98, 77, 6, 23];
const numbers2 = [2, 3];

console.log(numbers.includes(6)); // true

const hasItem = numbers.includes(600);
console.log(hasItem); // false

if (numbers.includes(77)) {
}

// includes() method case-sensitive (uppercase === uppercase && lowercase === lowercase )
const players = ["abul", "babul", "cabul", "dabul", "kabul"];

if (players.includes("babul")) {
  console.log("babul is playing");
}

if (players.includes("Babul")) {
  console.log("babul is playing");
} else {
  console.log("includes method case sensitive");
}

//  The concat() Method - Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const allNumbers = numbers.concat(numbers2);
console.log(allNumbers);

const array1 = ["a", "b"];
const array2 = ["c", "d"];
const array3 = ["e", "f"];

// Combine all three arrays
const combined = array1.concat(array2, array3);

console.log(combined); // Output: ['a', 'b', 'c', 'd', 'e', 'f']

//  Modern Spread Operator Alternative
const array5 = [1, 2, 3];
const array6 = [4, 5, 6];

const merged = [...array5, ...array6];
// [1, 2, 3, 4, 5, 6]

const array7 = [1, 2, 3];
const array8 = [4, 5, 6];
const array9 = [7, 8, 9];

const merged2 = [...array8, ...array9, ...array7];
// [4, 5, 6, 7, 8, 9, 1, 2, 3]

// The join() method: Adds all the elements of an array into a string, separated by the specified separator string.
const fruits = ["Apple", "Banana", "Orange"];

// 1. Default (uses commas)
const defaultJoin = fruits.join();
console.log(defaultJoin); // Output: "Apple,Banana,Orange"

// 2. Custom Separator (spaces and symbols)
const dashJoin = fruits.join(" - ");
console.log(dashJoin); // Output: "Apple - Banana - Orange"

// 3. No Separator (empty string glue)
const contiguousJoin = fruits.join("");
console.log(contiguousJoin); // Output: "AppleBananaOrange"

const num = [1, 3, 5, 2, 8];
// const joined = num.join(); // 1,3,5,2,8; by default
// const joined = num.join(""); // 13528
// const joined = num.join(", "); // 1, 3, 5, 2, 8
const joined = num.join("-"); // 1-3-5-2-8
console.log(joined);

// Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

// const position = num.indexOf(5); // index 2
// const position = num.indexOf(8); // index 4
// index = 0,1,2,.......; it can not be -1; thats why it returns -1 if not found that we search the element
const position = num.indexOf(25); // -1
console.log("position:", position);

// For check variable type, use typeOf
// For check array, use isArray

// The Array.isArray() method in JavaScript checks whether a passed value is an array, returning true or false. It is a static method
console.log(Array.isArray(45)); // false
console.log(Array.isArray([45])); // true

// Returns true
Array.isArray([]);
Array.isArray([1, 2, 3]);
Array.isArray(new Array());

// Returns false
Array.isArray({});
Array.isArray("Hello");
Array.isArray(123);
Array.isArray(null);
Array.isArray(undefined);
