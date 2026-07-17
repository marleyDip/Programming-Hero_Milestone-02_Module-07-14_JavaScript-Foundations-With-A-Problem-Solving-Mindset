/**
 *
 *
 * JavaScript Assignment Operators
 * Assignment operators assign values to JavaScript variables.
 *
 * Given that x = 10 and y = 5, the table below explains the assignment operators:
 *
 * Operator	   Example	     Same As	    Result
 * =	       x = y	     x = y	        x = 5
 *
 * +=	       x += y	     x = x + y	    x = 15
 *
 * -=	       x -= y	     x = x - y	    x = 5
 *
 * *=	       x *= y	     x = x * y	    x = 50
 *
 * **=	       x **= y	     x = x ** y	    x = 100000
 *
 * /=	       x /= y	     x = x / y	    x = 2
 *
 * %=	       x %= y	     x = x % y	    x = 0
 *
 * :	       x: 45	     size.x = 45	x = 45
 *
 * Logical Assignment Operators
 *
 * Operator	  Example	      Result
 * &&=	      true &&= 10	  x = 10
 * ||=	      false ||= 10	  x = 10
 * ??=	      null ??= 10	  x = 10
 *
 *
 */

/**
 *
 * The 8 FALSY Values => false, 0, "", null, undefined
 *
 * false	The boolean keyword itself
 * 0	The number zero
 * -0	Negative zero
 * 0n	BigInt zero
 * "", '', ``	Any empty string
 * null	   The absence of any value
 * undefined	A variable that has not been assigned a value
 * NaN	   "Not-a-Number," usually the result of an invalid math operation
 *
 * These are TRUTHY => "0", "false", [], {}
 *
 * "0"	A string containing a zero is truthy because it is not empty
 * "false"	The string "false" is truthy
 * [ ]	An empty array is truthy
 * { }	An empty object is truthy
 *
 */

// The = Operator - The Simple Assignment Operator assigns a simple value to a variable.
let x = 10;
let y = 10;
let X = 10 + y;

let a = 5;

// The += Operator - The Addition Assignment Operator adds a value to a variable.
console.log((a += 10)); // a = 5 + 10, a = 15

// The -= Operator - The Subtraction Assignment Operator subtracts a value from a variable.
console.log((a -= 10)); // a = 15 - 10, a = 5

// The *= Operator - The Multiplication Assignment Operator multiplies a variable.
console.log((a *= 10)); // a = 5 * 10, a = 50

// The **= Operator - The Exponentiation Assignment Operator raises a variable to the power of the operand.
console.log((a **= 2)); // a = 50 * 2, a = 2500

// The /= Operator - The Division Assignment Operator divides a variable.
console.log((a /= 10)); // a = 2500 / 10, a = 250

// The %= Operator - The Remainder Assignment Operator assigns a remainder to a variable.
console.log((a %= 10)); // a = 250 % 10, a = 250 / 10, reminder 0, a = 0

// String Assignment - Two assignment operators can assign values to strings
let text = "Hello";

// The Addition Assignment Operator Can also be used to add strings.
text += " World";

console.log(text); // "Hello World"

/**
 *
 *
 * x &&= y	Assigns y to x only if x is truthy
 *
 * x ||= y	Assigns y to x only if x is falsy
 *
 * x ??= y	Assigns y to x only if x is null or undefined
 *
 *
 */

// The &&= Operator - The Logical AND assignment operator is used between two values.
// If the first value is true, the second value is assigned.
let d = true;
console.log("value of d is", (d &&= 10)); // value of d is 10

let d1 = false;
console.log("value of d1 is", (d1 &&= 10)); // value of d1 is false

let d2 = 1;
console.log("value of d2 is", (d2 &&= 10)); // value of d2 is 10

let d3 = 0;
console.log("value of d3 is", (d3 &&= 10)); // value of d3 is 0

let d4 = null;
console.log("value of d4 is", (d4 &&= 10)); // value of d4 is null

let d5 = undefined;
console.log("value of d5 is", (d5 &&= 10)); // value of d5 is undefined

// The ||= Operator - The Logical OR assignment operator is used between two values.
// If the first value is false, the second value is assigned.
let c = false;
console.log("value of c is", (c ||= 10)); // value of c is 10

let c1 = true;
console.log("value of c1 is", (c1 ||= 10)); // value of c1 is true

let c2 = null;
console.log("value of c2 is", (c2 ||= 10)); // value of c2 is 10

let c3 = undefined;
console.log("value of c3 is", (c3 ||= 10)); // value of c3 is 10

// The ??= Operator - The Nullish coalescing assignment operator is used between two values.
// If the first value is undefined or null, the second value is assigned.
let b;
console.log("value of b is", b ?? 10); // value of b is 10

let b1 = 0;
console.log("value of b1 is", b1 ?? 10); // value of b1 is 0

let b2 = null;
console.log("value of b2 is", b2 ?? 10); // value of b2 is 10

let b3 = undefined;
console.log("value of b3 is", b3 ?? 10); // value of b3 is 10
