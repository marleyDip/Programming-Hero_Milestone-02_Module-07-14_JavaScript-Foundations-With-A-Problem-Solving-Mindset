/* Module 8: Conditionals & Decision Making - Practice Tasks */

/**
 *
 * The backslash escape character (\) turns special characters into string characters.
 * 1. let text = "We are the so-called \"Vikings\" from the north."; // We are the so-called "Vikings" from the north.
 * 2. let text= 'It\'s alright.'; // It's alright.
 * 3. let text = "The character \\ is called backslash."; // The character \ is called backslash.
 *
 */

/**
 *
 * When printing JavaScript code inside a template literal:
 * 1. Escape backticks: \`
 * 2. Escape template placeholders: \${variable}
 *
 */

// Task 01 - Take two variables price1 and price2, and compare them using all comparison operators (==, ===, !=, !==, >, <, >=, <=), printing each result with console.log.
console.log(`
// ===========================================
// Task 01
// Compare two prices using all comparison
// operators and print the results.
// Operators:
// ==, ===, !=, !==, >, <, >=, <=
// =========================================== \n `);

const price1 = 25;
const price2 = 30;

console.log(
  "Comparison Operators - used to compare two values and always return true or false (boolean expression). The Boolean (primitive data type) value of an expression is the basis for all JavaScript comparisons and conditions.",
);

console.log(`
===== Variable Declaration =====

const price1 = 25;
const price2 = 30;

=============================== `);

console.log(`
console.log(
  \`Loose Equality (==): Are \${price1} and \${price2} equal?\`,
  price1 == price2,
); `);

console.log(
  `=> Loose Equality (==): Are ${price1} and ${price2} equal? -`,
  price1 == price2,
);

console.log(`
console.log(
  \`Strict Equality (===): Are \${price1} and \${price2} equal in both value and type?\`,
  price1 === price2,
); `);

console.log(
  `=> Strict Equality (===): Are ${price1} and ${price2} equal in both value and type? -`,
  price1 === price2,
);

console.log(`
console.log(
  \`Loose Inequality (!=): Are \${price1} and \${price2} different?\`,
  price1 != price2,
); `);

console.log(
  `=> Loose Inequality (!=): Are ${price1} and ${price2} different? -`,
  price1 != price2,
);

console.log(`
console.log(
  \`Strict Inequality (!==): Are \${price1} and \${price2} different in value or type?\`,
  price1 !== price2,
); `);

console.log(
  `=> Strict Inequality (!==): Are ${price1} and ${price2} different in value or type? -`,
  price1 !== price2,
);

console.log(`
console.log(
  \`Greater Than (>): Is \${price1} greater than \${price2}?\`,
  price1 > price2,
); `);

console.log(
  `=> Greater Than (>): Is ${price1} greater than ${price2}? -`,
  price1 > price2,
);

console.log(`
console.log(
  \`Less Than (<): Is \${price1} less than \${price2}?\`,
  price1 < price2,
); `);

console.log(
  `=> Less Than (<): Is ${price1} less than ${price2}? -`,
  price1 < price2,
);

console.log(`
console.log(
  \`Greater Than or Equal (>=): Is \${price1} greater than or equal to \${price2}?\`,
  price1 >= price2,
); `);

console.log(
  `=> Greater Than or Equal (>=): Is ${price1} greater than or equal to ${price2}? -`,
  price1 >= price2,
);

console.log(`
console.log(
  \`Less Than or Equal (<=): Is \${price1} less than or equal to \${price2}?\`,
  price1 <= price2,
); `);

console.log(
  `=> Less Than or Equal (<=): Is ${price1} less than or equal to ${price2}? -`,
  price1 <= price2,
);

console.log();

// Task 02 - Guess the result of "5" == 5 and "5" === 5 first, then write code to verify your guess.
console.log(`
// ===========================================
// Task 02
// Guess the result of "5" == 5 and "5" === 5,
// then verify your guess.
// =========================================== \n `);

const value1 = "5";
const value2 = 5;

console.log(
  '== (Loose Equality): compares only the values after performing type conversion. If the data types are different, JavaScript automatically converts one value to match the other before comparing. "5" == 5 → true because the string "5" is converted to the number 5.',
);

console.log(
  '=== (Strict Equality): compares both the value and the data type. No type conversion is performed. "5" === 5 → false because one value is a string and the other is a number.',
);

console.log(`
===== Variable Declaration =====

const value1 = "5";
const value2 = 5;

=============================== `);

console.log(`
console.log(\`The result of \"\${value1}\" == \${value1}:\`, value1 == value2);
`);

console.log(`=> The result of "${value1}" == ${value1}:`, value1 == value2);

console.log(`
console.log(\`The result of \"\${value1}\" === \${value1}:\`, value1 === value2);
`);

console.log(`=> The result of "${value1}" === ${value1}:`, value1 === value2);

console.log();

// Task 03 - Create a variable isRaining (true/false). If it is true, print "Take an umbrella".
console.log(`
// ===========================================
// Task 03
// Check whether it is raining.
// If it is raining,
// print "Take an umbrella".
// =========================================== `);

const isRaining = true;

console.log(`
const isRaining = true;

if (isRaining) {
  console.log("🌧️ It's raining. Take an umbrella.");
} `);

if (isRaining) {
  console.log("=> 🌧️ It's raining. Take an umbrella.");
}

console.log();

// Task 04 - Take a variable stock. If stock is 0, print "Out of stock" (use only if, no else)
console.log(`
// ===========================================
// Task 04
// Check the stock quantity.
// If the stock is 0,
// print "Out of stock".
// (Use only if, no else.)
// =========================================== `);

const stock = 0;

console.log(`
const stock = 0;

if (stock === 0) {
  console.log("📦 Out of stock.");
} `);

if (stock === 0) {
  console.log("=> 📦 Out of stock.");
}

console.log();

// Task 05 - Take a speed variable. If speed is greater than 80, print "Over speeding", otherwise print "Normal speed".
console.log(`
// ===========================================
// Task 05
// Check the vehicle's speed.
// If the speed is greater than 80,
// print "Over speeding".
// Otherwise, print "Normal speed".
// =========================================== `);

const speed = 90;

console.log(`
const speed = 90;

if (speed > 80) {
  console.log(\`🚨 Speed: \${speed} km/h → Over speeding. Slow the driving.\`);
} else {
  console.log(\`✅ Speed: \${speed} km/h → Normal speed. Great drive.\`);
}
`);

if (speed > 80) {
  console.log(`=> 🚨 Speed: ${speed} km/h → Over speeding. Slow the driving.`);
} else {
  console.log(`=> ✅ Speed: ${speed} km/h → Normal speed. Great drive.`);
}

console.log();

// Task 06 - Using age and hasTicket, print "Entry allowed" if age is above 18 AND the person has a ticket (use &&).
console.log(`
// ===========================================
// Task 06
// If the person's age is 18 or above
// AND they have a ticket,
// print "Entry allowed".
// (Use the logical AND operator &&)
// =========================================== `);

const age = 22;
const hasTicket = true;

console.log(`
const age = 22;
const hasTicket = true;

if (age >= 18 && hasTicket) {
  console.log("✅ Entry allowed. You have valid ticket and age above 18.");
} else {
  console.log("❌ Entry denied. You have not valid ticket and age under 18.");
}
`);

if (age >= 18 && hasTicket) {
  console.log("=> ✅ Entry allowed. You have valid ticket and age above 18.");
} else {
  console.log(
    "=> ❌ Entry denied. You have not valid ticket and age under 18.",
  );
}

console.log();

// Task 07 - Using isWeekend and isHoliday, print "No work today" if either one is true (use ||).
console.log(`
// ===========================================
// Task 07
// If it is a weekend or a holiday,
// print "No work today".
// (Use the logical OR operator ||)
// =========================================== `);

const isWeekend = false;
const isHoliday = true;

console.log(`
const isWeekend = false;
const isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("🎉 No work today. You have weekend or holiday.");
} else {
  console.log("💼 Go to work. You have no weekend or holiday.");
}
`);

if (isWeekend || isHoliday) {
  console.log("=> 🎉 No work today. You have weekend or holiday.");
} else {
  console.log("=> 💼 Go to work. You have no weekend or holiday.");
}

console.log();

console.log(`
/**
 * ===========================================
 * 📖 Ternary Operator
 * ===========================================
 *
 * The ternary operator (? :) is a shorthand
 * way to write a simple if...else statement.
 * 
 * It evaluates a condition.
 * - If the condition is true, it returns the
 *   first value. 
 * - If the condition is false, it returns the 
 *   second value.
 *  
 * Syntax: condition ? valueIfTrue : valueIfFalse;
 *  
 * When to use the ternary operator 
 * ✅ For simple if...else conditions. 
 * ✅ When assigning a value based on a condition. 
 * ✅ To make code shorter and cleaner. 
 * 
 * When not to use it 
 * Avoid using the ternary operator for complex logic with many conditions. 
 * In those cases, if...else if...else is easier to read.
 * 
 * ===========================================
 */ `);

// Task 08 - Using age, determine "Adult" or "Minor" using the ternary operator.
console.log(`
// ===========================================
// Task 08
// Determine whether a person is an
// "Adult" or "Minor" using the
// ternary operator.
// =========================================== `);

const userAge = 13;

console.log(`
const userAge = 13;

const ageStatus =
  userAge >= 18 ? \`🧑 Age \${userAge} is Adult.\` : \`🧑 Age \${userAge} is Minor.\`;

console.log(ageStatus); \n `);

const ageStatus =
  userAge >= 18 ? `🧑 Age ${userAge} is Adult.` : `🧑 Age ${userAge} is Minor.`;

console.log("=>", ageStatus);

console.log();

// Task 09 - If the price is greater than 1000, print "Expensive", otherwise "Affordable" — write this using a ternary operator.
console.log(`
// ===========================================
// Task 09
// Check whether a product is
// "Expensive" or "Affordable"
// using the ternary operator.
// =========================================== `);

const price = 120;

console.log(`
const price = 120;

const priceCategory =
  price > 1000
    ? \`💰 Price: \${price} → Expensive.\`
    : \`🛒 Price: \${price} → Affordable.\`;

console.log(priceCategory); \n `);

const priceCategory =
  price > 1000
    ? `💰 Price: ${price} → Expensive.`
    : `🛒 Price: ${price} → Affordable.`;

console.log("=>", priceCategory);

console.log();

// Task 10 - Determine whether a number is even or odd using the ternary operator.
console.log(`
// ===========================================
// Task 10
// Determine whether a number is even or odd
// using the ternary operator.
// =========================================== `);

// Using If...else
const evenOrOddNumber = 23;

console.log(`
// Using If...else
const evenOrOddNumber = 23;

if (evenOrOddNumber % 2 === 0) {
  console.log(\`🔢 \${evenOrOddNumber} is an even number.\`);
} else {
  console.log(\`🔢 \${evenOrOddNumber} is an odd number.\`);
} \n `);

if (evenOrOddNumber % 2 === 0) {
  console.log(`=> 🔢 ${evenOrOddNumber} is an even number.`);
} else {
  console.log(`=> 🔢 ${evenOrOddNumber} is an odd number.`);
}

// using Ternary Operator
const randomNumber = 16;

console.log(`
// using Ternary Operator
const randomNumber = 16;

const evenOrOddResult = randomNumber % 2 === 1 ? "odd number." : "even number.";
console.log(\`🔢 \${randomNumber} is an\`, evenOrOddResult); \n `);

const evenOrOddResult = randomNumber % 2 === 1 ? "odd number." : "even number.";
console.log(`=> 🔢 ${randomNumber} is an`, evenOrOddResult);

