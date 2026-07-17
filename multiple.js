/**
 *
 * Multiple Condition Logical Operator (&& and ||)
 *
 *
 *
 *
 *
 *
 */

const salary = 75000;
const isBCS = true;
const hasCar = false;

if (salary > 50000 && isBCS === true && hasCar) {
  console.log("Good Man");
} else {
  console.log("Bagabond man");
}

if (salary > 50000 || isBCS || hasCar) {
  console.log("Life set");
} else {
  console.log("Life ruined");
}

// Complex Condition
if ((salary > 50000 && hasCar) || isBCS) {
  console.log("Life is furfur");
}

if (20 < 30 || (20 === 20 && 30 === 30)) {
  console.log("1st ( && ) then ||");
}
