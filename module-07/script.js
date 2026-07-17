// Display console.log() output on the webpage

const output = document.getElementById("output");

// Save the original console.log
const originalLog = console.log;

// Override console.log
// Here, ...args is the rest parameter. It collects all arguments into an array.
console.log = function (...args) {
  originalLog.apply(console, args);

  // Also display on the webpage
  output.textContent +=
    args
      .map((item) =>
        typeof item === "object" ? JSON.stringify(item, null, 2) : String(item),
      )
      .join(" ") + "\n";
};

// Module 07 _ Practice Task - Introduction to JavaScript

// Task 1 — Your First JavaScript Program
console.log("Hello JavaScript!");
console.log("My name is Alex.");
console.log("I am excited to become a Web Developer.");

console.log();

// Task 2 — Simple Math Calculator
console.log(
  "1. Create two number variables and print the results of the five basic arithmetic operations.",
);

let num1 = 25;
let num2 = 10;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);

console.log();

// Task 3 — Student Information
console.log(
  "2. Store student details in variables of the appropriate type and print them.",
);

let studentName = "Alex Johnson";
let age = 20;
let country = "Bangladesh";
let isStudent = true;

console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Country:", country);
console.log("Is Student:", isStudent);

console.log();

// Task 4 — Identify Data Types
console.log(
  "3. Use the typeof operator to check the data type of each variable.",
);

let a = 100;
let b = "Programming";
let c = true;
let d = false;
let e = 3.1416;

console.log("a: 100 -", typeof a); // number
console.log("b: " + '"Programming"' + " -", typeof b); // string
console.log("c: true -", typeof c); // boolean
console.log("d: false -", typeof d); // boolean
console.log("e: 3.1416 -", typeof e); // number

console.log();

// Task 5 — Variable Naming Challenge
console.log(
  "4. Only names that follow JavaScript's identifier rules (start with a letter, $, or _; no hyphens; not a reserved keyword) are valid.",
);

let firstName = "Alex";
let First_Name = "Alex";
let user123 = 1;
let $price = 19.99;
let _total = 0;

console.log(firstName, First_Name, user123, $price, _total);

console.log();

// Task 6 — Personal Bio
console.log(
  "5. Store personal details and print a friendly, formatted introduction.",
);

let name = "Alex";
let profileAge = 20;
let favoriteFood = "Pizza";
let favoriteLanguage = "JavaScript";
let lovesCoding = true;

console.log("Hello!");
console.log("My Name is " + name + ".");
console.log("I am " + profileAge + " years old.");
console.log("My favorite food is " + favoriteFood + ".");
console.log("My favorite programming language is " + favoriteLanguage + ".");
console.log("I love coding:", lovesCoding);

console.log();

// Task 7 — Arithmetic Practice
console.log(
  "6. Take two numbers and print the results of all five arithmetic operations, matching the example format.",
);

let number1 = 50;
let number2 = 8;

console.log("Number1:", number1);
console.log("Number2:", number2);

console.log();

console.log("Addition:", number1 + number2);
console.log("Subtraction:", number1 - number2);
console.log("Multiplication:", number1 * number2);
console.log("Division:", number1 / number2);
console.log("Modulus:", number1 % number2);

console.log();

// Task 8 — Shorthand Operators
console.log(
  "7. Apply each shorthand operator to score and print the value after every step.",
);

let score = 50;

console.log("Initial Score:", score);

score += 10;
console.log("After +=10:", score);

score -= 5;
console.log("After -=5:", score);

score *= 2;
console.log("After *=2:", score);

score /= 5;
console.log("After /=5:", score);

score %= 4;
console.log("After %=4:", score);

console.log();

// Task 9 — Mini Coding Challenge
console.log(
  "8. Calculate the total price, discount amount, and final price for a purchase.",
);

let price = 200;
let quantity = 3;
let discount = 10; // percent

let totalPrice = price * quantity;
let discountAmount = (totalPrice * discount) / 100;
let finalPrice = totalPrice - discountAmount;

console.log("Total Price:", totalPrice);
console.log("Discount Amount:", discountAmount);
console.log("Final Price:", finalPrice);

console.log();

// Mini Project — Personal Introduction Card
console.log(
  "9. A complete program that stores personal information and prints a formatted profile card.",
);

let fullName = "John Doe";
let userAge = 22;
let profileCountry = "Bangladesh";
let topChoiceLanguage = "JavaScript";
let dreamJob = "Full-Stack Developer";
let yearsToGoal = 1;
let isLearningJS = true;

console.log("========================");
console.log("       MY PROFILE");
console.log("========================");

console.log();

console.log("Name:", fullName);
console.log("Age:", userAge);
console.log("Country:", profileCountry);
console.log("Favorite Language:", topChoiceLanguage);
console.log("Dream Job:", dreamJob);
console.log("Years to Reach Goal:", yearsToGoal);
console.log("Learning JavaScript:", isLearningJS);

console.log();

console.log("========================");

console.log();

// Bonus Challenge — Shopping Bill
console.log(
  "10. CalculatorCalculate a subtotal, tax amount, and grand total, then print a neat bill.",
);

let productName = "Wireless Mouse";
let productPrice = 15;
let productQuantity = 4;
let taxPercent = 5;

let subTotal = productPrice * productQuantity;
let taxAmount = (subTotal * taxPercent) / 100;
let grandTotal = subTotal + taxPercent;

console.log("---- Shopping Bill ----");
console.log("Product:", productName);
console.log("Price per unit:", productPrice);
console.log("Quantity:", productQuantity);
console.log("Subtotal:", subTotal);
console.log("Tax (" + taxPercent + "%):", taxAmount);
console.log("Grand Total:", grandTotal);
console.log("------------------------");
