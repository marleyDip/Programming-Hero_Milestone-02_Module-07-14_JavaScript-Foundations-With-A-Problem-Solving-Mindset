/**
 *
 * Which loop is usually useful when the number of repetitions depends on a condition?
 * - while loop
 *
 * Which loop is generally preferred when you know the number of repetitions beforehand?
 * - for loop
 *
 * Why is updating the loop variable important?
 * - It helps the loop eventually reach its stopping condition
 *
 * What can happen if a loop condition never becomes false?
 * - The loop may run infinitely
 *
 * What is the difference between break and continue?
 * - Break exits the loop, continue skips the current iteration
 *
 * */

// for used for known iteration and while used for unknown iteration.

// for (let i = 899; i < 903; i++) {}

let count = 899;
while (count < 903) {
  console.log("Inside while loop", count);
  // count++;
  // if not increment, it goes infinite Inside while loop 899
  count++;
}

console.log();

// is Same as => if (true) {} but in while upper declare a variable and inside loop body increment or decrement

// Keep adding the digits until only one digit remains.
let num = 9875;

while (num >= 10) {
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }

  num = sum;
}

console.log("Repeated Digit Sum:", num);

/**
 *
 * num >= 10 => check number is two or more digit, add or sum those number
 *
 * Every time, digit addiction start with 0 because sum declare inside outer while loop
 *
 *
 * Inner while loop, 1st round
 * 1st Iteration
 * - digit = num % 10; 9875 % 10 = 5
 * - sum += digit; sum = 5
 * - num = Math.floor(num / 10); 9875 / 10 = 987.5, Math.floor() = 987
 *
 * 2ns Iteration
 * - num = 987
 * - digit = 7
 * - sum = 12
 * - num = 98
 *
 * 3rd Iteration
 * - num = 98
 * - digit = 8
 * - sum = 20
 * - num = 9
 *
 * 4rd Iteration
 * - num = 9
 * - digit = 9
 * - sum = 29
 * - num = 0
 *
 * End of inner loop
 *
 * num = sum; num = 29
 *
 * Outer loop; 29 >= 10
 *
 * Inner loop, 2nd round
 * - sum = 11; num = 11
 *
 * Last round
 * - sum = 2; num = 2
 *
 * Outer loop, 2 >= 10 false
 *
 */
