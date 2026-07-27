/* Debug - Broken loop */

// console.log() -> is the best way to debug.

/**
 *
 * Condition
 * - Return the sum of all numbers from 1 to n (inclusive).
 *
 * - Kick out: To force someone to leave a place in an angry or rough way.
 * - Turn out: To make someone leave a home or a group.
 * - Eject: To force or push something or someone out.
 *
 *
 * Scope:
 * - Global scope
 * - Block scope
 * - Function scope
 *
 * Brainstorming:
 * 1) Is this loop including itself?
 * 2) Which members are actually being added?
 *
 */

function sumRange(n) {
  let total = 0; // its now Function scope; access inside loop, outside loop

  // for (let i = 1; i < n; i++) {
  for (let i = 1; i <= n; i++) {
    console.log("i ->", i); // i -> 1 but after i -> 1, i -> 2, i -> 3, i -> 4, i -> 5

    // let total = 0; // Block scope; Declare inside loop, make it Uncaught ReferenceError
    total += i;
    // return total; // compiler found return inside loop body, and turn out, kick out, or eject from this loop body
  }

  return total; // Here, ReferenceError: total is not defined, bcz want to access total, that's declare inside loop body
}

console.log(sumRange(5)); // Initially return total inside loop => 1; but when function scope and return outside the loop => 15

/**
 *
 Condition
 * - Return the sum of all members in the array
 *
 * Basic:
 * - Here, array index start with 0, 1, 2, ... 
 * - But array length count with 1, 2, .....
 * - toFixed() => Covert the number into String
 * 
 * Why do you get 60.739999999999995?
 * - Because JavaScript uses IEEE-754 floating-point arithmetic.
 * - console.log(20.22 + 30.52 + 10); // 60.739999999999995
 * - Don't round each number while adding. Add the original numbers first, then round the final result.
 * 
 * Brainstorming:
 * 1) What happens when i becomes equal to numbers.length?
 * 2) Which value doesn't have the .toFixed() method?
 */

function sumArray(numbers) {
  let total = 0;

  // for (let i = 0; i <= numbers.length; i++) { // i ->  0 10, i ->  1 20.2244, i ->  2 30.524, i ->  3 undefined
  for (let i = 0; i < numbers.length; i++) {
    console.log("i -> ", i, numbers[i]); // i ->  0 10, i ->  1 20.2244, i ->  2 30.524

    // total += numbers[i].toFixed(2);
    // TypeError: Cannot read properties of undefined (reading 'toFixed')

    // total += Number(numbers[i].toFixed(2)); // 60.739999999999995 number
    // total += parseFloat(numbers[i].toFixed(2)); // 60.739999999999995 number

    total += numbers[i];
  }

  // console.log(total, typeof total); // 010.0020.2230.52 string
  console.log(
    parseFloat(total.toFixed(2)),
    typeof parseFloat(total.toFixed(2)),
  ); // 60.75 number

  // return total;
  return Number(total.toFixed(2));
}

console.log(sumArray([10, 20.2244, 30.524]));

// const number = [10, 20.2244, 30.524];
// console.log(sumArray(number));

/**
 *
 * Condition
 * - Count how many even numbers are present in the array.
 *
 *
 * Brainstorming:
 * 1) Why are some numbers being skipped?
 * 2) Is i changing anywhere other than the loop declaration?
 */

function countEven(numbers) {
  let count = 0;

  // for (let i = 0; i < numbers.length, i++ {
  for (let i = 0; i < numbers.length; i++) {
    console.log("i -> ", i, numbers[i]);
    if (numbers[i] % 2 === 0) {
      // count++,
      count++;
      // i++; // update 1, 3, 5
    }
  }

  return count;
} // SyntaxError: Unexpected token '{'

console.log(countEven([2, 4, 6, 8, 10]));
