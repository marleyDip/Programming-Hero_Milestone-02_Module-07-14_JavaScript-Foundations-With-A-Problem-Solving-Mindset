/**
 *
 * binary --> two
 * ternary --> three
 *
 * condition ? if true : if false
 */

const age = 20;

if (age >= 18) {
  console.log("Please vote");
} else {
  console.log("Grow up kid");
}

age >= 18 ? console.log("Please vote") : console.log("Grow up kid");

let price = 500;
const isLeader = true;

if (isLeader) {
  price = 0;
} else {
  // price = price + 100;
  price += 100;
}

console.log("Price is:", price);

const hasLeader = false;

// price = condition ? true : false
price = hasLeader ? 0 : price + 100;

console.log("Price now", price);
