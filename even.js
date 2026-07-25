// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

for (let i = 101; i < 10; i++) {
  console.log(i);
} // false, never execute loop body

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 135; i <= 149; i = i + 2) {
//   console.log(i);
// }

for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 0; i <= 50; i += 5) {
  console.log(i);
}

for (let i = 2; i <= 20; i = i + 2) {
  console.log("The even number is", i);
}
