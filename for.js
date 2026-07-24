/**
 *
 * for (initialization; condition; modification) {
 *  repetitive
 * }
 *
 */

for (let i = 0; i < 10; i++) {
  console.log("value of i", i);
}

/**
 * Run and Debug - Obviously give a breakpoint
 *
 * Without breakpoint, it won't work as expected
 *
 * 1st i = 0; check O < 10; true, enter the loop body and execute, see debug console = value of i 0
 *
 * Then it go modification or update or step or increment/decrement, i++ = 0 increases to 1, in variable -> block i = 1 and check 1 < 10; true, enter the loop body and execute 2nd time, see debug console = value of i 1
 *
 *
 * continue process... see debug console = value of i 2 ... see debug console = value of i 9
 *
 * when is it 10, check 10 < 10; false, exit the loop and automatically terminate or end Run and Debug
 */

console.log();

// Find even and odd numbers from 1 to 20
for (let number = 0; number <= 20; number++) {
  if (number % 2 === 1) {
    console.log("The odd number is", number);
  } else {
    console.log("The even number is", number);
  }
}

console.log();

let evenNumbers = [];
let oddNumbers = [];

for (let numbers = 0; numbers <= 50; numbers++) {
  if (numbers % 2 === 0) {
    evenNumbers.push(numbers);
    console.log(`Even Number: ${numbers}`);
  } else {
    oddNumbers.push(numbers);
    console.log(`Odd Number: ${numbers}`);
  }
}

console.log("\nAll Even Numbers:", evenNumbers);
console.log("All Odd Numbers:", oddNumbers);
console.log();

// Prime numbers are whole numbers greater than 1 that can only be divided evenly by exactly two numbers: 1 and themselves.
// Find All Prime Numbers from 1 to 100
for (let primeNumber = 2; primeNumber <= 100; primeNumber++) {
  let isPrime = true;

  for (let p = 2; p < primeNumber; p++) {
    if (primeNumber % p === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(primeNumber, "is a prime number");
  }
}

/**
 *
 * Here, primeNumber = 2,3,4,...,100
 * nested for, p = 2,3,4....
 *
 * Spouse, primeNumber = 12, i = 2,3,4,....11; it check 12 % 2, 12 % 3, ......
 *
 * inside loop body, it found 12 % 2 === 0, make the isPrime = false and exits the body by break keyword
 *
 * last print prime number
 */

console.log();

let primeNumbers = [];
for (let num = 2; num <= 100; num++) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    primeNumbers.unshift(num);
  }
}

console.log("All Prime Number are:", primeNumbers);
console.log();

/**
 *
 * But here, if prime number = 36, its √36 = 6, so no need to check 9 x 4, 12 x 4 because of already check in upper 1 x 36, 2 x 18, 3 x 12, 4 x 9...its efficient solution
 *
 * Solution	                Time Complexity
 * - i < num	            O(n²)
 * - i <= Math.sqrt(num)	O(n√n)
 *
 * - O(n√n) => sub-quadratic polynomial time complexity ( O(n²) + O(nlogn) )
 * - O(n²) => quadratic
 * - O(nlogn) => linearithmic
 *
 */

// A perfect number is a number that is equal to the sum of its positive divisors (excluding itself).
let number = 14;
let sum = 0;

for (let i = 1; i < number; i++) {
  if (number % i === 0) {
    sum += i;
  }
}

if (sum === number) {
  console.log("Total sum:", sum);
  console.log(`${number} is a perfect number`);
} else {
  console.log("Total sum:", sum);
  console.log(`${number} is not a perfect number`);
}

console.log();

// num - 1 পর্যন্ত যাওয়ার দরকার নেই। Prime checker-এর মতো এখানেও Math.sqrt() ব্যবহার করা যায়।
// কেন এটি দ্রুত? যখন 28-কে 2 দিয়ে ভাগ করলে 14 পাওয়া যায়, তখন একই সঙ্গে দুটি divisor (2 এবং 14) পাওয়া যায়। তাই √num পর্যন্ত গেলেই সব divisor পাওয়া সম্ভব।

let num = 28;
let add = 1;

for (let i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0) {
    add += i;

    if (i !== num / i) {
      add += num / i;
    }
  }
}

if (num === 1) {
  console.log("1 is NOT a Perfect Number");
} else if (add === num) {
  console.log("Total sum:", add);
  console.log(`${num} is a Perfect Number`);
} else {
  console.log("Total sum:", add);
  console.log(`${num} is NOT a Perfect Number`);
}

/* Solution	                Complexity
Loop from 1 to (num - 1)	O(n)

Loop up to √num	            O(√n) */