console.log();

/* ===== Intermediate Problem ===== */

// Task 11 - Build a simple login system — print "Login successful" only if both username and password are correct.
console.log(`
// ======================================
// Task 11
// Build a simple login system.
// Print "Login successful" only if both
// the username and password are correct.
// ====================================== `);

// Correct Credentials
const correctUsername = "admin";
const correctPassword = "12345";

// User Input
const username = "admin";
const password = "12345";

console.log(`
// Correct Credentials
const correctUsername = "admin";
const correctPassword = "12345";

// User Input
const username = "admin";
const password = "12345";

if (username === correctUsername && password === correctPassword) {
  console.log(\`✅ Login successful. Welcome to Dashboard, \${username}.\`);
} else {
  console.log("❌ Invalid username or password.");
} \n `);

if (username === correctUsername && password === correctPassword) {
  console.log(`=> ✅ Login successful. Welcome to Dashboard, ${username}.`);
} else {
  console.log("=> ❌ Invalid username or password.");
}

console.log();

// Task 12 - Using a bmi variable, determine the category — Underweight, Normal, Overweight, Obese (use if-else if).
console.log(`
// ==============================================
// Task 12
// Determine the BMI category using if...else if.
// Categories:
// Underweight : BMI < 18.5
// Normal      : BMI 18.5 - 24.9
// Overweight  : BMI 25 - 29.9
// Obese       : BMI 30 or above
// ============================================= `);

const bmi = 24.5;

console.log(`
const bmi = 24.5;

if (bmi < 18.5) {
  console.log(\`📉 BMI: \${bmi} → Underweight\`);
} else if (bmi < 25) {
  console.log(\`✅ BMI: \${bmi} → Normal\`);
} else if (bmi < 30) {
  console.log(\`⚠️ BMI: \${bmi} → Overweight\`);
} else {
  console.log(\`🚨 BMI: \${bmi} → Obese\`);
} \n `);

if (bmi < 18.5) {
  console.log(`=> 📉 BMI: ${bmi} → Underweight`);
} else if (bmi < 25) {
  console.log(`=> ✅ BMI: ${bmi} → Normal`);
} else if (bmi < 30) {
  console.log(`=> ⚠️ BMI: ${bmi} → Overweight`);
} else {
  console.log(`=> 🚨 BMI: ${bmi} → Obese`);
}

console.log();

// Task 13 - Using a month number (1-12), determine which season that month falls in (Winter, Summer, Monsoon, etc.).
console.log(`
// ======================================================
// Task 13
// Determine the season based on the month number (1-12).
// ====================================================== `);

// Internationally consists four-season.
const internationalSeasonMonth = 5;

console.log(`
// Internationally consists four-season.
const internationalSeasonMonth = 5;

if (internationalSeasonMonth >= 3 && internationalSeasonMonth <= 5) {
  console.log(\`📅 Month \${internationalSeasonMonth} is International Spring Season.\`);
} else if (internationalSeasonMonth >= 6 && internationalSeasonMonth <= 8) {
  console.log(\`📅 Month \${internationalSeasonMonth} is International Summer Season.\`);
} else if (internationalSeasonMonth >= 9 && internationalSeasonMonth <= 11) {
  console.log(\`📅 Month \${internationalSeasonMonth} is International Autumn Season.\`);
} else if (
  internationalSeasonMonth === 12 ||
  internationalSeasonMonth === 1 ||
  internationalSeasonMonth === 2
) {
  console.log(\`📅 Month \${internationalSeasonMonth} is International Winter Season.\`);
} else {
  console.log(
    "❌ Invalid international season month! Please enter a number between 1 and 12.",
  );
} \n `);

if (internationalSeasonMonth >= 3 && internationalSeasonMonth <= 5) {
  console.log(
    `=> 📅 Month ${internationalSeasonMonth} is International Spring Season.`,
  );
} else if (internationalSeasonMonth >= 6 && internationalSeasonMonth <= 8) {
  console.log(
    `=> 📅 Month ${internationalSeasonMonth} is International Summer Season.`,
  );
} else if (internationalSeasonMonth >= 9 && internationalSeasonMonth <= 11) {
  console.log(
    `=> 📅 Month ${internationalSeasonMonth} is International Autumn Season.`,
  );
} else if (
  internationalSeasonMonth === 12 ||
  internationalSeasonMonth === 1 ||
  internationalSeasonMonth === 2
) {
  console.log(
    `=> 📅 Month ${internationalSeasonMonth} is International Winter Season.`,
  );
} else {
  console.log(
    "❌ Invalid international season month! Please enter a number between 1 and 12.",
  );
}

console.log();

// Bangladesh climate has six-season.
const bangladeshSeasonMonth = 5;

console.log(`
// Bangladesh climate has six-season.
const bangladeshSeasonMonth = 5;

if (bangladeshSeasonMonth === 12 || bangladeshSeasonMonth === 1) {
  console.log(\`📅 Month \${bangladeshSeasonMonth} is Bangladesh Winter Season.\`);
} else if (bangladeshSeasonMonth === 2 || bangladeshSeasonMonth === 3) {
  console.log(\`📅 Month \${bangladeshSeasonMonth} is Bangladesh Spring Season.\`);
} else if (bangladeshSeasonMonth >= 4 && bangladeshSeasonMonth <= 5) {
  console.log(\`📅 Month \${bangladeshSeasonMonth} is Bangladesh Summer Season.\`);
} else if (bangladeshSeasonMonth === 6 || bangladeshSeasonMonth === 7) {
  console.log(\`📅 Month \${bangladeshSeasonMonth} is Bangladesh Monsoon Season.\`);
} else if (bangladeshSeasonMonth >= 8 && bangladeshSeasonMonth <= 9) {
  console.log(\`📅 Month \${bangladeshSeasonMonth} is Bangladesh Autumn Season.\`);
} else if (bangladeshSeasonMonth === 10 || bangladeshSeasonMonth === 11) {
  console.log(\`📅 Month \${bangladeshSeasonMonth} is Bangladesh Late Autumn Season.\`);
} else {
  console.log(
    "❌ Invalid bangladesh season month! Please enter a number between 1 and 12.",
  );
} \n `);

if (bangladeshSeasonMonth === 12 || bangladeshSeasonMonth === 1) {
  console.log(
    `=> 📅 Month ${bangladeshSeasonMonth} is Bangladesh Winter Season.`,
  );
} else if (bangladeshSeasonMonth === 2 || bangladeshSeasonMonth === 3) {
  console.log(
    `=> 📅 Month ${bangladeshSeasonMonth} is Bangladesh Spring Season.`,
  );
} else if (bangladeshSeasonMonth >= 4 && bangladeshSeasonMonth <= 5) {
  console.log(
    `=> 📅 Month ${bangladeshSeasonMonth} is Bangladesh Summer Season.`,
  );
} else if (bangladeshSeasonMonth === 6 || bangladeshSeasonMonth === 7) {
  console.log(
    `=> 📅 Month ${bangladeshSeasonMonth} is Bangladesh Monsoon Season.`,
  );
} else if (bangladeshSeasonMonth >= 8 && bangladeshSeasonMonth <= 9) {
  console.log(
    `=> 📅 Month ${bangladeshSeasonMonth} is Bangladesh Autumn Season.`,
  );
} else if (bangladeshSeasonMonth === 10 || bangladeshSeasonMonth === 11) {
  console.log(
    `=> 📅 Month ${bangladeshSeasonMonth} is Bangladesh Late Autumn Season.`,
  );
} else {
  console.log(
    "❌ Invalid bangladesh season month! Please enter a number between 1 and 12.",
  );
}

console.log();

console.log(`
/**
 * ===========================================
 *  📖 Nested if Statement
 *  ===========================================
 *
 *  A nested if statement is an if statement
 *  placed inside another if statement.
 *
 *  It is used when the second condition should
 *  be checked only after the first condition
 *  is true.
 *
 *  Syntax:
 *  if (condition1) {
 *    if (condition2) {
 *      // Code executes if both conditions are true
 *    } else {
 *      // Code executes if condition1 is true
 *      // but condition2 is false
 *    }
 *  } else {
 *    // Code executes if condition1 is false
 *  }
 *
 *  ===========================================
 */ `);

// Task 14 - Using age and hasID, use nested if-else to check whether someone is eligible to vote.
console.log(`
// ===========================================
// Task 14
// Check whether a person is eligible to vote
// using nested if...else.
// =========================================== `);

const voterAge = 22;
const hasID = true;

console.log(`
const voterAge = 22;
const hasID = true;

if (voterAge >= 18) {
  if (hasID) {
    console.log("🗳️ You are eligible to vote");
  } else {
    console.log("🪪 Please bring your ID.");
  }
} else {
  console.log("🚫 You are not eligible to vote.");
} \n `);

if (voterAge >= 18) {
  if (hasID) {
    console.log("=> 🗳️ You are eligible to vote");
  } else {
    console.log("=> 🪪 You need a valid ID to vote.");
  }
} else {
  console.log("=> 🚫 You are not eligible to vote.");
}

console.log();

// Task 15 - Using isLoggedIn and isAdmin, build a nested condition — if logged in and admin, print "Admin Dashboard"; if logged in but not admin, print "User Dashboard"; if not logged in, print "Please Login".
console.log(`
// ===========================================
// Task 15
// Display the appropriate dashboard
// using nested if...else.
// =========================================== `);

const isLoggedIn = true;
const isAdmin = true;

console.log(`
const isLoggedIn = true;
const isAdmin = true;

if (isLoggedIn) {
  if (isAdmin) {
    console.log("👑 Admin Dashboard");
  } else {
    console.log("👤 User Dashboard");
  }
} else {
  console.log("🔐 Please Login");
} \n `);

if (isLoggedIn) {
  if (isAdmin) {
    console.log("=> 👑 Admin Dashboard");
  } else {
    console.log("=> 👤 User Dashboard");
  }
} else {
  console.log("=> 🔐 Please Login");
}

console.log();

// Task 16 - Take a number variable and check whether it is positive or negative (using if-else).
console.log(`
// ===========================================
// Task 16
// Check whether a number is
// Positive, Negative, or Zero.
// =========================================== `);

const number = -5;

console.log(`
===== Variable Declaration =====

const number = -5

=============================== `);

console.log(`
// Solution 1 — Using if...else if...else

if (number > 0) {
  console.log(\` 📈 The Number \${number} is a positive\`);
} else if (number < 0) {
  console.log(\`📉 The Number \${number} is a negative\`);
} else {
  console.log(\`0️⃣ The Number is zero\`);
} \n `);

// Solution 1 — Using if...else if...else
if (number > 0) {
  console.log(`=> 📈 The Number ${number} is a positive`);
} else if (number < 0) {
  console.log(`=> 📉 The Number ${number} is a negative`);
} else {
  console.log(`=> 0️⃣ The Number is zero`);
}

console.log();

console.log(`
// Solution 2 — Using Nested if

if (number >= 0) {
  if (number === 0) {
    console.log(\`⚪ \${number} is Zero.\`);
  } else {
    console.log(\`✅ \${number} is a Positive Number.\`);
  }
} else {
  console.log(\`❌ \${number} is a Negative Number.\`);
} \n `);

// Solution 2 — Using Nested if
if (number >= 0) {
  if (number === 0) {
    console.log(`=> ⚪ ${number} is Zero.`);
  } else {
    console.log(`=> ✅ ${number} is a Positive Number.`);
  }
} else {
  console.log(`=> ❌ ${number} is a Negative Number.`);
}

console.log();

