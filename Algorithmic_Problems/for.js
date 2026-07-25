// Find the Second Largest Number

// Using a loop is much cleaner. Since arrays are not allowed, you can first store the numbers in individual variables and check them inside a switch within a loop.
let a = 25;
let b = 10;
let c = 40;
let d = 30;
let e = 18;

let largest = -Infinity;
let secondLargest = -Infinity;

// Standard way to use for because we know how many time it repetition - 5 times
for (let i = 1; i <= 5; i++) {
  let num;

  switch (i) {
    case 1:
      num = a;
      break;
    case 2:
      num = b;
      break;
    case 3:
      num = c;
      break;
    case 4:
      num = d;
      break;
    case 5:
      num = e;
      break;
  }

  if (num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (num > secondLargest && num !== largest) {
    secondLargest = num;
  }
}

console.log("Using for, Largest =", largest);
console.log("Using for, Second Largest =", secondLargest);

// we also use while
let largestValue = -Infinity;
let secondLargestValue = -Infinity;

let i = 1;

while (i <= 5) {
  let num;

  switch (i) {
    case 1:
      num = a;
      break;
    case 2:
      num = b;
      break;
    case 3:
      num = c;
      break;
    case 4:
      num = d;
      break;
    case 5:
      num = e;
      break;
  }

  if (num > largestValue) {
    secondLargestValue = largestValue;
    largestValue = num;
  } else if (num > secondLargestValue && num !== largestValue) {
    secondLargestValue = num;
  }

  i++;
}

console.log("Using while, Largest =", largestValue);
console.log("Using while, Second Largest =", secondLargestValue);

// do...while
let maximum = -Infinity;
let secondMaximum = -Infinity;

let n = 1;

do {
  let num;

  switch (n) {
    case 1:
      num = a;
      break;
    case 2:
      num = b;
      break;
    case 3:
      num = c;
      break;
    case 4:
      num = d;
      break;
    case 5:
      num = e;
      break;
  }

  if (num > maximum) {
    secondMaximum = maximum;
    maximum = num;
  } else if (num !== maximum && num > secondMaximum) {
    secondMaximum = num;
  }

  n++;
} while (n <= 5);

console.log("Using do...while, Largest =", maximum);
console.log("Using do...while, Second Largest =", secondMaximum);

// Print, Count, Largest, smallest and sum of all prime numbers between 1 and 100.
// For interviews and coding tests, the optimized version (i * i <= num) is preferred because it performs fewer divisor checks while producing the same result.

// Prime numbers are whole numbers greater than 1 that can only be divided evenly by exactly two numbers: 1 and themselves.
// Using Nested Loops with Optimized Solution (Check up to √n)
// if count and sum declare inside outer for loop, every time when loop modification or update or step or increment/decrement...count and sum will be 0, like isPrime = true

let count = 0;
let sum = 0;
let largestPrime = 0;
let smallestPrime = 0;

for (let num = 2; num <= 100; num++) {
  let isPrime = true;

  // for (let i = 2; i < num; i++) {}

  // here i = 2, 3, 4....10 and i * i = 4, 9, 16, 25, 36, 49, 64, 81, 100
  // Check if the number is prime
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  // If prime
  if (isPrime) {
    console.log("The prime number is:", num);
    console.log(`${num} is a prime number -`, isPrime);
    // console.log(`${num} is a prime number - ${isPrime}`, isPrime);

    count++;
    sum += num;
    largestPrime = num; // The latest prime is always the largest so far

    // The first prime encountered is the smallest prime
    if (smallestPrime === 0) smallestPrime = num;
  }
}

console.log(`
╭─────────────────────────────────────╮
│         PRIME NUMBER REPORT         │
├─────────────────────────────────────┤
│ 🔢 Total Prime Numbers : ${count.toString().padEnd(11)}│
│ ➕ Sum of Prime Numbers : ${sum.toString().padEnd(10)}│
│ 🏆 Largest Prime Number: ${largestPrime.toString().padEnd(11)}│
│ 🏆 Smallest Prime Number: ${smallestPrime.toString().padEnd(10)}│
├─────────────────────────────────────┤
│ 🎉 Status : Completed Successfully  │
╰─────────────────────────────────────╯
`);

// Ascending loop: first = minimum, last = maximum.
// Descending loop: first = maximum, last = minimum.
// Print, Count, Largest, smallest and sum of all prime numbers between 100 and 1.
let total = 0;
let calculate = 0;
let highestPrime = 0;
let lowestPrime = 0;

for (let num = 100; num >= 2; num--) {
  let isPrime = true;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log("The prime number is:", num);
    console.log(`${num} is a prime number - ${isPrime}`);

    total++;
    calculate += num;
    lowestPrime = num;

    // The first prime encountered is the highest prime
    if (highestPrime === 0) {
      highestPrime = num;
      // break; // Stop because we found the largest prime
    }
  }
}

console.log("\n╔════════════════════════════════════╗");
console.log("║       PRIME NUMBER REPORT          ║");
console.log("╠════════════════════════════════════╣");
console.log(`║ Total Primes   : ${total.toString().padEnd(18)}║`);
console.log(`║ Prime Sum      : ${calculate.toString().padEnd(18)}║`);
console.log(`║ Highest Prime  : ${highestPrime.toString().padEnd(18)}║`);
console.log(`║ Lowest Prime   : ${lowestPrime.toString().padEnd(18)}║`);
console.log("╚════════════════════════════════════╝");

// console.log("\n======================================");
// console.log("      PRIME NUMBER STATISTICS");
// console.log("======================================");
// console.log(`📌 Total Prime Numbers : ${count}`);
// console.log(`➕ Sum of Prime Numbers : ${sum}`);
// console.log("======================================");

// console.log("\n✨✨✨ PRIME NUMBER REPORT ✨✨✨");
// console.log("────────────────────────────────────");
// console.log(`🔢 Total Prime Numbers : ${count}`);
// console.log(`🧮 Sum of Prime Numbers: ${sum}`);
// console.log("🎉 Program Completed Successfully!");

// console.log("\n🚀=======================================🚀");
// console.log("         PRIME NUMBER ANALYSIS");
// console.log("🚀=======================================🚀");
// console.log(`✅ Prime Count : ${count}`);
// console.log(`💯 Prime Sum   : ${sum}`);
// console.log("🎯 Task Completed Successfully!");
// console.log("🚀=======================================🚀");
