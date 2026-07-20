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
// ===========================================
`);

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
);
`);

console.log(
  `=> Loose Equality (==): Are ${price1} and ${price2} equal? -`,
  price1 == price2,
);

console.log(`
console.log(
  \`Strict Equality (===): Are \${price1} and \${price2} equal in both value and type?\`,
  price1 === price2,
);
`);

console.log(
  `=> Strict Equality (===): Are ${price1} and ${price2} equal in both value and type? -`,
  price1 === price2,
);

console.log(`
console.log(
  \`Loose Inequality (!=): Are \${price1} and \${price2} different?\`,
  price1 != price2,
);
`);

console.log(
  `=> Loose Inequality (!=): Are ${price1} and ${price2} different? -`,
  price1 != price2,
);

console.log(`
console.log(
  \`Strict Inequality (!==): Are \${price1} and \${price2} different in value or type?\`,
  price1 !== price2,
);
`);

console.log(
  `=> Strict Inequality (!==): Are ${price1} and ${price2} different in value or type? -`,
  price1 !== price2,
);

console.log(`
console.log(
  \`Greater Than (>): Is \${price1} greater than \${price2}?\`,
  price1 > price2,
);
`);

console.log(
  `=> Greater Than (>): Is ${price1} greater than ${price2}? -`,
  price1 > price2,
);

console.log(`
console.log(
  \`Less Than (<): Is \${price1} less than \${price2}?\`,
  price1 < price2,
);
`);

console.log(
  `=> Less Than (<): Is ${price1} less than ${price2}? -`,
  price1 < price2,
);

console.log(`
console.log(
  \`Greater Than or Equal (>=): Is \${price1} greater than or equal to \${price2}?\`,
  price1 >= price2,
);
`);

console.log(
  `=> Greater Than or Equal (>=): Is ${price1} greater than or equal to ${price2}? -`,
  price1 >= price2,
);

console.log(`
console.log(
  \`Less Than or Equal (<=): Is \${price1} less than or equal to \${price2}?\`,
  price1 <= price2,
);
`);

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
// ===========================================
`);

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
  console.log("🌧️  It's raining. Take an umbrella.");
}  
`);

if (isRaining) {
  console.log("=> 🌧️  It's raining. Take an umbrella.");
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
}
`);

if (stock === 0) {
  console.log("=> 📦 Out of stock.");
}

console.log();

// Task 05 - Take a number variable and check whether it is positive or negative (using if-else).
console.log(`
// ===========================================
// Task 05
// Check whether a number is positive,
// negative, or zero using if...else.
// =========================================== `);

let number = -5;

console.log(`
let number = -5;

if (number > 0) {
  console.log(\` 📈 The Number \${number} is positive\`);
} else if (number < 0) {
  console.log(\`📉 The Number \${number} is negative\`);
} else {
  console.log(\`0️⃣ The Number is zero\`);
}
`);

if (number > 0) {
  console.log(`=> 📈 The Number ${number} is positive`);
} else if (number < 0) {
  console.log(`=> 📉 The Number ${number} is negative`);
} else {
  console.log(`=> 0️⃣ The Number is zero`);
}

console.log();

console.log(
  "We also use, the built-in Math.sign() method returns a specific value indicating the sign. 1  → Positive number, -1  → Negative number, 0  → Positive zero (+0), -0  → Negative zero (-0), NaN → Value is not a number",
);

console.log(`
console.log(\`Math.sign(-17):\`, Math.sign(-17));
console.log(\`Math.sign(10):\`, Math.sign(10));
console.log(\`Math.sign(0):\`, Math.sign(0));
console.log(\`Math.sign(-0):\`, Math.sign(-0));
console.log(\`Math.sign("Hello"):\`, Math.sign("Hello"));
`);

console.log(`=> Math.sign(-17):`, Math.sign(-17)); // -1
console.log(`=> Math.sign(10):`, Math.sign(10)); // 1
console.log(`=> Math.sign(0):`, Math.sign(0)); // 0
console.log(`=> Math.sign(-0):`, Math.sign(-0)); // -0
console.log(`=> Math.sign("Hello"):`, Math.sign("Hello")); // NaN

console.log();

console.log(
  "For clean, single-line returns, a nested ternary operator handles all three states efficiently. It's a concise way to write if...else conditions.",
);

console.log(`
const result =
  number > 0
    ? \`The number \${number} is positive.\`
    : number < 0
      ? \`The number \${number} is negative.\`
      : "The number is zero.";    
`);