console.log(`
// Solution 3 — Using the Ternary Operator. It's a concise way to write if...else conditions.

const result =
  number > 0
    ? \`The number \${number} is a positive.\`
    : number < 0
      ? \`The number \${number} is a negative.\`
      : "The number is zero.";    
\n `);

// Solution 3 — Using the Ternary Operator. It's a concise way to write if...else conditions.
const result =
  number > 0
    ? `The number ${number} is a positive.`
    : number < 0
      ? `The number ${number} is a negative.`
      : "The number is zero.";

console.log("=> Using Ternary Operator:", result);

console.log();

console.log(`
// Solution 4 — Using Math.sign()

const sign = Math.sign(number);

if (sign === 1) {
    console.log(\`✅ \${number} is a Positive Number.\`);
} else if (sign === -1) {
  console.log(\`❌ \${number} is a Negative Number.\`);
} else {
  console.log(\`⚪ \${number} is Zero.\`);
} \n `);

// Solution 4 — Using Math.sign()
const sign = Math.sign(number);

if (sign === 1) {
  console.log(`=> ✅ ${number} is a Positive Number.`);
} else if (sign === -1) {
  console.log(`=> ❌ ${number} is a Negative Number.`);
} else {
  console.log(`=> ⚪ ${number} is Zero.`);
}

console.log();

console.log(`
// Solution 5 — Using switch with Math.sign()

switch (Math.sign(number)) {
  case 1:
      console.log(\`✅ \${number} is a Positive Number.\`);
    break;

  case -1:
    console.log(\`❌ ${number} is a Negative Number.\`);
    break;

  default:
    console.log(\`⚪ \${number} is Zero.\`);
} \n `);

// Solution 5 — Using switch with Math.sign()
switch (Math.sign(number)) {
  case 1:
    console.log(`=> ✅ ${number} is a Positive Number.`);
    break;

  case -1:
    console.log(`=> ❌ ${number} is a Negative Number.`);
    break;

  default:
    console.log(`=> ⚪ ${number} is Zero.`);
}

console.log();

console.log(`
// Solution 6 — Using Separate if Statements

if (number > 0) console.log(\`✅ \${number} is a Positive Number.\`);
if (number < 0) console.log(\`❌ \${number} is a Negative Number.\`);
if (number === 0) console.log(\`⚪ \${number} is Zero.\`); \n `);

// Solution 6 — Using Separate if Statements
if (number > 0) console.log(`=> ✅ ${number} is a Positive Number.`);
if (number < 0) console.log(`=> ❌ ${number} is a Negative Number.`);
if (number === 0) console.log(`=> ⚪ ${number} is Zero.`);

console.log();

console.log(`
// Math.sign() is a built-in JavaScript method that returns the sign of a number.

console.log(\`Math.sign(10):\`, Math.sign(10));
console.log(\`Math.sign(-17):\`, Math.sign(-17));
console.log(\`Math.sign(0):\`, Math.sign(0));
console.log(\`Math.sign(-0):\`, Math.sign(-0));
console.log(\`Math.sign("25"):\`, Math.sign("25"));
console.log(\`Math.sign("Hello"):\`, Math.sign("Hello")); \n `);

console.log(`=> Math.sign(10):`, Math.sign(10));
console.log(`=> Math.sign(-17):`, Math.sign(-17));
console.log(`=> Math.sign(0):`, Math.sign(0));
console.log(`=> Math.sign(-0):`, Math.sign(-0));
console.log(`=> Math.sign("25"):`, Math.sign("25")); // string converted to number
console.log(`=> Math.sign("Hello"):`, Math.sign("Hello"));

console.log();

// Task 17 - Take three number variable and check whether largest among three numbers (Challenge: Don't use Math.max()).
console.log(`
// ===========================================
// Task 17
// Find the Largest of Three Numbers
// (Challenge: Don't use Math.max())
// =========================================== `);

const number1 = 15;
const number2 = 25;
const number3 = 10;

console.log(`
===== Variable Declaration =====

const number1 = 15;
const number2 = 25;
const number3 = 10;

=============================== `);

console.log(`
// Using if...else if...else

if (number1 >= number2 && number1 >= number3) {
  console.log(\`🏆 Largest number using if...else if...else: \${number1}\`);
} else if (number2 >= number3 && number2 >= number1) {
  console.log(\`🏆 Largest number using if...else if...else: \${number2}\`);
} else {
  console.log(\`🏆 Largest number using if...else if...else: \${number3}\`);
} \n `);

// Using if...else if...else
if (number1 >= number2 && number1 >= number3) {
  console.log(`=> 🏆 Largest number using if...else if...else: ${number1}`);
} else if (number2 >= number3 && number2 >= number1) {
  console.log(`=> 🏆 Largest number using if...else if...else: ${number2}`);
} else {
  console.log(`=> 🏆 Largest number using if...else if...else: ${number3}`);
}

console.log();

console.log(`
// Using Nested if

if (number1 >= number2) {
  if (number1 >= number3) {
    console.log(\`🏆 Largest number using nested if: \${number1}\`);
  } else {
    console.log(\`🏆 Largest number using nested if: \${number3}\`);
  }
} else {
  if (number2 >= number3) {
    console.log(\`🏆 Largest number using nested if: \${number2}\`);
  } else {
    console.log(\`🏆 Largest number using nested if: \${number3}\`);
  }
} \n `);

// Using Nested if
if (number1 >= number2) {
  if (number1 >= number3) {
    console.log(`=> 🏆 Largest number using nested if: ${number1}`);
  } else {
    console.log(`=> 🏆 Largest number using nested if: ${number3}`);
  }
} else {
  if (number2 >= number3) {
    console.log(`=> 🏆 Largest number using nested if: ${number2}`);
  } else {
    console.log(`=> 🏆 Largest number using nested if: ${number3}`);
  }
}

console.log();

console.log(`
// Using the Ternary Operator

const highest =
  number1 >= number2 && number1 >= number3
    ? number1
    : number2 >= number1 && number2 >= number3
      ? number2
      : number3;

console.log(\`🏆 Largest number using ternary operator: \${highest}\`); \n `);

// Using the Ternary Operator
const highest =
  number1 >= number2 && number1 >= number3
    ? number1
    : number2 >= number1 && number2 >= number3
      ? number2
      : number3;

console.log(`=> 🏆 Largest number using ternary operator: ${highest}`);

console.log();

console.log(`
// Compare Step by Step

let maximum = number1;

if (number2 > maximum) {
  maximum = number2;
}

if (number3 > maximum) {
  maximum = number3;
}

console.log(\`🏆 Largest number compare step by step: \${maximum}\`); \n `);

// Compare Step by Step
let maximum = number1;

if (number2 > maximum) {
  maximum = number2;
}

if (number3 > maximum) {
  maximum = number3;
}

console.log(`=> 🏆 Largest number compare step by step: ${maximum}`);

console.log();

console.log(`
// Store Result in a Variable

let highestValue;

if (number1 >= number2 && number1 >= number3) {
  highestValue = number1;
} else if (number2 >= number1 && number2 >= number2) {
  highestValue = number2;
} else {
  highestValue = number3;
}

console.log(\`🏆 Largest number store result in a variable: \${highestValue}\`); \n `);

// Store Result in a Variable
let highestValue;

if (number1 >= number2 && number1 >= number3) {
  highestValue = number1;
} else if (number2 >= number1 && number2 >= number2) {
  highestValue = number2;
} else {
  highestValue = number3;
}

console.log(`=> 🏆 Largest number store result in a variable: ${highestValue}`);

console.log();

console.log(`
// JavaScript provides a built-in method called Math.max() that returns the largest value from a list of numbers.

console.log("Largest Number is:", Math.max(20, 45, 7)); // 45
console.log("Largest Number is:", Math.max(-5, -2, -10)); // -2
console.log("Largest Number is:", Math.max(100, 100, 50)); // 100
console.log("Smallest Number is:", Math.min(100, 100, 50)); // 50 \n `);

// JavaScript provides a built-in method called Math.max() that returns the largest value from a list of numbers.
console.log("=> Largest Number is:", Math.max(20, 45, 7)); // 45
console.log("=> Largest Number is:", Math.max(-5, -2, -10)); // -2
console.log("=> Largest Number is:", Math.max(100, 100, 50)); // 100
console.log("=> Smallest Number is:", Math.min(100, 100, 50)); // 50

console.log(`
const largest = Math.max(number1, number2, number3);
console.log(\`🏆 Largest number using Math.max() method: \${largest}\`); \n `);

const largest = Math.max(number1, number2, number3);
console.log(`=> 🏆 Largest number using Math.max() method: ${largest}`);

console.log();

// Write a JavaScript program that displays the largest integer among two integers.
const num1 = 10;
const num2 = 10;

console.log(`
// Write a JavaScript program that displays the largest integer among two integers.
const num1 = 10;
const num2 = 10;

if (num1 > num2) {
  console.log(\`The larger number of between \${num1} and \${num2} is - \${num1}.\`);
} else if (num1 < num2) {
  console.log(\`The larger number of between \${num1} and \${num2} is - \${num2}.\`);
} else {
  console.log(\`The values of \${num1} and \${num2} are equal.\`);
} \n `);

if (num1 > num2) {
  console.log(
    `=> The larger number of between ${num1} and ${num2} is - ${num1}.`,
  );
} else if (num1 < num2) {
  console.log(
    `=> The larger number of between ${num1} and ${num2} is - ${num2}.`,
  );
} else {
  console.log(`=> The values of ${num1} and ${num2} are equal.`);
}

console.log();

// Task 18 - Take a year variable and check whether it is a leap year (hint: year % 4 === 0).
console.log(`
// ===========================================
// Task 18
// Check whether a year is a leap year.
// (Using the simplified rule: year % 4 === 0)
// (Correct leap year algorithm.)
// =========================================== `);

// console.log(typeof ("Year:", year)); // number
// console.log(typeof ("Year:" + " " + year)); // string
// console.log(typeof `Year: ${year}`); // string
// console.log(`Year: ${year}`);

// Option 1 (Recommended): Use a normal string
/* console.log(
  "if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {\n" +
    "  console.log(`${year} is a leap year.`);\n" +
    "} else {\n" +
    "  console.log(`${year} is not a leap year.`);\n" +
    "}",
); */

// Option 2: Escape the ${} (Best if you want to use a template literal)
console.log(`
// A year is a leap year if: It is divisible by 400, or It is divisible by 4 and not divisible by 100.

const year = new Date().getFullYear();
console.log("This Year is:", year);

// Using Logical Operators (&& and ||)
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log(\`📅 Year \${year} is a leap year.\`);
} else {
  console.log(\`📅 Year \${year} is not a leap year.\`);
} 

// Store the Condition in a Variable
const isLeapYear = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)

if (isLeapYear) {
  console.log(\`📅 Year \${year} is a leap year.\`);
} else {
  console.log(\`📅 Year \${year} is not a leap year.\`);
} \n `);

const year = new Date().getFullYear();
console.log("=> This Year is:", year);

// Using Logical Operators (&& and ||)
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log(`=> 📅 Year ${year} is a leap year.`);
} else {
  console.log(`=> 📅 Year ${year} is not a leap year.`);
}

console.log();

// Using if...else if...else
const checkLeapYear = 1900;

console.log(`
// Using if...else if...else
const checkLeapYear = 1900;

if (checkLeapYear % 400 === 0) {
  console.log(\`📅 \${checkLeapYear} is a Leap Year.\`);
} else if (checkLeapYear % 100 === 0) {
  console.log(\`📅 \${checkLeapYear} is Not a Leap Year.\`);
} else if (checkLeapYear % 4 === 0) {
  console.log(\`📅 \${checkLeapYear} is a Leap Year.\`);
} else {
  console.log(\`📅 \${checkLeapYear} is Not a Leap Year.\`);
} \n `);

