/**
 *
 * *****Comparison Operators*****
 *
 * Comparison operators are used to compare two values.
 * Comparison operators always return true or false.
 *
 * Given that x = 5, the table below explains the comparison operators:
 *
 * Operator	      Description	                         Comparing	   Returns
 * ==	          equal to	                             x == 8	       false
 *                                                       x == 5	       true
 *                                                       x == "5"	   true
 *
 * ===	          equal value and equal type	         x === 5	   true
 *                                                       x === "5"	   false
 *
 * !=	          not equal	x                            != 8	       true
 *
 * !==	          not equal value or not equal type	     x !== 5	   false
 *                                                       x !== "5"	   true
 *                                                       x !== 8	   true
 *
 * >	          greater than	                         x > 8	       false
 * <	          less than	                             x < 8	       true
 * >=	          greater than or equal to	             x >= 8	       false
 * <=	          less than or equal to	                 x <= 8	       true
 *
 *
 * Comparison operators can be used in conditional statements to compare values and take action depending on the result:
 * if (age < 18) text = "Too young to buy alcohol";
 *
 *
 */

// JavaScript String Comparison - Note that strings are compared alphabetically:
let text1 = "A";
let text2 = "B";
console.log("Is A less than B?", text1 < text2); // true

// Comparing Different Types - Comparing data of different types may give unexpected results.
// When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison.
console.log(2 < 12); // true
console.log(2 < "12"); // 2 < 12, true

// A non-numeric string converts to NaN which is always false.
console.log(2 < "Deep"); // false
console.log(2 > "Deep"); // false
console.log(2 == "Deep"); // false

// An empty string converts to 0.
console.log(2 < ""); // 2 < 0, false
console.log(2 > ""); // true

console.log("2" < "12"); // false
console.log("2" > "12"); // true
console.log("2" == "12"); // false

let text3 = "20";
let text4 = "5";
let result = text3 < text4;

console.log("Is 20 less than 5?", result); // true

/**
 *
 * Why is the result true?
 *
 * Both text1 and text2 are strings, not numbers.
 *
 * When JavaScript compares two strings using <, >, <=, or >=, it performs a lexicographical (dictionary/alphabetical) comparison, not a numeric comparison.
 *
 * Step-by-step comparison
 * "20" < "5"
 * JavaScript compares the strings character by character.
 * Compare the first characters: "2" vs "5"
 *
 * Compare their Unicode (ASCII) values:
 * "2" → 50
 * "5" → 53
 * Since: 50 < 53
 *
 * JavaScript concludes: "20" < "5" // true
 *
 * It never gets to compare the second character ("0").
 *
 * If they were numbers
 * let text1 = 20;
 * let text2 = 5;
 * console.log(text1 < text2);
 * Output: false
 * Because: 20 < 5, is obviously false.
 *
 * Convert strings to numbers
 * If you want a numeric comparison, convert the strings first.
 *
 * let text1 = "20";
 * let text2 = "5";
 * let result = Number(text1) < Number(text2);
 * console.log(result); // false
 *
 * let result = +text1 < +text2;
 *
 * Rule to remember
 * 1. String vs String → Lexicographical (dictionary) comparison
 * 2. Number vs Number → Numeric comparison
 * 3. String vs Number → JavaScript usually converts the string to a number before comparing.
 *
 */

console.log("apple" < "banana"); // true
console.log(Number("20") < Number("5")); // false

let voteable;
const age1 = "deep"; // Input is not a number
// const age = "12"; // Said correctly Too young
const age = 20;

if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = Number(age) < 18 ? "Too young" : "Old enough";
}

console.log(
  "variables should be converted to the proper type before comparison -",
  voteable,
);

/* ===== JavaScript unary + operator ===== */

/**
 * +"20" = 20
 * +"20" + 5 = 25
 * "20" + 5 = "205"
 * +"20" + +"5" = 25
 * +"20" +"5" = "205"
 * +"abc" = NaN
 *
 * +true = 1
 * +false = 0
 * +null = 0
 * +undefined = NaN
 *
 * +"" = 0
 * +" " = 0
 * +"0" = 0
 * +"0010" = 10
 * +"0x10" = 16
 * +"10.5" = 10.5
 * +"10px" = NaN
 *
 * +[] = 0
 * +[5] = 5
 * +[5,6] = NaN
 * +{} = NaN
 */

console.log(+"20" + +"30"); // 50
console.log("20" + +"30"); // "2030"
console.log(+"20" + "30"); // "2030"

console.log(+"20" - "5"); // 15
console.log(+"20" * "5"); // 100
console.log(+"20" / "5"); // 4

console.log(+"20" == "20"); // true
console.log(+"20" === "20"); // false

console.log(+""); // 0
console.log(+[]); // 0
console.log(+[10]); // 10
console.log(+[10, 20]); // NaN

// Mini Quiz
console.log(+"10" + +"20" + "30"); // "3030"
console.log("10" + +"20" + +"30"); // "102030"

console.log(+true + +false + +"5"); // 6
console.log(+null + +undefined); // NaN

console.log(+"0xF"); // 15

console.log(+[]); // 0
console.log(+[1]); // 1
console.log(+[1, 2]); // NaN

console.log(+{} + 1); // Nan
