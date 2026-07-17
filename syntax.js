/* ===== JavaScript Statements ===== */

let x, y, z; // Statement 1
x = 5; // Statement 2
y = 6; // Statement 3
z = x + y; // Statement 4

/**
 * A computer program is a list of "instructions" to be "executed" by a computer.
 * These programming instructions are called statements.
 * Most JavaScript programs contain many statements.
 * The statements are executed, one by one, in the same order as they are written.
 *
 * JavaScript statements are composed of: Values, Operators, Expressions, Keywords, and Comments.
 *
 * JavaScript programs (and JavaScript statements) are often called JavaScript code.
 * Semicolons separate JavaScript statements.
 * Add a semicolon at the end of each executable statement.
 */

let a, b, c; // Declare 3 variables
a = 5; // Assign the value 5 to a
b = 6; // Assign the value 6 to b
c = a + b; // Assign the sum of a and b to c

// When separated by semicolons, multiple statements on one line are allowed:

a = 5;
b = 6;
c = a + b;

/**
 * JavaScript White Space
 * JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.
 *
 * The following lines are equivalent:
 * let person = "Deep";
 * let person="Deep";
 *
 * A good practice is to put spaces around operators ( = + - * / ):
 * let x = y + z;
 */

/**
 * JavaScript Comments
 *
 * Single Line Comments
 * Single line comments start with //.
 * Any text between // and the end of the line will be ignored by JavaScript (will not be executed).
 * let x = 5;      // Declare x, give it the value of 5
 *
 * Using Comments to Prevent Execution
 * Using comments to prevent execution of code is suitable for code testing.
 * Adding // in front of a code line changes the code lines from an executable line to a comment.
 */

// Multi-line Comments
// Multi-line comments start with /* and end with */.
// Any text between /* and */ will be ignored by JavaScript.

/* ===== JavaScript Variables ===== */

/**
 * 
 * Variables = Data Containers
 * JavaScript variables are containers for data.
 * JavaScript variables can be declared in 4 ways:
 *
 * Modern JavaScript - Using let, Using const
 *
 * Older JavaScript - Using var (Not Recommended), Automatically (Not Recommended)
 * 
 */

/**
 * 
 * JavaScript Identifiers
 * Variables are identified with names called identifiers.
 * Names can be short like x, y, z.
 * Names can be descriptive like age, sum, carName.
 *
 * The rules for constructing names (identifiers) are:
 * 1. Names can contain letters, digits, underscores, and dollar signs
 * 2. Names must begin with a letter, a $ sign or an underscore (_).
 * 3. Names are case sensitive (X is different from x).
 * 4. Reserved words (JavaScript keywords) cannot be used as names.
 *
 * Numbers are not allowed as the first character in names.
 * This way JavaScript can easily distinguish identifiers from numbers.
 * 
 */

/* ===== JavaScript Datatypes ===== */

/**
 * 
 * A JavaScript variable can hold 8 types of data:
 *
 * Type	Description
 * String	A text of characters enclosed in quotes
 * Number	A number representing a mathematical value
 * Bigint	A number representing a large integer
 * Boolean	A data type representing true or false
 * Object	A collection of key-value pairs of data
 * Undefined	A primitive variable with no assigned value
 * Null	A primitive value representing object absence
 * Symbol	A unique and primitive identifier
 * 
 */

// String
let color = "Yellow";
let lastName = "Johnson";

// Number
let length = 16;
let weight = 7.5;

// BigInt
let x1 = 1234567890123456789012345n;
let y1 = BigInt(1234567890123456789012345);

// Boolean
let x2 = true;
let y2 = false;

// Object
const person = { firstName: "John", lastName: "Doe" };

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date object
const date = new Date("2022-03-25");

// Undefined
let x3;
let y3;

// Null
let x4 = null;
let y4 = null;

// Symbol
const x5 = Symbol();
const y6 = Symbol();

// JavaScript typeof operator to find the type of a JavaScript variable.
// The typeof operator returns the type of a variable or an expression:

typeof ""; // Returns "string"
typeof "John"; // Returns "string"
typeof "John Doe"; // Returns "string"

typeof 0; // Returns "number"
typeof 314; // Returns "number"
typeof 3.14; // Returns "number"
typeof 3; // Returns "number"
typeof (3 + 4); // Returns "number"

// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';

// With decimals:
let q1 = 34.0;

// Without decimals:
let q2 = 34;

// Exponential Notation
// Extra large or extra small numbers can be written with scientific (exponential) notation:

let w = 123e5; // 12300000
let p = 123e-5; // 0.00123

// JavaScript Booleans
// JavaScript booleans can only have one of two values: true or false
// The boolean value of an expression is the basis for JavaScript comparisons.

let o = 5;

console.log(o == 8); // false
console.log(o != 8); // true
console.log(o > 8); // false
console.log(o < 8); // true

// Datatype undefined
// In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.

// A variable without a value has the datatype undefined.
// A variable without a value also has the value undefined.

let carName;
console.log(carName);

// Empty Values
// An empty value has nothing to do with undefined.
// An empty string has both a legal value and a type.

let car = ""; // The value is "", the typeof is "string"
console.log("The value is empty : " + car); // The value is empty :
console.log(typeof car); // string
