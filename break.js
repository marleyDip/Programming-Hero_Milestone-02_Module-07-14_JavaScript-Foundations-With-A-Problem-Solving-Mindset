/**
 *
 * break stops the loop - right now
 * - Exits the loop entirely & immediately;
 * - Skips everything after it
 * - Remaining iteration never run
 * - Hands control the next line
 * - Cancelled - never run
 * - First line after the loop
 * - No - loop is over
 * - Stop once a match is found
 *
 */

/**
 *
 * Common mistakes
 * - Thinking continue exits the loop
 * - using break/continue outside a loop
 * - Forgetting break in a switch statement
 * - writing dead code after break
 */

// break - execution stops
for (let i = o; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}

// Here, i => 0 - 1 - 2 - 3 (Execution Stops Here) - 4
// i = 4 never reached - the loop is dead.
// Console: 0 1 2

for (let i = 0; i <= 100; i++) {
  if (i > 5) {
    break;
  }
  console.log(i);
}

// while
let count = 0;

while (count < 10) {
  // if (count < 4) {
  if (count > 4) {
    console.log("Break up!");
    break;
  }

  console.log("Value of count", count);
  count++;
}

console.log("Life masti after breakup");
