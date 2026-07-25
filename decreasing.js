// for (let i = 0; i <= 10; i++) {}

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

for (let i = 10; i >= 0; i = i - 2) {
  console.log(i);
}

console.log("START COUNT DOWN");
for (let i = 5; i >= 0; i--) {
  console.log(i);
}
console.log("BOOOOOOOOOOM");

// Subtract by 5
for (let i = 100; i >= 0; i -= 5) {
  console.log("The number is substitute by 5", i);
}

// Reverse Odd Numbers
for (let i = 9; i >= 1; i = i - 2) {
  console.log("Reverse odd number", i);
}

// Countdown from 20
for (let i = 20; i >= 0; i--) {
  console.log("Count Down", i);
}

console.log("Go!");

// Print 1 to 15
for (let i = 0; i <= 15; i++) {
  console.log("Print number", i);
}

// Every 3rd number
for (let i = 0; i <= 30; i += 3) {
  console.log("Every 3rd number from 0 to 30", i);
}

// Even number between 20 to 30
for (let i = 20; i <= 30; i = i + 2) {
  console.log("Even number", i);
}