if (checkLeapYear % 400 === 0) {
  console.log(`=> 📅 ${checkLeapYear} is a Leap Year.`);
} else if (checkLeapYear % 100 === 0) {
  console.log(`=> 📅 ${checkLeapYear} is Not a Leap Year.`);
} else if (checkLeapYear % 4 === 0) {
  console.log(`=> 📅 ${checkLeapYear} is a Leap Year.`);
} else {
  console.log(`=> 📅 ${checkLeapYear} is Not a Leap Year.`);
}

console.log();

// Task 19 - Build a grading system using a marks variable (A+, A, B, C, F) — it must have at least 5 condition branches.
console.log(`
// ==============================================
// Task 19
// Build a grading system using a marks variable.
// Grades:
// A+ : 80 - 100
// A  : 70 - 79
// B  : 60 - 69
// C  : 50 - 59
// F  : 0 - 49
// ============================================= `);

const marks = 85;

console.log(`
const marks = 85;

if (marks >= 80 && marks <= 100) {
  console.log(\`🎉 Marks: \${marks} → Grade: A+\`);
} else if (marks >= 70) {
  console.log(\`🎉 Marks: \${marks} → Grade: A\`);
} else if (marks >= 60) {
  console.log(\`👍 Marks: \${marks} → Grade: B\`);
} else if (marks >= 50) {
  console.log(\`🙂 Marks: \${marks} → Grade: C\`);
} else if (marks >= 0) {
  console.log(\`😢 Marks: \${marks} → Grade: F\`);
} else {
  console.log("❌ Invalid marks! Please enter a value between 0 and 100.");
}
`);

if (marks >= 80 && marks <= 100) {
  console.log(`=> 🎉 Marks: ${marks} → Grade: A+`);
} else if (marks >= 70) {
  console.log(`=> 🎉 Marks: ${marks} → Grade: A`);
} else if (marks >= 60) {
  console.log(`=> 👍 Marks: ${marks} → Grade: B`);
} else if (marks >= 50) {
  console.log(`=> 🙂 Marks: ${marks} → Grade: C`);
} else if (marks >= 0) {
  console.log(`=> 😢 Marks: ${marks} → Grade: F`);
} else {
  console.log("=> ❌ Invalid marks! Please enter a value between 0 and 100.");
}

console.log();

// Using ternary operator
const studentMarks = 75;

console.log(`
// Using ternary operator
const studentMarks = 75;

const studentResults =
  studentMarks >= 80 && studentMarks <= 100
    ? "Grade: A+"
    : studentMarks >= 70
      ? "Grade: A"
      : studentMarks >= 60
        ? "Grade: B"
        : studentMarks >= 50
          ? "Grade: C"
          : studentMarks >= 0
            ? "Grade: F"
            : "❌ Invalid marks! Please enter a value between 0 and 100.";
`);

const studentResults =
  studentMarks >= 80 && studentMarks <= 100
    ? "Grade: A+"
    : studentMarks >= 70
      ? "Grade: A"
      : studentMarks >= 60
        ? "Grade: B"
        : studentMarks >= 50
          ? "Grade: C"
          : studentMarks >= 0
            ? "Grade: F"
            : "❌ Invalid marks! Please enter a value between 0 and 100.";

console.log(`=> Marks: ${studentMarks} -`, studentResults);

// Task 20 - Write a JavaScript program that takes the lengths of three sides of a triangle and prints its type.
console.log(`
// ===========================================
// Task 20
// Take three variables representing the lengths
// of the sides of a triangle. Determine whether
// the triangle is:
//
// • Equilateral (all three sides are equal)
// • Isosceles (exactly two sides are equal)
// • Scalene (all three sides are different)
// • Invalid Triangle (the given sides cannot
//   form a valid triangle)
//
// Hint:
// A triangle is valid only if the sum of any
// two sides is greater than the third side.
// =========================================== `);

const side1 = 5;
const side2 = 6;
const side3 = 7;

console.log(`
===== Variable Declaration =====

const side1 = 5;
const side2 = 5;
const side3 = 5;

A triangle is valid if:
side1 + side2 > side3
side1 + side3 > side2
side2 + side3 > side1

=============================== `);

console.log(`
// Using Logical Operators (&& and ||) with if...else if...else
if (
  side1 + side2 <= side3 ||
  side1 + side3 <= side2 ||
  side2 + side3 <= side1
) {
  console.log("❌ Invalid Triangle");
} else if (side1 === side2 && side2 === side3) {
  console.log("🔺 Equilateral Triangle");
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  console.log("🔺 Isosceles Triangle");
} else {
  console.log("🔺 Scalene Triangle");
} \n `);

// Using Logical Operators (&& and ||) with if...else if...else
if (
  side1 + side2 <= side3 ||
  side1 + side3 <= side2 ||
  side2 + side3 <= side1
) {
  console.log("=> ❌ Invalid Triangle");
} else if (side1 === side2 && side2 === side3) {
  console.log("=> 🔺 Equilateral Triangle");
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  console.log("=> 🔺 Isosceles Triangle");
} else {
  console.log("=> 🔺 Scalene Triangle");
}

console.log(`
// using Nested if
if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
  if (side1 === side2 && side2 === side3) {
    console.log("🔺 Equilateral Triangle");
  } else if (side1 !== side2 || side1 !== side3 || side2 !== side3) {
    console.log("🔺 Scalene Triangle");
  } else {
    console.log("🔺 Isosceles Triangle");
  }
} else {
  console.log("❌ Invalid Triangle");
} \n `);

// using Nested if
if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
  if (side1 === side2 && side2 === side3) {
    console.log("=> 🔺 Equilateral Triangle");
  } else if (side1 !== side2 || side1 !== side3 || side2 !== side3) {
    console.log("=> 🔺 Scalene Triangle");
  } else {
    console.log("=> 🔺 Isosceles Triangle");
  }
} else {
  console.log("=> ❌ Invalid Triangle");
}

console.log(`
// Using the Ternary Operator
const isValid =
  side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1;

const triangleType = isValid
  ? side1 === side2 && side2 === side3
    ? "🔺 Equilateral Triangle"
    : side1 === side2 || side1 === side3 || side2 === side3
      ? "🔺 Isosceles Triangle"
      : "🔺 Scalene Triangle"
  : "❌ Invalid Triangle";

console.log(triangleType); \n `);

// Using the Ternary Operator
const isValid =
  side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1;

const triangleType = isValid
  ? side1 === side2 && side2 === side3
    ? "🔺 Equilateral Triangle"
    : side1 === side2 || side1 === side3 || side2 === side3
      ? "🔺 Isosceles Triangle"
      : "🔺 Scalene Triangle"
  : "❌ Invalid Triangle";

console.log("=>", triangleType);

console.log();

/* ===== Hard Problem ===== */

// Task 21 - Write a JavaScript conditional statement to sort three numbers.
console.log(`
// ===========================================
// Task 21
// Take three number variables and arrange
// them in ascending (smallest → largest)
// and descending (largest → smallest)
// order using conditional statements.
//
// Challenge:
// • Don't use Array.sort()
// • Don't use loops
// • Don't use Math.min() or Math.max()
//
// Explanation:
// Compare the numbers one by one and swap
// their positions whenever they are in the
// wrong order. After the comparisons, the
// numbers will be sorted from smallest to
// largest. To display them in descending
// order, simply print them in reverse order.
//
// Example:
// Input: 30, 10, 20
// Ascending : 10, 20, 30
// Descending: 30, 20, 10
// =========================================== `);

let sortNumberX = 0;
let sortNumberY = -1;
let sortNumberZ = 4;

console.log(`
===== Variable Declaration =====

let sortNumberX = 0;
let sortNumberY = -1;
let sortNumberZ = 4;

=============================== `);

console.log(`
// Using Logical Operators (&&) with if...else if (nested if)

if (sortNumberX > sortNumberY && sortNumberX > sortNumberZ) {
  if (sortNumberY > sortNumberZ) {
    console.log("Descending Order:", sortNumberX, sortNumberY, sortNumberZ);
  } else {
    console.log("Descending Order:", sortNumberX, sortNumberZ, sortNumberY);
  }
} else if (sortNumberY > sortNumberX && sortNumberY > sortNumberZ) {
  if (sortNumberX > sortNumberZ) {
    console.log("Descending Order:", sortNumberY, sortNumberX, sortNumberZ);
  } else {
    console.log("Descending Order:", sortNumberY, sortNumberZ, sortNumberX);
  }
} else if (sortNumberZ > sortNumberX && sortNumberZ > sortNumberY) {
  if (sortNumberX > sortNumberY) {
    console.log("Descending Order:", sortNumberZ, sortNumberX, sortNumberY);
  } else {
    console.log("Descending Order:", sortNumberZ, sortNumberY, sortNumberX);
  }
} \n `);

// Using Logical Operators (&&) with if...else if (nested if)
if (sortNumberX > sortNumberY && sortNumberX > sortNumberZ) {
  if (sortNumberY > sortNumberZ) {
    console.log("=> Descending Order:", sortNumberX, sortNumberY, sortNumberZ);
  } else {
    console.log("=> Descending Order:", sortNumberX, sortNumberZ, sortNumberY);
  }
} else if (sortNumberY > sortNumberX && sortNumberY > sortNumberZ) {
  if (sortNumberX > sortNumberZ) {
    console.log("=> Descending Order:", sortNumberY, sortNumberX, sortNumberZ);
  } else {
    console.log("=> Descending Order:", sortNumberY, sortNumberZ, sortNumberX);
  }
} else if (sortNumberZ > sortNumberX && sortNumberZ > sortNumberY) {
  if (sortNumberX > sortNumberY) {
    console.log("=> Descending Order:", sortNumberZ, sortNumberX, sortNumberY);
  } else {
    console.log("=> Descending Order:", sortNumberZ, sortNumberY, sortNumberX);
  }
}

console.log(`
// Using Nested if (if...else if..else)

if (sortNumberX <= sortNumberY) {
  if (sortNumberY <= sortNumberZ) {
    console.log("Ascending Order", sortNumberX, sortNumberY, sortNumberZ);
  } else if (sortNumberX <= sortNumberZ) {
    console.log("Ascending Order", sortNumberX, sortNumberZ, sortNumberY);
  } else {
    console.log("Ascending Order", sortNumberZ, sortNumberX, sortNumberY);
  }
} else {
  if (sortNumberX <= sortNumberZ) {
    console.log("Ascending Order", sortNumberY, sortNumberX, sortNumberZ);
  } else if (sortNumberY <= sortNumberZ) {
    console.log("Ascending Order", sortNumberY, sortNumberZ, sortNumberX);
  } else {
    console.log("Ascending Order", sortNumberZ, sortNumberY, sortNumberX);
  }
} \n `);

// Using Nested if (if...else if..else)
if (sortNumberX <= sortNumberY) {
  if (sortNumberY <= sortNumberZ) {
    console.log("=> Ascending Order", sortNumberX, sortNumberY, sortNumberZ);
  } else if (sortNumberX <= sortNumberZ) {
    console.log("=> Ascending Order", sortNumberX, sortNumberZ, sortNumberY);
  } else {
    console.log("=> Ascending Order", sortNumberZ, sortNumberX, sortNumberY);
  }
} else {
  if (sortNumberX <= sortNumberZ) {
    console.log("=> Ascending Order", sortNumberY, sortNumberX, sortNumberZ);
  } else if (sortNumberY <= sortNumberZ) {
    console.log("=> Ascending Order", sortNumberY, sortNumberZ, sortNumberX);
  } else {
    console.log("=> Ascending Order", sortNumberZ, sortNumberY, sortNumberX);
  }
}

