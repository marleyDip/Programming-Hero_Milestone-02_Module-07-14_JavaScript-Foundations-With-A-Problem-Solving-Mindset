// Find the Second Largest Number

// Since arrays and Math.max() are not allowed, you can solve it by comparing the numbers one by one.

// Using if-else
let a = 25;
let b = 10;
let c = 40;
let d = 30;
let e = 18;

let largest;
let secondLargest;

// Find the largest
// if (a >= b && a >= c && a > d && a >= e) largest = a;
// if (b >= a && b >= c && b > d && b >= e) largest = b;
// if (c >= a && c >= b && c > d && c >= e) largest = c;
// if (d >= a && d >= b && d > c && d >= e) largest = d;
// if (e >= a && e >= b && e > c && e >= d) largest = e;

if (a >= b && a >= c && a > d && a >= e) {
  largest = a;
} else if (b >= a && b >= c && b > d && b >= e) {
  largest = b;
} else if (c >= a && c >= b && c > d && c >= e) {
  largest = c;
} else if (d >= a && d >= b && d > c && d >= e) {
  largest = d;
} else {
  largest = e;
}

// Here if means true the go inside loop body and execute value; if false then not go
// if-else means if true then inside; otherwise go to else where logic is false, execute the inside body.

// Find the second largest
if (a !== largest && (secondLargest === undefined || a > secondLargest)) {
  secondLargest = a;
}
if (b !== largest && (secondLargest === undefined || b > secondLargest)) {
  secondLargest = b;
}
if (c !== largest && (secondLargest === undefined || c > secondLargest)) {
  secondLargest = c;
}
if (d !== largest && (secondLargest === undefined || d > secondLargest)) {
  secondLargest = d;
}
if (e !== largest && (secondLargest === undefined || e > secondLargest)) {
  secondLargest = e;
}

console.log("Second Largest =", secondLargest);

// Nested Ternary Operator
let largestValue =
  a >= b && a >= c && a >= d && a >= e
    ? a
    : b >= a && b >= c && b >= d && b >= e
      ? b
      : c >= a && c >= b && c >= d && c >= e
        ? c
        : d >= a && d >= b && c >= c && d >= e
          ? d
          : e;

let secondLargestValue = -Infinity;

if (a !== largestValue && a > secondLargestValue) secondLargestValue = a;
if (b !== largestValue && b > secondLargestValue) secondLargestValue = b;
if (c !== largestValue && c > secondLargestValue) secondLargestValue = c;
if (d !== largestValue && d > secondLargestValue) secondLargestValue = d;
if (e !== largestValue && e > secondLargestValue) secondLargestValue = e;

console.log("Second Largest =", secondLargestValue);

// Single-Pass - This is more efficient because it only checks each number once.
let maximumValue = a;
let secondMaximumValue = -Infinity;

// check b
if (b > maximumValue) {
  secondMaximumValue = maximumValue;
  maximumValue = b;
} else if (b > secondMaximumValue && b !== maximumValue) {
  secondMaximumValue = b;
}

// check c
if (c > maximumValue) {
  secondMaximumValue = maximumValue;
  maximumValue = c;
} else if (c > secondMaximumValue && c !== maximumValue) {
  secondMaximumValue = c;
}

// check d
if (d > maximumValue) {
  secondMaximumValue = maximumValue;
  maximumValue = d;
} else if (d !== maximumValue && d > secondMaximumValue) {
  secondMaximumValue = d;
}

// check e
if (e > maximumValue) {
  secondMaximumValue = maximumValue;
  maximumValue = e;
} else if (e !== maximumValue && e > secondMaximumValue) {
  secondMaximumValue = e;
}

console.log("Second Largest =", secondLargest);
