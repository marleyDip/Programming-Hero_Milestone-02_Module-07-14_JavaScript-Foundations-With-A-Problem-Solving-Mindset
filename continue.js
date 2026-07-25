/**
 *
 * continue skips one lap - the loop goes on
 * - Skips only the current iteration
 * - Skips just this one iteration
 * - The loop keeps running afterward
 * - Jumps to the update step
 * - The loop keeps going
 * - Still run normally
 * - Loop's update step. then re-check
 * - Skip value that don't qualify
 * - yes - loop keeps going
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

// continue - execution skips
for (let i = o; i < 5; i++) {
  if (i === 2) break;
  console.log(i);
}

// Here, i = 0 - 1 - 2 (Skipped - jumps to i++) - 3 - 4
// i = 2 is skipped only - 3 and 4 still print
// console: 0 1 3 4

for (let i = 0; i <= 10; i++) {
  if (i === 2) {
    continue;
  }
  console.log("Value of i", i);
}

// Odd number
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log("Odd number", i);
}