console.log(`
// Using Variable Swapping
// The temporary variable (temp) is used as a temporary storage during swapping.

let temp;

if (sortNumberX > sortNumberY) {
  temp = sortNumberX;
  sortNumberX = sortNumberY;
  sortNumberY = temp;
}

if (sortNumberX > sortNumberZ) {
  temp = sortNumberX;
  sortNumberX = sortNumberZ;
  sortNumberZ = temp;
}

if (sortNumberY > sortNumberZ) {
  temp = sortNumberY;
  sortNumberY = sortNumberZ;
  sortNumberZ = temp;
}

console.log(\`Ascending Order: \${sortNumberX}, \${sortNumberY}, \${sortNumberZ}\`);
console.log(\`Dscending Order: \${sortNumberZ}, \${sortNumberY}, \${sortNumberX}\`); \n `);

// Using Variable Swapping
// The temporary variable (temp) is used as a temporary storage during swapping.
let temp;

if (sortNumberX > sortNumberY) {
  temp = sortNumberX;
  sortNumberX = sortNumberY;
  sortNumberY = temp;
}

if (sortNumberX > sortNumberZ) {
  temp = sortNumberX;
  sortNumberX = sortNumberZ;
  sortNumberZ = temp;
}

if (sortNumberY > sortNumberZ) {
  temp = sortNumberY;
  sortNumberY = sortNumberZ;
  sortNumberZ = temp;
}

console.log(
  `=> Ascending Order: ${sortNumberX}, ${sortNumberY}, ${sortNumberZ}`,
);
console.log(
  `=> Dscending Order: ${sortNumberZ}, ${sortNumberY}, ${sortNumberX}`,
);

console.log(`
// Using if Statements Only

if (sortNumberX > sortNumberY)
  [sortNumberX, sortNumberY] = [sortNumberY, sortNumberX];
if (sortNumberX > sortNumberZ)
  [sortNumberX, sortNumberZ] = [sortNumberZ, sortNumberX];
if (sortNumberY > sortNumberZ)
  [sortNumberY, sortNumberZ] = [sortNumberZ, sortNumberY];

console.log("Ascending Order:", sortNumberX, sortNumberY, sortNumberZ);
console.log("Dscending Order:", sortNumberZ, sortNumberY, sortNumberX); \n `);

// Using if Statements Only
if (sortNumberX > sortNumberY)
  [sortNumberX, sortNumberY] = [sortNumberY, sortNumberX];
if (sortNumberX > sortNumberZ)
  [sortNumberX, sortNumberZ] = [sortNumberZ, sortNumberX];
if (sortNumberY > sortNumberZ)
  [sortNumberY, sortNumberZ] = [sortNumberZ, sortNumberY];

console.log("Ascending Order:", sortNumberX, sortNumberY, sortNumberZ);
console.log("Dscending Order:", sortNumberZ, sortNumberY, sortNumberX);

console.log(`
// Using Ternary Operator
// One nested ternary cannot correctly sort three numbers because sorting requires up to three independent comparisons, not just one decision chain.

sortNumberX > sortNumberY
  ? ([sortNumberX, sortNumberY] = [sortNumberY, sortNumberX])
  : null;
sortNumberX > sortNumberZ
  ? ([sortNumberX, sortNumberZ] = [sortNumberZ, sortNumberX])
  : null;
sortNumberY > sortNumberZ
  ? ([sortNumberY, sortNumberZ] = [sortNumberZ, sortNumberY])
  : null;

console.log("Ascending Order:", sortNumberX, sortNumberY, sortNumberZ);
console.log("Dscending Order:", sortNumberZ, sortNumberY, sortNumberX); \n `);

// Using Ternary Operator
// One nested ternary cannot correctly sort three numbers because sorting requires up to three independent comparisons, not just one decision chain.
sortNumberX > sortNumberY
  ? ([sortNumberX, sortNumberY] = [sortNumberY, sortNumberX])
  : null;
sortNumberX > sortNumberZ
  ? ([sortNumberX, sortNumberZ] = [sortNumberZ, sortNumberX])
  : null;
sortNumberY > sortNumberZ
  ? ([sortNumberY, sortNumberZ] = [sortNumberZ, sortNumberY])
  : null;

console.log("=> Ascending Order:", sortNumberX, sortNumberY, sortNumberZ);
console.log("=> Dscending Order:", sortNumberZ, sortNumberY, sortNumberX);

console.log(`
// Using Math.min() and Math.max()

const smallestOne = Math.min(sortNumberX, sortNumberY, sortNumberZ);
const largestOne = Math.max(sortNumberX, sortNumberY, sortNumberZ);
const middleOne =
  sortNumberX + sortNumberY + sortNumberZ - smallestOne - largestOne;

console.log("Ascending Order:", smallestOne, middleOne, largestOne);
console.log("Dscending Order:", largestOne, middleOne, smallestOne); \n `);

// Using Math.min() and Math.max()
const smallestOne = Math.min(sortNumberX, sortNumberY, sortNumberZ);
const largestOne = Math.max(sortNumberX, sortNumberY, sortNumberZ);
const middleOne =
  sortNumberX + sortNumberY + sortNumberZ - smallestOne - largestOne;

console.log("=> Ascending Order:", smallestOne, middleOne, largestOne);
console.log("=> Dscending Order:", largestOne, middleOne, smallestOne);

console.log();

console.log(`
/**
 * ===========================================
 * 📖 Logical NOT (!) Operator
 * ===========================================
 * 
 * The logical NOT (!) operator reverses
 * a boolean value.
 * 
 * - If the value is true, it becomes false.
 * - If the value is false, it becomes true.
 * 
 * It is commonly used to check whether a
 * condition is NOT true.
 * 
 * Syntax: !condition
 * 
 * The ! operator only reverses a boolean value.
 * - !true becomes false
 * - !false becomes true
 * It does not compare values.
 * It's a concise alternative to writing conditions like variable === false.
 */ `);

console.log(`
// Examples
console.log(!true) // false
console.log(!false) // true

// Real-World Example
const isLoggedIn = false;
console.log(!isLoggedIn) // true

if (!isLoggedIn) {
  console.log("🔐 Please log in.");
}

// Equivalent Code
if (isLoggedIn === false) {
  console.log("🔐 Please log in.");
} `);

// Task 22 - Using hasPermission, use the ! operator to print "Access Denied" if permission is not granted.
console.log(`
// ===========================================
// Task 22
// Check whether the user has Permission.
// If the user permission is not granted,
// print "Access Denied"
// using the logical NOT (!) operator.
// =========================================== `);

const hasPermission = false;

console.log(`
// if (condition !== true) { not enter inside loop }
// const hasPermission = true; // (No output)
const hasPermission = false;

if (!hasPermission) {
  console.log("🚫 Access Denied.");
}
  
// Equivalent Code
if (hasPermission === false) {
  console.log("🚫 Access Denied.");
}
`);

if (!hasPermission) {
  console.log("=> 🚫 Access Denied.");
}

console.log();

// Task 23 - Using isOnline, use the NOT operator to print "User is offline".
console.log(`
// ===========================================
// Task 23
// Check whether the user is online.
// If the user is not online,
// print "User is offline"
// using the logical NOT (!) operator.
// =========================================== `);

const isOnline = false;

console.log(`
const isOnline = false;

// If isOnline is false, !isOnline becomes true, so the message is printed.
// If isOnline is true, !isOnline becomes false, so nothing is printed (No output).

if (!isOnline) console.log("📴 User is offline.");

// Equivalent Code
if (isOnline === false) console.log("📴 User is offline."); `);

if (!isOnline) console.log("=> 📴 User is offline.");

console.log();

// Task 24 - Build a simple discount system: if cart total is above 1000 AND the user is a member, apply a 20% discount; if only above 1000, apply a 10% discount; otherwise, no discount — use logical operators combined with if-else if.
console.log(`
// ===========================================
// Task 24
// Build a simple discount system.
// - If the cart total is above 1000 AND the
//   user is a member, apply a 20% discount.
// - If the cart total is above 1000 only,
//   apply a 10% discount.
// - Otherwise, no discount.
// =========================================== `);

/**
 * Here, four scenarios because of two boolean conditions:
 * - 1. Is the user a member?
 * - 2. Is the cart total above 1000?
 *
 * The conditions are:
 * - i) Member and order above 1000.
 * - ii) Member but order under or equal 1000.
 * - iii) Not a member but order above 1000.
 * - iv) Not member and order under or equal 1000
 */

// const cartTotal = 800;
const cartTotal = 1200;
const isMember = true;
// const isMember = false;

let discount = 0;

console.log(`
/* Here, four scenarios because of two boolean conditions: 
    1. Is the user a member?
    2. Is the cart total above 1000? 
i) Member and order above 1000, ii) Member but order under or equal 1000, iii) Not a member but order above 1000, iv) Not member and order under or equal 1000 */

// const cartTotal = 800;
const cartTotal = 1200;
const isMember = true;
// const isMember = false;

let discount = 0;

if (cartTotal > 1000 && isMember) {
  // Apply 20% discount
  console.log("🎉 You are a member. So, you get a 20% discount.");
  discount = 20;
} else if (cartTotal > 1000) {
  // Apply 10% discount
  console.log("🎉 You purchase over 1000. You get a 10% discount.");
  discount = 10;
} else {
  // No discount
  console.log("❌ No discount available.");
  discount;
}

const discountAmount = (cartTotal * discount) / 100;
const finalAmount = cartTotal - discountAmount;

console.log("\\n==================================");
console.log("     Simple Discount System");
console.log("==================================");
console.log(\`\\n🛒 Cart Total: ৳ \${cartTotal}\`);
console.log(
  \`🏷️  Discount Applied: \${discount}% (\${discount === 20 ? "Eligible Member" : discount === 10 ? "Eligible Purchase Amount" : "No Discount Applied"})\`,
);
console.log(
  \`🏷️  \${discount === 20 ? "Member" : discount === 10 ? "Regular Customer" : "No"} Discount: \${discount}%\`,
);
console.log(
  \`🏷️  Discount: \${discount}% - \${discount === 20 ? "Member Benefit" : discount === 10 ? "Order Above ৳1000" : "Not Eligible for a Discount"}\`,
);
console.log(\`💸 Discount Amount: ৳ \${discountAmount}\`);
console.log(\`💰 Final Amount to Pay: ৳ \${finalAmount}\`);
console.log("\\n=================================="); \n `);

if (cartTotal > 1000 && isMember) {
  // Apply 20% discount
  console.log("=> 🎉 You are a member. So, you get a 20% discount.");
  discount = 20;
} else if (cartTotal > 1000) {
  // Apply 10% discount
  console.log("=> 🎉 You purchase over 1000. You get a 10% discount.");
  discount = 10;
} else {
  // No discount
  console.log("=> ❌ No discount available.");
  discount = 0;
}

const discountAmount = (cartTotal * discount) / 100;
const finalAmount = cartTotal - discountAmount;

console.log("\n==================================");
console.log("     Simple Discount System");
console.log("==================================");
console.log(`\n🛒 Cart Total: ৳ ${cartTotal}`);
console.log(
  `🏷️  Discount Applied: ${discount}% (${discount === 20 ? "Eligible Member" : discount === 10 ? "Eligible Purchase Amount" : "No Discount Applied"})`,
);
console.log(
  `🏷️  ${discount === 20 ? "Member" : discount === 10 ? "Regular Customer" : "No"} Discount: ${discount}%`,
);
console.log(
  `🏷️  Discount: ${discount}% - ${discount === 20 ? "Member Benefit" : discount === 10 ? "Order Above ৳1000" : "Not Eligible for a Discount"}`,
);
console.log(`💸 Discount Amount: ৳ ${discountAmount}`);
console.log(`💰 Final Amount to Pay: ৳ ${finalAmount}`);
console.log("\n==================================");

