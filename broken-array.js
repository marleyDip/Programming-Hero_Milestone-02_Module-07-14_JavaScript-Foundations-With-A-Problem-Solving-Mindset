/* Debug - Broken Array */

// console.log() -> is the best way to debug.

/**
 *
 * Problem 1:
 * Purpose: should return the last 2 elements of the array as a new array.
 *
 * Bugs: 2
 * - 1. syntax
 * - 2. runtime / logic
 *
 * Expected: getLastTwo([10, 20, 30, 40]) => [30, 40]
 *
 */

// function getLastTwo(arr)= { // SyntaxError: Unexpected token '='
function getLastTwo(arr) {
  // return arr.slice(arr.length - 1, arr.length; // SyntaxError: missing ) after argument list

  // return arr.slice(arr.length - 1, arr.length); // logic, arr.slice(3, 4); (start point, before end point)

  return arr.slice(arr.length - 2, arr.length);

  // return result.toUpperCase(); // it's unnecessary bcz it's not string
}

console.log(getLastTwo([10, 20, 30, 40]));

/**
 *
 * Problem 2:
 * Purpose: should return the index of target inside arr or -1 if not found.
 *
 * Bugs: 2
 * - 1. runtime
 * - 2. logic (off-by-one causes the runtime error)
 *
 * Expected: findIndexOfValue([10, 20, 30], 20) => 1
 *
 */

function findIndexOfValue(arr, target) {
  // for (let i = 0; i <= arr.length; i++) { // i -> 0 10, i -> 1 20, i -> 2 30, i -> 3 undefined

  for (let i = 0; i < arr.length; i++) {
    console.log("i ->", i, arr[i]);

    if (arr[i].toString() === target.toString()) {
      console.log(target.toString()); // 20, here not enter 1000 bcz arr[i].toString() === target.toString()
      console.log(arr[i].toString()); // 20

      return i;
    }
  }

  return -1;
}

console.log(findIndexOfValue([10, 20, 30], 1000)); // TypeError: Cannot read properties of undefined (reading 'toString') bcz of i <= arr.length

console.log(findIndexOfValue([10, 20, 30], 20)); // 1

/**
 *
 * Problem 3:
 * Purpose: should return average of only the positive number in arr.
 *
 * Bugs: 3
 * - 1. all logic errors
 *
 * Expected: averageOfPositives([-5, 10, 15, -2, 5]) => 10
 *
 */

function averageOfPositives(arr) {
  let total = 0;
  // let count = 0;
  const count = arr.length;

  for (let i = 0; i < arr.length; i++) {
    console.log("outside i->", i, arr[i]);

    if (arr[i] > 0) {
      console.log("inside i->", i, arr[i]);

      // total = arr[i].toFixed();
      // total += arr[i].toFixed(); // 2030
      total += Number(arr[i].toFixed(2));

      // console.log("The Count", count++); // 0, 2, 4, 6
      // count++;
      // console.log("The Count", count);
    }

    // count++;
    // console.log("The Count", count++);
  }

  console.log("Total", total);

  // return total / (count - 1);
  return total / count;
}

console.log(averageOfPositives([-5, 10.22, 15.232, -2, 5]));
