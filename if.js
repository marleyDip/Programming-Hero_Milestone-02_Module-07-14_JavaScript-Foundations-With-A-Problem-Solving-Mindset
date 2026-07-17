/**
 * ----------------------
 *     Structure
 * ----------------------
 * if(condition) {
 *
 * } else {
 *
 * }
 *
 * if (true) {
 *    then enter here
 * } else {
 *   do not enter here
 * }
 *
 * if (false) {
 *    do not enter here
 * } else {
 *   enter here if false
 * }
 */

if (true) {
  console.log("Inside the condition");
}

// if false cannot go condition without true
if (false) {
  console.log("Inside the condition");
}

if (8 > 3) {
  console.log("Condition true, print it");
  console.log("8 is bigger than 3");
}

if (8 < 3) {
  console.log("Condition false, not print it");
  console.log("3 is smaller than 8");
}

if (50 <= 50) {
  console.log("coming inside the condition");
  console.log("50 is equal or smaller than 50");
}

const price = 140;

if (price < 500) {
  console.log("Price is lower");
}

const money = 500;

if (price < money) {
  console.log("I will buy it");
}

const name = "Alu";

// if (name === "alu") { // false
if (name === "Alu") {
  console.log("we are mr. potato");
}

const isGorib = true;
if (isGorib === true) {
  console.log("Enter");
}

// if/else example
const age = 15;

if (age > 10) {
  console.log("Enter the book fair");
} else {
  console.log("sorry, your age is low");
}

// if/else if/else example
if (age >= 18) {
  console.log("You play all the ride!");
} else if (age >= 13) {
  console.log("You play some of the ride!");
} else {
  console.log("You only play children ride!");
}

// nested if/else example
// meet 2 condition fulfil
// parent condition true then enter child condition

let age1 = 17;
let withAdult = true;

if (age1 >= 15) {
  console.log("Enter the fair");

  if (withAdult) {
    console.log("You visit haunted house");
  } else {
    console.log("You do not visit haunted house");
  }
} else {
  console.log("Do not enter the fair");
}
