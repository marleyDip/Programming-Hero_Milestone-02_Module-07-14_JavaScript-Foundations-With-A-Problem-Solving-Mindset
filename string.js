// let name = kalam; // Here, Js machine think kalam also a variable name
let name = "kalam";
console.log(name); // ReferenceError: kalam is not defined because string always start with double quotes (" ").

let person = "It's me, Deep";
let country = "Sirajganj, 'Bangladesh'";
let learning = '"JavaScript" Programming Language. Another Things.';

console.log(person);
console.log(country);
console.log(learning);

// Here string means দড়ি, rope, সুতা

/**
 * Strings are for storing text
 * Strings are written with quotes
 * A JavaScript string is zero or more characters written inside quotes.
 */

// No difference between them
let carName1 = "Volvo XC60"; // Double quotes
let carName2 = "Volvo XC60"; // Single quotes

// Quotes Inside Quotes
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

/* "Template Strings" is officially called a template literal. It is also widely referred to as a string template, string interpolation, or simply backticks (due to the `` syntax used).

    => String Templates or Template Strings or Template Literals

    => Templates were introduced with ES6 (JavaScript 2016).
    => Allows for easy variable insertion and multi-line strings. 
    => For example, Hello ${name} is a template literal that evaluates to a string.
*/

// Back-Tics Syntax - Template Strings use back-ticks (``) rather than the quotes ("") to define a string:
let text = `Hello World!`;

// Quotes Inside Strings - Template Strings allow both single and double quotes inside a string:
let text1 = `He's often called "Johnny"`;

// Multiline Strings - Template Strings allow multiline strings:
let text2 = `The quick
brown fox
jumps over
the lazy dog`;

// Interpolation - Template Strings allow variables in strings. Template strings provide an easy way to interpolate variables in strings.
// Syntax - ${...}

// Variable Substitutions:
let firstName = "John";
let lastName = "Doe";

let text4 = `Welcome ${firstName}, ${lastName}!`;
console.log(text4); // Welcome John, Doe!
console.log(typeof text4); // string

// Expression Substitution - Template Strings allow interpolation of expressions in strings:
let price = 10;
let vat = 0.25;

let total = `Total: ${(price * (1 + vat)).toFixed(2)}`;
console.log(total); // Total: 12.50
console.log(typeof total); // string

let x = 5;

// String
console.log("the number " + x); // Outputs: "the number 5"
console.log(typeof ("the number " + x)); // string

// Template Strings
console.log(`the number ${x}`); // Outputs: "the number 5"
console.log(typeof `the number ${x}`); // string

// Number
console.log("The Number is", x); // The Number is 5
console.log(typeof ("The Number is", x)); // number

/* JavaScript String Addition */

// The + can also be used to add (concatenate) strings:
let text6 = "Deep";
let text7 = "Akand";

let text8 = text6 + " " + text7;
console.log(text8);

// The += assignment operator can also be used to add (concatenate) strings:
let text9 = "What a very ";
text9 += "nice day!";

console.log(text9);

// When used on strings, the + operator is called the concatenation operator.

// Adding Strings and Numbers
// Adding two numbers, will return the sum as a number like 5 + 5 = 10.
// Adding a number and a string, will return the sum as a concatenated string like 5 + "5" = "55".

let a = 5 + 5;
let b = 5 + "5";
let c = "Hello" + 5;
let d = 50 + 5 + "Deep";

console.log(a, typeof a); // 10 number
console.log(b, typeof b); // 55 string
console.log(c, typeof c); // Hello5 string
console.log(d, typeof d); // 55Deep string; Js Interpreted works top to bottom, left to right; 1st add 50 and 5 to 55, then concatenate number and string.
