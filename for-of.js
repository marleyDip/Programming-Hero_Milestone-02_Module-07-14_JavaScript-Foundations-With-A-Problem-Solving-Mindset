// Array Traversal Using for and while Loop

// for...of loop gets one value from the array in each iteration
// for...of loops through an iterable and gives one value at a time.

// for...of gets each value directly from the array one by one, so no index is needed

const numbers = [87, 54, 12, 63, 41, 87, 51];

// for...of returns array values.
for (const number of numbers) {
  console.log("Current item is:", number);
}

console.log();

const friends = ["balam", "kalam", "salam", "gelam", "khailam"];

for (const f of friends) {
  console.log(f);
}

console.log();

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (const row of matrix) {
  console.log("Using for...of", row);
  // [1, 2, 3]
  // [4, 5, 6]
  // [7, 8, 9]
}

console.log();

for (const row of matrix) {
  for (const cell of row) {
    console.log("Using for...of for nested array", cell);
    // 1
    // 2 ... 9
  }
}

console.log();

/* compare with forEach => for...of improve code readability, especially when dealing with nested structures or complex operations */
matrix.forEach((row) => {
  row.forEach((cell) => {
    console.log("Using forEach instead of for...of", cell);
  });
});

console.log();

// Breaking and Continuing Loops => These features make for...of more powerful and versatile for complex iteration logic.

const numbers2 = [1, 2, 3, 4, 5];

for (const number of numbers2) {
  if (number === 3) {
    break;
  }
  console.log("Using for...of with break", number); // 1, 2
}

console.log();

for (const number of numbers2) {
  if (number === 3) {
    continue;
  }
  console.log("Using for...of with continue", number); // 1, 2, 4, 5
}

console.log();

// here p values 10, 20, ... store or pass in v
//  array is special kind of object, so it gives object values one by one, not object numbered index

// for...in = it uses in object for access key - value pair....mainly in array it used for access number index, generally not array

for (let number in numbers2) {
  console.log("Using for...in", number, numbers2[number]);
}

let v1 = [10, 20, 30, [77, 80], 40, [45, 60], 50];

let flatMapArray = v1.flatMap((x) =>
  Array.isArray(x) ? x.map((y) => y * 3) : [x * 2],
);
console.log(flatMapArray);