console.log();

// Task 25 - Build a simple login + role-check system that verifies username/password and shows a different message based on admin/user role — combine everything from this module (comparison, logical operators, if-else, ternary)
console.log(`
// ===========================================
// Task 25
// Build a simple login + role-check system.
// Verify username and password, then display
// a different dashboard based on the user's role.
// =========================================== `);

console.log(`
/**
 * This is a great final practice task because it combines everything from Module 08:
 * ✅ Comparison operators (===, !==)
 * ✅ Logical operators (&&, ||, !)
 * ✅ if...else
 * ✅ Nested if
 * ✅ Ternary operator (? :)
 */

const userName = "admin";
const userPassword = "12345";
const role = "admin"; // admin or user

const enteredUserName = "admin";
const enteredUserPassword = "12345";

console.log("---- Login & Role-check System ----");

// Check login credentials
if (userName === enteredUserName && userPassword === enteredUserPassword) {
  console.log("✅ Login Successful!");

  // Check user role
  if (role === "admin") {
    console.log("👑 Welcome, Admin!");
    console.log("📊 Opening Admin Dashboard...");
  } else {
    console.log("👤 Welcome, User!");
    console.log("🏠 Opening User Dashboard...");
  }

  // Ternary Operator
  const access = role === "admin" ? "Full Access" : "Limited Access";

  console.log(\`🔐 Access Level: \${access}\`);
} else {
  console.log("❌ Invalid username or password.");
}

console.log("-----------------------------------"); \n `);

const userName = "admin";
const userPassword = "12345";
const role = "admin"; // admin or user

const enteredUserName = "admin";
const enteredUserPassword = "12345";

console.log("---- Login & Role-check System ----");

// Check login credentials
if (userName === enteredUserName && userPassword === enteredUserPassword) {
  console.log("✅ Login Successful!");

  // Check user role
  if (role === "admin") {
    console.log("👑 Welcome, Admin!");
    console.log("📊 Opening Admin Dashboard...");
  } else {
    console.log("👤 Welcome, User!");
    console.log("🏠 Opening User Dashboard...");
  }

  // Ternary Operator
  const access = role === "admin" ? "Full Access" : "Limited Access";

  console.log(`🔐 Access Level: ${access}`);
} else {
  console.log("❌ Invalid username or password.");
}

console.log("-----------------------------------");

console.log();

// Task 26 - ATM Withdrawal. Withdrawal must be multiple of 100. Balance must be enough. Must keep at least 500 after withdrawal. Print appropriate messages.
console.log(`
// ===========================================
// Task 26
// ATM Withdrawal System
//
// Create an ATM withdrawal system using
// two variables: accountBalance and
// withdrawalAmount.
//
// Rules:
// • The withdrawal amount must be a
//   multiple of 100.
// • The withdrawal amount must not exceed
//   the available account balance.
// • After the withdrawal, at least 500
//   must remain in the account.
// • Print an appropriate success or
//   failure message for each condition.
// =========================================== \n `);

const accountBalance = 5000;
const withdrawalAmount = 3000;

console.log(`
===== Variable Declaration =====

const accountBalance = 5000;
const withdrawalAmount = 3000;

=============================== `);

console.log(`
// Solution 1 - Using if...else if...else

if (withdrawalAmount % 100 !== 0) {
  console.log("❌ Withdrawal amount must be a multiple of 100.");
} else if (withdrawalAmount > accountBalance) {
  console.log("❌ Insufficient account balance.");
} else if (accountBalance - withdrawalAmount < 500) {
  console.log("❌ Minimum balance of 500 must remain in the account.");
} else {
  const remainingBalance = accountBalance - withdrawalAmount;

  console.log("✅ Withdrawal Successful!");
  console.log(\`💵 Withdrawn Amount : \${withdrawalAmount}\`);
  console.log(\`🏦 Remaining Balance: \${remainingBalance}\`);
} \n `);

// Solution 1 - Using if...else if...else
if (withdrawalAmount % 100 !== 0) {
  console.log("=> ❌ Withdrawal amount must be a multiple of 100.");
} else if (withdrawalAmount > accountBalance) {
  console.log("=> ❌ Insufficient account balance.");
} else if (accountBalance - withdrawalAmount < 500) {
  console.log("=> ❌ Minimum balance of 500 must remain in the account.");
} else {
  const remainingBalance = accountBalance - withdrawalAmount;

  console.log("=> ✅ Withdrawal Successful!");
  console.log(`=> 💵 Withdrawn Amount : ${withdrawalAmount}`);
  console.log(`=> 🏦 Remaining Balance: ${remainingBalance}`);
}

console.log(`
// Solution 2 — Nested if

if (withdrawalAmount % 100 === 0) {
  if (withdrawalAmount <= accountBalance) {
    if (accountBalance - withdrawalAmount >= 500) {
      console.log("✅ Withdrawal Successful!");
      console.log(\`💵 Withdrawn Amount : \${withdrawalAmount}\`);
      console.log(\`🏦 Remaining Balance: \${accountBalance - withdrawalAmount}\`);
    } else {
      console.log("❌ Minimum balance of 500 must remain in the account.");
    }
  } else {
    console.log("❌ Insufficient account balance.");
  }
} else {
  console.log("❌ Withdrawal amount must be a multiple of 100.");
} \n `);

// Solution 2 — Nested if
if (withdrawalAmount % 100 === 0) {
  if (withdrawalAmount <= accountBalance) {
    if (accountBalance - withdrawalAmount >= 500) {
      console.log("=> ✅ Withdrawal Successful!");
      console.log(`=> 💵 Withdrawn Amount : ${withdrawalAmount}`);
      console.log(
        `=> 🏦 Remaining Balance: ${accountBalance - withdrawalAmount}`,
      );
    } else {
      console.log("=> ❌ Minimum balance of 500 must remain in the account.");
    }
  } else {
    console.log("=> ❌ Insufficient account balance.");
  }
} else {
  console.log("=> ❌ Withdrawal amount must be a multiple of 100.");
}

console.log(`
// Solution 2 — Store Result in Variables

let message;
let remainingBalance = accountBalance;

if (withdrawalAmount % 100 !== 0) {
  message = "❌ Withdrawal amount must be a multiple of 100.";
} else if (withdrawalAmount > accountBalance) {
  message = "❌ Insufficient account balance.";
} else if (accountBalance - withdrawalAmount < 500) {
  message = "❌ Minimum balance of 500 must remain in the account.";
} else {
  remainingBalance -= withdrawalAmount;
  message = "✅ Withdrawal Successful!";
}

console.log(message);

if (message === "✅ Withdrawal Successful!") {
  console.log(\`💵 Withdrawn Amount : \${withdrawalAmount}\`);
  console.log(\`🏦 Remaining Balance: \${remainingBalance}\`);
} \n `);

// Solution 2 — Store Result in Variables
let message;
let remainingBalance = accountBalance;

if (withdrawalAmount % 100 !== 0) {
  message = "=> ❌ Withdrawal amount must be a multiple of 100.";
} else if (withdrawalAmount > accountBalance) {
  message = "=> ❌ Insufficient account balance.";
} else if (accountBalance - withdrawalAmount < 500) {
  message = "=> ❌ Minimum balance of 500 must remain in the account.";
} else {
  remainingBalance -= withdrawalAmount;
  message = "=> ✅ Withdrawal Successful!";
}

console.log(message);

if (message === "=> ✅ Withdrawal Successful!") {
  console.log(`=> 💵 Withdrawn Amount : ${withdrawalAmount}`);
  console.log(`=> 🏦 Remaining Balance: ${remainingBalance}`);
}

console.log(`
// Solution 4 — Ternary Operator (Practice)

const balanceResult =
  withdrawalAmount % 100 === 0
    ? withdrawalAmount < accountBalance
      ? accountBalance - withdrawalAmount > 500
        ? \`✅ Withdrawal Successful!\\n🏦 Remaining Balance: \${accountBalance - withdrawalAmount}\`
        : "❌ Minimum balance of 500 must remain in the account."
      : "❌ Insufficient account balance."
    : "❌ Withdrawal amount must be a multiple of 100.";

console.log(balanceResult); \n `);

// Solution 4 — Ternary Operator (Practice)
const balanceResult =
  withdrawalAmount % 100 === 0
    ? withdrawalAmount < accountBalance
      ? accountBalance - withdrawalAmount > 500
        ? `✅ Withdrawal Successful!\n=> 🏦 Remaining Balance: ${accountBalance - withdrawalAmount}`
        : "❌ Minimum balance of 500 must remain in the account."
      : "❌ Insufficient account balance."
    : "❌ Withdrawal amount must be a multiple of 100.";

console.log("=>", balanceResult);

console.log();

// Task 27 - Electricity Bill. Calculate: 0-50 units = ৳4.43/unit, 0-75 units = ৳5.26/unit, 75-200 = ৳8.50/unit, 201-300 = ৳9.10/unit, 301-400 = ৳9.62/unit, 401-600 = ৳15.01/unit, Above 600 = ৳17.35/unit. Use conditional logic to calculate the total bill.
console.log(`
// ===========================================
// Task 27
// Electricity Bill Calculator (Slab-wise)
//
// Create an electricity bill calculator using
// a variable named unitsConsumed.
//
// Calculate the bill using the following
// progressive slab rates:
//
// • Lifeline 50 units      → ৳4.63 per unit
// • First 75 units         → ৳5.26 per unit
// • Next 125 units         → ৳8.50 per unit
// • Next 100 units         → ৳9.10 per unit
// • Next 100 units         → ৳9.62 per unit
// • Next 200 units         → ৳15.01 per unit
// • Remaining units        → ৳17.35 per unit
//
// Calculate and print:
// • Units Consumed
// • Bill for each slab
// • Total Electricity Bill
//
// Challenge:
// • Use conditional statements.
// • Do not use loops.
// =========================================== \n `);

const unitsConsumed = 650;

console.log(`
===== Variable Declaration =====

const unitsConsumed = 650;

=============================== `);

console.log(`
// Direct Method - Nested if

if (unitsConsumed > 0) {
  if (unitsConsumed <= 50) {
    console.log(\` 🧾 Total Bill: ৳ \${(unitsConsumed * 4.43).toFixed(2)}\`);
  } else if (unitsConsumed <= 75) {
    console.log(\` 🧾 Total Bill: ৳ \${(unitsConsumed * 5.26).toFixed(2)}\`);
  } else if (unitsConsumed <= 200) {
    console.log(\` 🧾 Total Bill: ৳ \${(unitsConsumed * 8.5).toFixed(2)}\`);
  } else if (unitsConsumed <= 300) {
    console.log(\` 🧾 Total Bill: ৳ \${(unitsConsumed * 9.1).toFixed(2)}\`);
  } else if (unitsConsumed <= 400) {
    console.log(\` 🧾 Total Bill: ৳ \${(unitsConsumed * 9.62).toFixed(2)}\`);
  } else if (unitsConsumed <= 600) {
    console.log(\` 🧾 Total Bill: ৳ \${(unitsConsumed * 15.01).toFixed(2)}\`);
  } else {
    console.log(\` 🧾 Total Bill: ৳ \${(unitsConsumed * 17.35).toFixed(2)}\`);
  }
} else {
  console.log("=> ❌ Invalid unit consumption.");
} \n `);

