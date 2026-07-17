let quantity = 5;
let monkey = 21;

// JavaScript has only one type of number.

let x = 3.14; // A number with decimals
let y = 3; // A number without decimals

// JavaScript Numbers are Always 64-bit Floating Point (double)
// This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63.

/**
 * 
 *  Adding Numbers and Strings
 * JavaScript uses the + operator for both addition and concatenation.
 * Numbers are added. Strings are concatenated.
 *
 * In JavaScript, when the + operator is used with a string, it performs string concatenation.
 *
 */

// If you add two numbers, the result will be a number:

let a = 10;
let b = 20;
let c = a + b;

console.log(c); // 30
console.log(typeof c); // number

// If you add two strings, the result will be a string concatenation:

let p = "10";
let q = "20";
let r = p + q;

console.log(r); // "1020"
console.log(typeof r); // string

// If you add a number and a string, the result will be a string concatenation:

let k = 10;
let l = "20";
let m = k + l;

console.log(m); // "1020"
console.log(typeof m); // string

// A common mistake is to expect this result to be 30:
let a1 = 10;
let b1 = 20;

console.log("The result is: " + a1 + b1); // 1020
console.log(typeof ("The result is: " + a1 + b1)); // string

// here used "," instead of "+"
console.log("The result is: ", a1 + b1); // 30
console.log(typeof ("The result is: ", a1 + b1)); // number

// A common mistake is to expect this result to be 102030:

let x1 = 10;
let y1 = 20;
let z1 = "30";
let result = x1 + y1 + z1;

console.log(result); // 3030
console.log(typeof result); // string

/**
 *
 * Important Rule
 *
 * The JavaScript interpreter works from left to right and Top to Bottom.
 *
 * First 10 + 20 is added because x and y are both numbers.
 * Then 30 + "30" is concatenated because z is a string.
 *
 *
 */

// Numeric Strings

// JavaScript strings can have numeric content:

let x2 = 100; // x is a number

let y2 = "100"; // y is a string

// JavaScript will try to convert strings to numbers in all numeric operations:

let x3 = "100";
let y3 = "10";
let z3 = x3 / y3;

console.log(z3); // 10
console.log(typeof z3); // number

let x4 = "100";
let y4 = "10";
let z4 = x4 * y4;

console.log(z4); // 1000
console.log(typeof z4); // number

let x5 = "100";
let y5 = "10";
let z5 = x5 - y5;

console.log(z5); // 90
console.log(typeof z5); // number

// In the last example JavaScript uses the + operator to concatenate the strings. This will not work

let x6 = "100";
let y6 = "10";
let z6 = x6 + y6;

console.log(z6); // 10010
console.log(typeof z6); // string

/**
 *
 * NaN - Not a Number
 * NaN is a JavaScript reserved word indicating that a number is not a legal number.
 *
 */

// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
let d = 100 / "Apple";
console.log(d); // NaN

// However, if the string is numeric, the result will be a number:

let d1 = 100 / "10";

console.log(d1); // 10

// You can use the global JavaScript function isNaN() to find out if a value is a not a number:

let d2 = 100 / "Apple";
console.log(isNaN(d2)); // true

// If you use NaN in a mathematical operation, the result will also be NaN:

let d4 = NaN;
let d5 = 5;
let d6 = d4 + d5;

console.log(d6); // NaN

// the result might be a concatenation like NaN5:

let d7 = NaN;
let d8 = "5";
let d9 = d7 + d8;

console.log(d9); // "NaN5"

// Division by 0 (zero) also generates Infinity:
console.log(2 / 0); // Infinity
console.log(-2 / 0); // -Infinity

// NaN, Infinity is a number: typeof NaN, Infinity returns number:

console.log(typeof NaN); // number
console.log(typeof Infinity); // number

/**
 *
 *
 * JavaScript displays numbers as base 10 decimals.
 * But you can use the toString() method to output numbers from base 2 to base 36.
 *
 * Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
 *
 *
 */

let myNumber = 32;

console.log("Hexatrigesimal (base 36):", myNumber.toString(36)); // Hexatrigesimal (base 36): w
console.log("Duotrigesimal (base 32):", myNumber.toString(32)); // Duotrigesimal (base 32): 10
console.log("Hexadecimal (base 16):", myNumber.toString(16)); // Hexadecimal (base 16): 20
console.log("Duodecimal (base 12):", myNumber.toString(12)); // Duodecimal (base 12): 28
console.log("Decimal (base 10):", myNumber.toString(10)); // Decimal (base 10): 32
console.log("Octal (base 8):", myNumber.toString(8)); // Octal (base 8): 40
console.log("Binary (base 2):", myNumber.toString(2)); // Binary (base 2): 100000
