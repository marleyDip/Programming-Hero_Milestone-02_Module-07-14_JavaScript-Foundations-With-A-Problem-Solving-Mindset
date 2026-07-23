// Auto-generated: a readable copy of script.js, used only to
// populate the Source tab. Loaded as a real script (not fetched),
// so it works the same whether opened via file:// or a server.
// Static copy of the source, embedded as raw text so the Source tab can display it without relying on fetch() over file://

window.MODULE_SOURCE = `
/* ===== Module 07 _ Practice Task - Introduction to JavaScript ===== */

// Task 1 — Your First JavaScript Program
console.log("Hello JavaScript!"); // Hello JavaScript!
console.log("My name is Alex."); // My name is Alex.
console.log("I am excited to become a Web Developer."); // I am excited to become a Web Developer.

// Task 2 — Simple Math Calculator
// Create two number variables and print the results of the five basic arithmetic operations.
let num1 = 25;
let num2 = 10;

console.log("Addition:", num1 + num2); // Addition: 35
console.log("Subtraction:", num1 - num2); // Subtraction: 15
console.log("Multiplication:", num1 * num2); // Multiplication: 250
console.log("Division:", num1 / num2); // Division: 2.5
console.log("Modulus:", num1 % num2); // Modulus: 5
console.log("Exponentiation:", num1 ** num2); // Exponentiation: 95367431640625

// num1 ** num2 produces the same result as Math.pow(num1,num2):

let x = 5;
let y = Math.pow(x, 2);
console.log(
  "Exponentiate is a mathematical operation written as \\(a^{n}\\), where a base a is raised to a power n - ",
  y,
);

// Task 3 — Student Information
// Store student details in variables of the appropriate type and print them.
let studentName = "Alex Johnson";
let age = 20;
let country = "Bangladesh";
let isStudent = true;

console.log("Student Name:", studentName); // Student Name: Alex Johnson
console.log("Age:", age); // Age: 20
console.log("Country:", country); // Country: Bangladesh
console.log("Is Student:", isStudent); // Is Student: true

// Task 4 — Identify Data Types
// Use the typeof operator to check the data type of each variable.
let a = 100;
let b = "Programming";
let c = true;
let d = false;
let e = 3.1416;

console.log("a:", typeof a); // number
console.log("b:", typeof b); // string
console.log("c:", typeof c); // boolean
console.log("d:", typeof d); // boolean
console.log("e:", typeof e); // number

// Task 5 — Variable Naming Challenge
// Only names that follow JavaScript's identifier rules (start with a letter, $, or _; no hyphens; not a reserved keyword) are valid.

/**
 *
 * Valid names:
 * ● firstName — valid (camelCase)
 * ● First_Name — valid (letters and underscore allowed)
 * ● user123 — valid (numbers allowed after the first character)
 * ● $price — valid ($ is a legal starting
 * character)
 * ● _total — valid (_ is a legal starting character)
 * ● 123user — invalid (cannot start with a number)
 * ● my-name — invalid (kebab-case hyphens are not allowed in identifiers)
 * ● let — invalid (reserved keyword)
 *
 */

let firstName = "Alex";
let First_Name = "Alex";
let user123 = 1;
let $price = 19.99;
let _total = 0;

console.log(firstName, First_Name, user123, $price, _total); // Alex Alex 1 19.99 0

// Task 6 — Personal Bio
// Store personal details and print a friendly, formatted introduction.

let name = "Alex";
let profileAge = 20;
let favoriteFood = "Pizza";
let favoriteLanguage = "JavaScript";
let lovesCoding = true;

console.log("Hello!"); // Hello!
console.log("My Name is " + name + "."); // My Name is Alex.
console.log("I am " + profileAge + " years old."); // I am 20 years old.
console.log("My favorite food is " + favoriteFood + "."); // My favorite food is Pizza.
console.log("My favorite programming language is " + favoriteLanguage + "."); // My favorite programming language is JavaScript.
console.log("I love coding:", lovesCoding); // I love coding: true

// Task 7 — Arithmetic Practice
// Take two numbers and print the results of all five arithmetic operations, matching the example format.
let number1 = 50;
let number2 = 8;

console.log("Number1:", number1); // Number1: 50
console.log("Number2:", number2); // Number2: 8
console.log();
console.log("Addition:", number1 + number2); // Addition: 58
console.log("Subtraction:", number1 - number2); // Subtraction: 42
console.log("Multiplication:", number1 * number2); // Multiplication: 400
console.log("Division:", number1 / number2); // Division: 6.25
console.log("Modulus:", number1 % number2); // Modulus: 2
console.log("Exponentiation:", number1 ** number2); // Exponentiation: 39062500000000

// Task 8 — Shorthand Operators
// Apply each shorthand operator to score and print the value after every step.
let score = 50;

score += 10; // score = score + 10
console.log("After +=10:", score); // After +=10: 50 + 10 = 60

score -= 5; // score = score - 5
console.log("After -=5:", score); // After -=5: 60 -5 = 55

score *= 2; // score = score * 2
console.log("After *=2:", score); // After *=2: 55 * 2 = 110

score /= 5; // score = score / 5
console.log("After /=5:", score); // After /=5: 110 / 5 = 22

score %= 4; // score = score % 4
console.log("After %=4:", score); // After %=4: 22 % 4 = 2

// Task 9 — Mini Coding Challenge
// Calculate the total price, discount amount, and final price for a purchase.
let price = 200;
let quantity = 3;
let discount = 10; // percent

let totalPrice = price * quantity;
let discountAmount = (totalPrice * discount) / 100;
let finalPrice = totalPrice - discountAmount;

console.log("Total Price:", totalPrice); // Total Price: 600
console.log("Discount Amount:", discountAmount); // Discount Amount: 60
console.log("Final Price:", finalPrice); // Final Price: 540

// Task 10 — Console Quiz (Answers)
let q = 20;
let w = 5;
console.log(q + w); // 25

let language = "JavaScript";
console.log(typeof language); // string

let isOnline = false;
console.log(typeof isOnline); // boolean

let num = 10;
num += 5;
console.log(num); // 15

let a1 = 30;
let b1 = 7;
console.log(a1 % b1); // 2

// Mini Project — Personal Introduction Card
// A complete program that stores personal information and prints a formatted profile card.
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

// Bonus Challenge — Shopping Bill
// CalculatorCalculate a subtotal, tax amount, and grand total, then print a neat bill.
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
`;
