// 1, 2, 3, 4, 5
// Sum of all digit = 15

// step-1: show 1 to 10 numbers
// step-2: declare a variable outside for loop
// step-3: fetch number one by one and add & store in sum variable inside loop body

let sum = 0;
for (let i = 0; i <= 10; i++) {
  console.log("The number is", i);
  // sum = sum + i;
  sum += i;
  console.log("The Sum is", sum);
}