// Direct Method - Nested if
if (unitsConsumed > 0) {
  if (unitsConsumed <= 50) {
    console.log(`=> 🧾 Total Bill: ৳ ${(unitsConsumed * 4.43).toFixed(2)}`);
  } else if (unitsConsumed <= 75) {
    console.log(`=> 🧾 Total Bill: ৳ ${(unitsConsumed * 5.26).toFixed(2)}`);
  } else if (unitsConsumed <= 200) {
    console.log(`=> 🧾 Total Bill: ৳ ${(unitsConsumed * 8.5).toFixed(2)}`);
  } else if (unitsConsumed <= 300) {
    console.log(`=> 🧾 Total Bill: ৳ ${(unitsConsumed * 9.1).toFixed(2)}`);
  } else if (unitsConsumed <= 400) {
    console.log(`=> 🧾 Total Bill: ৳ ${(unitsConsumed * 9.62).toFixed(2)}`);
  } else if (unitsConsumed <= 600) {
    console.log(`=> 🧾 Total Bill: ৳ ${(unitsConsumed * 15.01).toFixed(2)}`);
  } else {
    console.log(`=> 🧾 Total Bill: ৳ ${(unitsConsumed * 17.35).toFixed(2)}`);
  }
} else {
  console.log("=> ❌ Invalid unit consumption.");
}

console.log(`
// Using if...else if...else

let totalBill = 0;

if (unitsConsumed <= 50) {
  totalBill = unitsConsumed * 4.43;
} else if (unitsConsumed <= 75) {
  totalBill = unitsConsumed * 5.26;
} else if (unitsConsumed <= 200) {
  totalBill = 75 * 5.26 + (unitsConsumed - 75) * 8.5;
} else if (unitsConsumed <= 300) {
  totalBill = 75 * 5.26 + 125 * 8.5 + (unitsConsumed - 200) * 9.1;
} else if (unitsConsumed <= 400) {
  totalBill = 75 * 5.26 + 125 * 8.5 + 100 * 9.1 + (unitsConsumed - 300) * 9.62;
} else if (unitsConsumed <= 600) {
  totalBill =
    75 * 5.26 +
    125 * 8.5 +
    100 * 9.1 +
    100 * 9.62 +
    (unitsConsumed - 400) * 15.01;
} else {
  totalBill =
    75 * 5.26 +
    125 * 8.5 +
    100 * 9.1 +
    100 * 9.62 +
    200 * 15.01 +
    (unitsConsumed - 600) * 17.35;
}

console.log(\`⚡ Units Consumed : \${unitsConsumed}\`);
console.log(\`🧾 Total Bill     : ৳\${totalBill.toFixed(2)}\`); \n `);

// Using if...else if...else
let totalBill = 0;

if (unitsConsumed <= 50) {
  totalBill = unitsConsumed * 4.43;
} else if (unitsConsumed <= 75) {
  totalBill = unitsConsumed * 5.26;
} else if (unitsConsumed <= 200) {
  totalBill = 75 * 5.26 + (unitsConsumed - 75) * 8.5;
} else if (unitsConsumed <= 300) {
  totalBill = 75 * 5.26 + 125 * 8.5 + (unitsConsumed - 200) * 9.1;
} else if (unitsConsumed <= 400) {
  totalBill = 75 * 5.26 + 125 * 8.5 + 100 * 9.1 + (unitsConsumed - 300) * 9.62;
} else if (unitsConsumed <= 600) {
  totalBill =
    75 * 5.26 +
    125 * 8.5 +
    100 * 9.1 +
    100 * 9.62 +
    (unitsConsumed - 400) * 15.01;
} else {
  totalBill =
    75 * 5.26 +
    125 * 8.5 +
    100 * 9.1 +
    100 * 9.62 +
    200 * 15.01 +
    (unitsConsumed - 600) * 17.35;
}

console.log(`=> ⚡ Units Consumed : ${unitsConsumed}`);
console.log(`=> 🧾 Total Bill     : ৳${totalBill.toFixed(2)} \n `);

console.log(`
// Using slab - Detailed Breakdown

let lifelineSlab = 0;
let slab1 = 0;
let slab2 = 0;
let slab3 = 0;
let slab4 = 0;
let slab5 = 0;
let slab6 = 0;

if (unitsConsumed <= 50) {
  lifelineSlab = unitsConsumed * 4.43;
} else if (unitsConsumed <= 75) {
  slab1 = unitsConsumed * 5.26;
} else if (unitsConsumed <= 200) {
  slab1 = 75 * 5.26;
  slab2 = (unitsConsumed - 75) * 8.5;
} else if (unitsConsumed <= 300) {
  slab1 = 75 * 5.26;
  slab2 = 125 * 8.5;
  slab3 = (unitsConsumed - 200) * 9.1;
} else if (unitsConsumed <= 400) {
  slab1 = 75 * 5.26;
  slab2 = 125 * 8.5;
  slab3 = 100 * 9.1;
  slab4 = (unitsConsumed - 300) * 9.62;
} else if (unitsConsumed <= 600) {
  slab1 = 75 * 5.26;
  slab2 = 125 * 8.5;
  slab3 = 100 * 9.1;
  slab4 = 100 * 9.62;
  slab5 = (unitsConsumed - 400) * 15.01;
} else {
  slab1 = 75 * 5.26;
  slab2 = 125 * 8.5;
  slab3 = 100 * 9.1;
  slab4 = 100 * 9.62;
  slab5 = 200 * 15.01;
  slab6 = (unitsConsumed - 600) * 17.35;
}

const totalBillAmount = slab1 + slab2 + slab3 + slab4 + slab5 + slab6;

console.log("╔════════════════════════════════════════════╗");
console.log("║          🏢 পল্লী বিদ্যুৎ সমিতি বিল           ║");
console.log("╠════════════════════════════════════════════╣");
console.log(\`║ ⚡ Units Consumed : \${unitsConsumed.toString().padStart(22)} ║\`);
console.log("╟────────────────────────────────────────────╢");
console.log(\`║ 0-50 Units        : \${\`৳ \${lifelineSlab.toFixed(2)}\`.padStart(22)} ║\`);
console.log(\`║ 0-75 Units        : \${\`৳ \${slab1.toFixed(2)}\`.padStart(22)} ║\`);
console.log(\`║ 76-200 Units      : \${\`৳ \${slab2.toFixed(2)}\`.padStart(22)} ║\`);
console.log(\`║ 201-300 Units     : \${\`৳ \${slab3.toFixed(2)}\`.padStart(22)} ║\`);
console.log(\`║ 301-400 Units     : \${\`৳ \${slab4.toFixed(2)}\`.padStart(22)} ║\`);
console.log(\`║ 401-600 Units     : \${\`৳ \${slab5.toFixed(2)}\`.padStart(22)} ║\`);
console.log(\`║ Above 600 Units   : \${\`৳ \${slab6.toFixed(2)}\`.padStart(22)} ║\`);
console.log("╠════════════════════════════════════════════╣");
console.log(
  \`║ 🧾 Total Bill     : \${\`৳ \${totalBill.toFixed(2)}\`.padStart(22)} ║\`,
);
console.log("╚════════════════════════════════════════════╝") \n \n `);

// Using slab - Detailed Breakdown
let lifelineSlab = 0;
let slab1 = 0;
let slab2 = 0;
let slab3 = 0;
let slab4 = 0;
let slab5 = 0;
let slab6 = 0;

if (unitsConsumed <= 50) {
  lifelineSlab = unitsConsumed * 4.43;
} else if (unitsConsumed <= 75) {
  slab1 = unitsConsumed * 5.26;
} else if (unitsConsumed <= 200) {
  slab1 = 75 * 5.26;
  slab2 = (unitsConsumed - 75) * 8.5;
} else if (unitsConsumed <= 300) {
  slab1 = 75 * 5.26;
  slab2 = 125 * 8.5;
  slab3 = (unitsConsumed - 200) * 9.1;
} else if (unitsConsumed <= 400) {
  slab1 = 75 * 5.26;
  slab2 = 125 * 8.5;
  slab3 = 100 * 9.1;
  slab4 = (unitsConsumed - 300) * 9.62;
} else if (unitsConsumed <= 600) {
  slab1 = 75 * 5.26;
  slab2 = 125 * 8.5;
  slab3 = 100 * 9.1;
  slab4 = 100 * 9.62;
  slab5 = (unitsConsumed - 400) * 15.01;
} else {
  slab1 = 75 * 5.26;
  slab2 = 125 * 8.5;
  slab3 = 100 * 9.1;
  slab4 = 100 * 9.62;
  slab5 = 200 * 15.01;
  slab6 = (unitsConsumed - 600) * 17.35;
}

const totalBillAmount = slab1 + slab2 + slab3 + slab4 + slab5 + slab6;

console.log("╔════════════════════════════════════════════╗");
console.log("║          🏢 পল্লী বিদ্যুৎ সমিতি বিল           ║");
console.log("╠════════════════════════════════════════════╣");
console.log(`║ ⚡ Units Consumed : ${unitsConsumed.toString().padStart(22)} ║`);
console.log("╟────────────────────────────────────────────╢");
console.log(
  `║ 0-50 Units        : ${`৳ ${lifelineSlab.toFixed(2)}`.padStart(22)} ║`,
);
console.log(`║ 0-75 Units        : ${`৳ ${slab1.toFixed(2)}`.padStart(22)} ║`);
console.log(`║ 76-200 Units      : ${`৳ ${slab2.toFixed(2)}`.padStart(22)} ║`);
console.log(`║ 201-300 Units     : ${`৳ ${slab3.toFixed(2)}`.padStart(22)} ║`);
console.log(`║ 301-400 Units     : ${`৳ ${slab4.toFixed(2)}`.padStart(22)} ║`);
console.log(`║ 401-600 Units     : ${`৳ ${slab5.toFixed(2)}`.padStart(22)} ║`);
console.log(`║ Above 600 Units   : ${`৳ ${slab6.toFixed(2)}`.padStart(22)} ║`);
console.log("╠════════════════════════════════════════════╣");
console.log(
  `║ 🧾 Total Bill     : ${`৳ ${totalBill.toFixed(2)}`.padStart(22)} ║`,
);
console.log("╚════════════════════════════════════════════╝");

console.log();

// task 28 - Rock Paper Scissors (Handle all 9 possible combinations).
console.log(`
// ===========================================
// Task 28
// Rock, Paper, Scissors Game
//
// Create a Rock, Paper, Scissors game using
// two variables:
//
// • playerChoice
// • computerChoice
//
// Both variables can have one of these values:
// "Rock", "Paper", or "Scissors".
//
// Determine the winner using conditional
// statements.
//
// Rules:
// • Rock beats Scissors
// • Scissors beats Paper
// • Paper beats Rock
// • If both choices are the same, it's a Draw.
//
// Challenge:
// • Handle all 9 possible combinations.
// • Print both choices and the game result.
// =========================================== `);

const playerChoice = "Rock";
const computerChoice = "Scissors";

console.log(`
console.log(\`👤 Player   : \${playerChoice}\`);
console.log(\`🤖 Computer : \${computerChoice}\`); \n `);

console.log(`=> 👤 Player   : ${playerChoice}`);
console.log(`=> 🤖 Computer : ${computerChoice}`);

console.log(`
// Solution 1 — Using if...else if...else

if (playerChoice === computerChoice) {
  console.log("🤝 It's a Draw!");
} else if (
  (playerChoice === "Rock" && computerChoice === "Scissors") ||
  (playerChoice === "Scissors" && computerChoice === "Paper") ||
  (playerChoice === "Paper" && computerChoice === "Rock")
) {
  console.log("🎉 Player Wins!");
} else {
  console.log("💻 Computer Wins!");
} \n `);