const result =
  number > 0
    ? `The number ${number} is positive.`
    : number < 0
      ? `The number ${number} is negative.`
      : "The number is zero.";

console.log("=> Using Ternary Operator:", result);

console.log();

// Task 06 - Take a year variable and check whether it is a leap year (hint: year % 4 === 0).
console.log(`
// ===========================================
// Task 06
// Check whether a year is a leap year.
// (Using the simplified rule: year % 4 === 0)
// (Correct leap year algorithm.)
// ===========================================
`);

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

console.log(
  "A year is a leap year if: It is divisible by 400, or It is divisible by 4 and not divisible by 100.",
);

// Option 2: Escape the ${} (Best if you want to use a template literal)
console.log(`
const year = new Date().getFullYear();
console.log("This Year is:", year);

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log(\`📅 Year \${year} is a leap year.\`);
} else {
  console.log(\`📅 Year \${year} is not a leap year.\`);
}
`);

const year = new Date().getFullYear();
console.log("=> This Year is:", year);

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log(`=> 📅 Year ${year} is a leap year.`);
} else {
  console.log(`=> 📅 Year ${year} is not a leap year.`);
}

console.log();

// Task 07 - Take a speed variable. If speed is greater than 80, print "Over speeding", otherwise print "Normal speed".
console.log(`
// ===========================================
// Task 07
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

// Task 08 - Using age and hasTicket, print "Entry allowed" if age is above 18 AND the person has a ticket (use &&).
console.log(`
// ===========================================
// Task 08
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

// Task 09 - Using isWeekend and isHoliday, print "No work today" if either one is true (use ||).
console.log(`
// ===========================================
// Task 09
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

// Task 10 - Build a simple login system — print "Login successful" only if both username and password are correct.
console.log(`
// ======================================
// Task 10
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
}
`);

if (username === correctUsername && password === correctPassword) {
  console.log(`=> ✅ Login successful. Welcome to Dashboard, ${username}.`);
} else {
  console.log("=> ❌ Invalid username or password.");
}

console.log();

// Task 11 - Build a grading system using a marks variable (A+, A, B, C, F) — it must have at least 5 condition branches.
console.log(`
// ==============================================
// Task 11
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
}
`);

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
}
`);

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
}
`);

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

// Task 14 - Using age and hasID, use nested if-else to check whether someone is eligible to vote.
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
    console.log("🗳️  You are eligible to vote");
  } else {
    console.log("🪪  Please bring your ID.");
  }
} else {
  console.log("🚫 You are not eligible to vote.");
} \n `);

if (voterAge >= 18) {
  if (hasID) {
    console.log("=> 🗳️  You are eligible to vote");
  } else {
    console.log("=> 🪪  You need a valid ID to vote.");
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

// Task 16 - Determine whether a number is even or odd using the ternary operator.
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

console.log(`
// ===========================================
// Task 16
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

// Task 17 - Using age, determine "Adult" or "Minor" using the ternary operator.
console.log(`
// ===========================================
// Task 17
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

// Task 18 - If the price is greater than 1000, print "Expensive", otherwise "Affordable" — write this using a ternary operator.
console.log(`
// ===========================================
// Task 18
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

// Task 19 - Using hasPermission, use the ! operator to print "Access Denied" if permission is not granted.
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

const hasPermission = false;

if (!hasPermission) {
  console.log("=> 🚫 Access Denied.");
}

console.log();

// Task 20 - Using isOnline, use the NOT operator to print "User is offline".
console.log(`
// ===========================================
// Task 20
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
if (isOnline === false) console.log("📴 User is offline.");
`);

if (!isOnline) console.log("=> 📴 User is offline.");

console.log();

// Task 21 - Build a simple discount system: if cart total is above 1000 AND the user is a member, apply a 20% discount; if only above 1000, apply a 10% discount; otherwise, no discount — use logical operators combined with if-else if.
console.log(`
// ===========================================
// Task 21
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
console.log("\\n==================================");
`);

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

// Task 22 - Build a simple login + role-check system that verifies username/password and shows a different message based on admin/user role — combine everything from this module (comparison, logical operators, if-else, ternary)
console.log(`
// ===========================================
// Task 22
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

console.log("-----------------------------------");
`);

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

  console.log(`🔐 Access Level: ${access}`);
} else {
  console.log("❌ Invalid username or password.");
}

console.log("-----------------------------------");

console.log();
