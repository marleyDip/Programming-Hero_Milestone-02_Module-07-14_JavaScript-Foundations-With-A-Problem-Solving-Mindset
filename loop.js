/**
 *
 * A loop is a programming tool that repeats a block of code multiple times
 * - so you don't have to write it over and over again.
 * - The same action happens over and over until you decide to stop.
 *
 * - To repeat a task multiple times without writing duplicate code.
 *
 * 1. starting situation
 * 2. count value adapt
 * 3. Stopping condition (until it ends or a fixed number of times)
 * 4. repetitive same or similar task
 *
 *
 */

// const count = 0;
// let count = 0;
// count < 10;
// count++;
// console.log("do something");

// for (initialization; condition; modification / value_adjustment) {
//   // repetitive tasks
// }

// for (start; end; step or increment/decrement) {}

// for (variable; condition; update) {}

/**
 * for (expression 1; expression 2; expression 3) {}
 *
 * expression 1 is executed one time before the execution of the code block.
 *
 * expression 2 defines the condition for executing the code block
 *
 * expression 3 is executed every time the code block has been executed.
 *
 */

/**
 *
 * for (start; end; step) {}
 *
 * - Declaring a variable and giving it a value is called start.
 * - When it stops, it is called end.
 * - How many times it is performed is called step.
 *
 */

// Here run and debug with breakpoint
for (let count = 0; count < 5; count++) {
  console.log("do something");
}

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
 * - Break exits the loop; continue skips the current iteration
 *
 * */
