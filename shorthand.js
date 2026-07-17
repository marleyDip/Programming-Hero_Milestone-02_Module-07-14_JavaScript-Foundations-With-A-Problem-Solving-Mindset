let price = 500;
price = 400;
price = 425;

// price = price - 50;

// shortcut
price -= 50; // 375

// price = price + 40;
price += 40; // 415

// Increment, postfix
price++; // 416
price++; // 417

// Decrement, postfix
price--; // 416
price--; // 415

console.log(price); // 415

console.log(price++); // 415, postfix increment later, 1st value assign, then increment
console.log(price); // 416

console.log(++price); // 417, prefix increment 1st, then assign value
console.log(price); // 417

// prefix & postfix increment example
let a = 5;
let b = ++a; // Prefix: 'a' becomes 6, and 'b' is assigned 6.
console.log("Prefix", b);

let c = 5;
let d = c++; // Postfix: 'd' is assigned 5, then 'c' becomes 6.
console.log("postfix", d);