// Solution 1 — Using if...else if...else
if (playerChoice === computerChoice) {
  console.log("=> 🤝 It's a Draw!");
} else if (
  (playerChoice === "Rock" && computerChoice === "Scissors") ||
  (playerChoice === "Scissors" && computerChoice === "Paper") ||
  (playerChoice === "Paper" && computerChoice === "Rock")
) {
  console.log("=> 🎉 Player Wins!");
} else {
  console.log("=> 💻 Computer Wins!");
}

console.log(`
// Solution 2 — Handle All 9 Combinations Explicitly

if (playerChoice === "Rock" && computerChoice === "Rock") {
  console.log("🤝 Draw");
} else if (playerChoice === "Rock" && computerChoice === "Paper") {
  console.log("💻 Computer Wins");
} else if (playerChoice === "Rock" && computerChoice === "Scissors") {
  console.log("🎉 Player Wins");
} else if (playerChoice === "Paper" && computerChoice === "Rock") {
  console.log("🎉 Player Wins");
} else if (playerChoice === "Paper" && computerChoice === "Paper") {
  console.log("🤝 Draw");
} else if (playerChoice === "Paper" && computerChoice === "Scissors") {
  console.log("💻 Computer Wins");
} else if (playerChoice === "Scissors" && computerChoice === "Rock") {
  console.log("💻 Computer Wins");
} else if (playerChoice === "Scissors" && computerChoice === "Paper") {
  console.log("🎉 Player Wins");
} else if (playerChoice === "Scissors" && computerChoice === "Scissors") {
  console.log("🤝 Draw");
} \n `);

// Solution 2 — Handle All 9 Combinations Explicitly
if (playerChoice === "Rock" && computerChoice === "Rock") {
  console.log("=> 🤝 Draw");
} else if (playerChoice === "Rock" && computerChoice === "Paper") {
  console.log("=> 💻 Computer Wins");
} else if (playerChoice === "Rock" && computerChoice === "Scissors") {
  console.log("=> 🎉 Player Wins");
} else if (playerChoice === "Paper" && computerChoice === "Rock") {
  console.log("=> 🎉 Player Wins");
} else if (playerChoice === "Paper" && computerChoice === "Paper") {
  console.log("=> 🤝 Draw");
} else if (playerChoice === "Paper" && computerChoice === "Scissors") {
  console.log("=> 💻 Computer Wins");
} else if (playerChoice === "Scissors" && computerChoice === "Rock") {
  console.log("=> 💻 Computer Wins");
} else if (playerChoice === "Scissors" && computerChoice === "Paper") {
  console.log("=> 🎉 Player Wins");
} else if (playerChoice === "Scissors" && computerChoice === "Scissors") {
  console.log("=> 🤝 Draw");
}

console.log(`
// Solution 3 — Nested if

if (playerChoice === computerChoice) {
  console.log("🤝 Draw");
} else {
  if (playerChoice === "Rock") {
    if (computerChoice === "Scissors") {
      console.log("🎉 Player Wins");
    } else {
      console.log("💻 Computer Wins");
    }
  } else if (playerChoice === "Paper") {
    if (computerChoice === "Rock") {
      console.log("🎉 Player Wins");
    } else {
      console.log("💻 Computer Wins");
    }
  } else {
    if (computerChoice === "Paper") {
      console.log("🎉 Player Wins");
    } else {
      console.log("💻 Computer Wins");
    }
  }
} \n `);

// Solution 3 — Nested if
if (playerChoice === computerChoice) {
  console.log("=> 🤝 Draw");
} else {
  if (playerChoice === "Rock") {
    if (computerChoice === "Scissors") {
      console.log("=> 🎉 Player Wins");
    } else {
      console.log("=> 💻 Computer Wins");
    }
  } else if (playerChoice === "Paper") {
    if (computerChoice === "Rock") {
      console.log("=> 🎉 Player Wins");
    } else {
      console.log("=> 💻 Computer Wins");
    }
  } else {
    if (computerChoice === "Paper") {
      console.log("=> 🎉 Player Wins");
    } else {
      console.log("=> 💻 Computer Wins");
    }
  }
}

console.log(`
// Solution 4 — Using switch

switch (\`\${playerChoice}-\${computerChoice}\`) {
  case "Rock-Rock":
  case "Paper-Paper":
  case "Scissors-Scissors":
    console.log("🤝 Draw");
    break;

  case "Rock-Scissors":
  case "Scissors-paper":
  case "Paper-Rock":
    console.log("🎉 Player Wins");
    break;

  default:
    console.log("💻 Computer Wins");
} \n `);

// Solution 4 — Using switch
switch (`${playerChoice}-${computerChoice}`) {
  case "Rock-Rock":
  case "Paper-Paper":
  case "Scissors-Scissors":
    console.log("=> 🤝 Draw");
    break;

  case "Rock-Scissors":
  case "Scissors-paper":
  case "Paper-Rock":
    console.log("=> 🎉 Player Wins");
    break;

  default:
    console.log("=> 💻 Computer Wins");
}

console.log();

// Task 29 - Chess Board. Print whether the square is Black or White.
console.log(`
// ===========================================
// Task 29
// Chess Board Square Color
//
// Given the row and column position of a
// square on a chessboard, determine whether
// the square is Black or White.
//
// Rules:
// • If (row + column) is even → Black
// • If (row + column) is odd  → White
//
// Print:
// • Row Number
// • Column Number
// • Square Color
//
// Challenge:
// • Solve it using different conditional
//   approaches.
// =========================================== \n `);

console.log(`
      1   2   3   4   5   6   7   8
   ┌─────────────────────────────────┐
1  │ B │ W │ B │ W │ B │ W │ B │ W │
2  │ W │ B │ W │ B │ W │ B │ W │ B │
3  │ B │ W │ B │ W │ B │ W │ B │ W │
4  │ W │ B │ W │ B │ W │ B │ W │ B │
5  │ B │ W │ B │ W │ B │ W │ B │ W │
6  │ W │ B │ W │ B │ W │ B │ W │ B │
7  │ B │ W │ B │ W │ B │ W │ B │ W │
8  │ W │ B │ W │ B │ W │ B │ W │ B │
   └─────────────────────────────────┘  `);

const row = 5;
const col = 8;

console.log(`
===== Variable Declaration =====

const row = 5;
const col = 8;

=============================== `);

console.log(`
// Solution 1 — Using if...else

if ((row + col) % 2 === 0) {
  console.log("⬛ Square Color: Black");
} else {
  console.log("⬜ Square Color: White");
} \n `);

// Solution 1 — Using if...else
if ((row + col) % 2 === 0) {
  console.log("=> ⬛ Square Color: Black");
} else {
  console.log("=> ⬜ Square Color: White");
}

console.log(`
// Solution 2 — Using Ternary Operator

const squareColor = (row + col) % 2 === 1 ? "⬜ White" : "⬛ Black";

console.log(\`Square Color: \${squareColor}\`); \n `);

// Solution 2 — Using Ternary Operator
const squareColor = (row + col) % 2 === 1 ? "⬜ White" : "⬛ Black";

console.log(`=> Square Color: ${squareColor}`);

console.log(`
// Solution 3 — Using switch

switch ((row + col) % 2) {
  case 0:
    console.log("⬛ Black");
    break;
  case 1:
    console.log("⬜ White");
    break;
} \n `);

// Solution 3 — Using switch
switch ((row + col) % 2) {
  case 0:
    console.log("=> ⬛ Black");
    break;
  case 1:
    console.log("=> ⬜ White");
    break;
}

// Task 30 - Traffic Light. Output depends on both light color and remaining timer.
console.log(`
// ===========================================
// Task 31
// Traffic Light Decision System
//
// Create a traffic light decision system.
//
// Given:
//
// • light  → "Red", "Yellow", or "Green"
// • timer  → Remaining time in seconds
//
// Determine what a driver should do based
// on both the traffic light color and the
// remaining timer.
//
// Rules:
//
// 🔴 Red
// • timer > 0  → Stop
//
// 🟡 Yellow
// • timer > 3  → Slow Down
// • timer <= 3 → Prepare to Stop
//
// 🟢 Green
// • timer > 5  → Go
// • timer <= 5 → Hurry Up (Light Changing Soon)
//
// Otherwise:
// • Invalid Traffic Light
//
// Challenge:
// • Use conditional statements.
// • Consider both the light color and timer.
// =========================================== \n `);
const light = "Yellow";
const timer = 3;

console.log(`
===== Variable Declaration =====

const light = "Yellow";
const timer = 3;

=============================== `);

console.log(`
// using Nested if

if (light === "Red") {
  console.log("🛑 Stop");
} else if (light === "Yellow") {
  if (timer <= 3) {
    console.log("⚠️  Prepare to Stop");
  } else {
    console.log("🚗 Slow Down");
  }
} else if (light === "Green") {
  if (timer > 5) {
    console.log("🟢 Go");
  } else {
    console.log("🏃 Hurry Up! Light Changing Soon");
  }
} else {
  console.log("❌ Invalid Traffic Light");
} \n `);

// using Nested if
if (light === "Red") {
  console.log("=> 🛑 Stop");
} else if (light === "Yellow") {
  if (timer <= 3) {
    console.log("=> ⚠️  Prepare to Stop");
  } else {
    console.log("=> 🚗 Slow Down");
  }
} else if (light === "Green") {
  if (timer > 5) {
    console.log("=> 🟢 Go");
  } else {
    console.log("=> 🏃 Hurry Up! Light Changing Soon");
  }
} else {
  console.log("=> ❌ Invalid Traffic Light");
}

console.log(`
// Solution 2 — Using Logical Operators

if (light === "Red") {
  console.log("🛑 Stop");
} else if (light === "Yellow" && timer <= 3) {
  console.log("⚠️  Prepare to Stop");
} else if (light === "Yellow" && timer > 3) {
  console.log("🚗 Slow Down");
} else if (light === "Green" && timer > 5) {
  console.log("🟢 Go");
} else if (light === "Green" && timer <= 5) {
  console.log("🏃 Hurry Up! Light Changing Soon");
} else {
  console.log("❌ Invalid Traffic Light");
} \n `);

// Solution 2 — Using Logical Operators
if (light === "Red") {
  console.log("=> 🛑 Stop");
} else if (light === "Yellow" && timer <= 3) {
  console.log("=> ⚠️  Prepare to Stop");
} else if (light === "Yellow" && timer > 3) {
  console.log("=> 🚗 Slow Down");
} else if (light === "Green" && timer > 5) {
  console.log("=> 🟢 Go");
} else if (light === "Green" && timer <= 5) {
  console.log("=> 🏃 Hurry Up! Light Changing Soon");
} else {
  console.log("=> ❌ Invalid Traffic Light");
}

console.log(`
// Solution 3 — Using switch

switch (light) {
  case "Red":
    console.log("🛑 Stop");
    break;

  case "Yellow":
    console.log(timer <= 3 ? "⚠️  Prepare to Stop" : "🚗 Slow Down");
    break;

  case "Green":
    console.log(timer > 5 ? "🟢 Go" : "🏃 Hurry Up! Light Changing Soon");

  default:
    console.log("❌ Invalid Traffic Light");
} \n `);

// Solution 3 — Using switch
switch (light) {
  case "Red":
    console.log("=> 🛑 Stop");
    break;

  case "Yellow":
    console.log(timer <= 3 ? "=> ⚠️  Prepare to Stop" : "=> 🚗 Slow Down");
    break;

  case "Green":
    console.log(timer > 5 ? "=> 🟢 Go" : "=> 🏃 Hurry Up! Light Changing Soon");

  default:
    console.log("=> ❌ Invalid Traffic Light");
}

console.log();
