/**
 *
 * while
 * while  (condition) {
 * // code block
 * }
 *
 * - Checks the condition first, before anything runs
 * - May run zero times if the condition start false
 * - Best when you are not sure the blocks should run at all
 */

/**
 *
 * do...while
 * do {
 * // code block
 * } while (condition);
 *
 * - Check the condition last, after the block runs
 * - Always runs at least once, no matter what
 * Best when the block must happen before any check
 *
 *
 */

// while

let p = 0;

while (p > 5) {
  console.log(i);
  p++;
} // condition false, never runs, don't enter inside loop

// do...while
let i = 0;
do {
  console.log(i);
  i++;
} while (i > 5); // Runs 1st time, enter inside loop and condition check it false, never run again
