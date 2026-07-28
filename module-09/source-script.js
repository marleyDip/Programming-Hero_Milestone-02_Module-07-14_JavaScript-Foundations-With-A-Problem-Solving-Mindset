// Auto-generated: a readable copy of script.js, used only to
// populate the Source tab. Loaded as a real script (not fetched),
// so it works the same whether opened via file:// or a server.

window.MODULE_SOURCE = `
/* Module 09: Loops & Iteration - Practice Tasks */

// Task 1 - Write a for loop that prints "Hello" 5 times.

/* for (let i = 1; i <= 5; i++) {
  console.log(\`Hello\${i}\`); // Hello1, Hello2, Hello3, Hello4, Hello5
  console.log("Hello", i); // Hello 1, Hello 2, Hello 3, Hello 4, Hello 5; typeof 1,2,...are number
  console.log("Hello" + i + 1); // Hello11, Hello21, Hello31, Hello41, Hello51
} */


for (let i = 0; i < 5; i++) {
  // console.log(\`Hello \${i + 1}\`); // Hello 1, Hello 2, Hello 3, Hello 4, Hello 5; Template literals are string
  console.log("Hello" + (i + 1)); // Hello1, Hello2, Hello3, Hello4, Hello5
  // console.log("Hello"); // Hello, Hello, Hello, Hello, Hello
}

// Task 2 - Write a for loop that prints numbers from 1 to 10.

/* for (let i = 0; i < 10; i++) {
  console.log("i ->>", i + 1); // i ->> 1, i ->> 2,..... i ->> 9, i ->> 10
} */

for (let i = 1; i <= 10; i++) {
  console.log("i ->>", i); // i ->> 1, i ->> 2, ..... i ->> 9, i ->> 10
}

// Using continue with print one line
let value = "";
for (let i = 0; i < 10; i++) {
  // value += i + 1 + " "; // it's not give correct behavior

  if (i === 5) {
    continue; // continue skips the current iteration, so 5 is not printed.
  }

  // value += i + 1 + ", ";
  value += i + 1;

  if (i < 9) {
    value += ", ";
  }
}

// Using Slice Method
// value = value.slice(0, -2);

console.log("Numbers from 1 to 10:", value);

// Task 3 - Write a while loop that prints numbers from 10 down to 1.
/* let i = 11;
while (i > 1) {
  console.log("Using While Loop, i -->", i - 1); // sing While Loop, i --> 10, sing While Loop, i --> 9, ..... sing While Loop, i --> 2, sing While Loop, i --> 1
  i--;
} */

let i = 10;
while (i >= 1) {
  console.log("Using While Loop, i -->", i); // sing While Loop, i --> 10, sing While Loop, i --> 9, ..... sing While Loop, i --> 2, sing While Loop, i --> 1
  // i++; // it's never end, going..........
  i--;
}

// Print in One Line
let p = 10;
let result = "";
while (p > 0) {
  result += p + "-";
  // result += p;

  //   if (p > 1) {
  //     result += "-";
  //   }

  p--;
}

// Using Slice
result = result.slice(0, -1);
// result = result.replace(/-$/, "");

console.log("Number from 10 down to 1:", result);

// Using Break
let q = 11;
while (true) {
  console.log(q - 1);

  if (q === 2) {
    break;
  }

  q--;
}

// Task 4 - Using a while loop, print "Loop চলছে" exactly 7 times.
// Print with Serial Number (1 -->> 7)
let ascending = 0;
while (ascending < 7) {
  // console.log("Loop চলছে" + " " + ascending + 1);
  console.log("Loop চলছে" + " " + (ascending + 1));
  ascending++;
}

// Countdown (7 -->> 1)
let descending = 7;
while (descending >= 1) {
  // console.log("Loop চলছে" + " " + descending);
  console.log(\`Loop চলছে \${descending}\`);
  descending--;
}

// Infinite Loop with break
// let b = 1;
let b = 0;
while (true) {
  // console.log("Loop চলছে"); // when b = 1

  if (b === 7) {
    break; // Exits the loop when it reach to 7
  }

  console.log("Loop চলছে"); // when b = 0

  b++;
}

// Task 5 - Write a for loop that prints all even numbers between 1 and 30.
for (let i = 1; i <= 30; i++) {
  // If Condition
  if (i % 2 === 0) {
    console.log("Even number Using If -", i);
  }

  // Ternary Operator
  i % 2 === 0 ? console.log("Even number Using Ternary -", i) : null;

  // Using continue
  // if (i % 2 !== 0) {
  if (i % 2 === 1) {
    continue; // skip 1, 3, 5, ....
  }
  console.log("Even number Using continue -", i);
}

// Increment by 2; Best Performance
let evenNumber = "";
for (let i = 2; i <= 30; i += 2) {
  // i += 2 => i = i + 2
  evenNumber += i + " ";
}
console.log("Even number Using 2 Increment -", evenNumber);

// Task 6 - Write a for loop that calculates the sum of numbers from 1 to 20 and prints the result.
// Basic for Loop with Stylish Output and Show Each Addition & Expression
let sum = 0;
let expression = "";
for (let i = 0; i <= 20; i++) {
  console.log("Value i =>", i);

  //  using continue
  if (i === 0) {
    continue;
  }

  sum += i;
  console.log(\`After Adding \${i}, Sum = \${sum}\`);

  // expression += i + " + ";
  expression += i;
  if (i < 20) {
    expression += " + ";
  }
}

console.log("\\n" + expression + " = " + sum);

console.log("\\nSum from 1 to 20 or Final Sum =", sum);

console.log(\`
╭──────────────────────────────╮
│      SUM CALCULATION       │
├──────────────────────────────┤
│ Numbers : 1 → 20           │
│ Total   : \${sum}           │
├──────────────────────────────┤
│ ✅ Task Completed         |
╰──────────────────────────────╯
\`);

// Task 7 - Ask the user for a number (or set a variable), then print its multiplication table from 1 to 10 using a for loop. Example: if the number is 7 → 7 x 1 = 7, 7 x 2 = 14, ... 7 x 10 = 70.
let number = 6;
let evenTable = "";
let oddTable = "";

console.log(\`
╭───────────────────────────────╮
│    MULTIPLICATION TABLE     │
├───────────────────────────────┤
\`);

// for (let i = 10; i >= 1; i--) {
for (let i = 1; i <= 10; i++) {
  // console.log(i);

  // console.log(number, "X", i, "=", number * i);
  console.log(\`│ \${number} x \${i} = \${(number * i).toString().padEnd(21)}│\`);
  // console.log(number + " " + "x" + " " + i + " " + "=" + " " + number * i);

  // Even & Odd Multiple
  if (i % 2 === 0) {
    evenTable += \`\${number} x \${i} = \${number * i}\\n\`;
  } else {
    oddTable += \`\${number} x \${i} = \${number * i}\\n\`;
  }
}

console.log("╰───────────────────────────────╯");

console.log("\\nEven Multiples");
console.log(evenTable);

console.log("Odd Multiples");
console.log(oddTable);

// Task 8 - Write a for loop that counts down from 20 to 1.
let counts = "";
let evenCount = "";
let oddCount = "";

for (let i = 20; i >= 1; i--) {
  // console.log(i);

  // counts += i + " - ";
  counts += i;
  if (i > 1) {
    counts += " - ";
  }

  // Odd & Even
  // if (i % 2 !== 0) {
  if (i % 2 === 1) {
    oddCount += i + ", ";
  } else {
    evenCount += i + ", ";
  }
}

oddCount = oddCount.slice(0, -2);
evenCount = evenCount.replace(/, \$/, "");

console.log(\`Count Down from 20 to 1: \${counts}\`);
console.log(\`Even Count Down from 20 to 1: \${evenCount}\`);
console.log(\`Odd Count Down from 20 to 1: \${oddCount}\`);

// Task 9 - Write a for loop that calculates the sum of all even numbers from 2 to 50.
let evenSum = 0;
let evenExpression = "";

for (let i = 2; i <= 50; i += 2) {
  console.log("Even Number  =>", i);

  //   if (i % 2 === 0) {
  //     evenSum += i;
  //   }

  evenSum += i;
  console.log(\`After Adding Even Number \${i}, Sum \${evenSum}\`);

  evenExpression += i;
  if (i < 50) {
    evenExpression += " + ";
  }
}

console.log("\\n", evenExpression, "=", evenSum);

console.log("\\nSum of all even numbers from 2 to 50 or Final Sum of Even =", evenSum);

console.log(\`
╭──────────────────────────────╮
│     EVEN NUMBER SUMMARY    │
├──────────────────────────────┤
│ Range     : 2 → 50         │
│ Total Sum : \${evenSum}     │
├──────────────────────────────┤
│ ✅ Task Completed         │
╰──────────────────────────────╯
\`);

// Task 10 - Write a for loop from 1 to 50 that stops completely (break) as soon as it reaches a number greater than 30
let num = "";
for (let i = 1; i <= 50; i++) {
  if (i > 30) {
    console.log(\`\${i} is greater than 30. Loop stopped immediately!\`);
    break; // When i becomes 31, the break statement stops the loop completely.
  }

  num += i + " - ";

  // console.log(i);
}

num = num.slice(0, -2);

console.log("The Number are:", num);

// Task 11 - Write a for loop from 1 to 20 that skips (continue) any number divisible by 4.
let skipped = "";
let printed = "";
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    skipped += i + " ";
    // console.log(\`\${i} number are skipped.\`);
    continue; // The numbers 4, 8, 12, 16, and 20 are skipped because they are divisible by 4.
  }

  printed += i + " ";
  // console.log(i);
}

console.log("Printed Numbers:", printed);
console.log("Skipped Numbers:", skipped);

console.log(\`
╭──────────────────────────────────╮
│      CONTINUE DEMONSTRATION   │
├──────────────────────────────────┤
│ Numbers : \${printed}
│ Skipped : \${skipped}
├──────────────────────────────────┤
│ ✅ Task Completed Successfully│
╰──────────────────────────────────╯
\`);

// Task 12 - Write a do while loop that prints numbers from 1 to 5. Then modify the condition so it is false from the start (for example, i > 10) and observe that the loop still runs once.

// A do...while loop executes the code block first, then checks the condition. 1. Run the code inside do { } 2. Check the condition 3. If true → repeat 4. If false → stop
let d = 1;
let doResult = "";
do {
  // console.log(d);

  doResult += d;
  if (d < 5) doResult += " - ";

  d++;
} while (d <= 5);

console.log("Using do while, numbers from 1 to 5:", doResult);

let e = 5;
do {
  console.log("Number execution only once:", e);
  e--;
} while (e > 5);

// Task 13 - Write the same task — printing numbers 1 to 5 — three times: once using for, once using while, and once using do while. Compare how the code structure differs for each.
// ======================
// FOR LOOP
// ======================
console.log("\\n===== FOR LOOP =====");

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// ======================
// WHILE LOOP
// ======================
console.log("\\n===== WHILE LOOP =====");

let j = 1;

while (j <= 5) {
  console.log(j);
  j++;
}

// ======================
// DO...WHILE LOOP
// ======================
console.log("\\n===== DO...WHILE LOOP =====");

let k = 1;

do {
  console.log(k);
  k++;
} while (k <= 5);

// Task 14 - Mini Challenge
// Write a program that:
// 1. Loops from 1 to 100.
// 2. Skips (continue) any number divisible by 5.
// 3. Stops (break) completely once it reaches a number greater than 40.
// 4. Prints every number that passes both checks.

let output = "";
let skipOutput = "";

for (let i = 1; i <= 100; i++) {
  // console.log(i);

  // Stop the loop if the number is greater than 40
  if (i > 40) {
    console.log(\`\\nLoop exits because \${i} is greater than 40.\`);
    break;
  }

  // Skip numbers divisible by 5
  if (i % 5 === 0) {
    console.log(\`Skipping \${i} (Divisible by 5)\`);
    skipOutput += i + ",";
    continue;
  }

  // console.log(i);
  output += i;
  if (i < 39) output += ", ";
}

skipOutput = skipOutput.slice(0, -1);

console.log(\`
╭──────────────────────────────────────────╮
│        MINI CHALLENGE REPORT         │
├──────────────────────────────────────────┤
│ Numbers : \${output}
├──────────────────────────────────────────┤
│ ⏭️  Skipped : \${skipOutput}          │
│ 🛑 Stopped : After 40                │
│ ✅ Status : Completed Successfully   │
╰──────────────────────────────────────────╯
\`)

`;
