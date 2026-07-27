/* Debug - Broken Conditional */

// console.log() -> is the best way to debug.

/**
 *
 * Logical Error or Bug (No crash, Wrong answer)
 *
 * Brainstorming
 * 1) Did I compare or assign the value?
 * 2) Why is every result becoming "Adult"
 *
 *
 */

function checkAdultAssignmentOperator(age) {
  console.log(age); // 12 or 1 or 35

  // Here used assignment operator (=) instead of == or ===
  if ((age = 18)) {
    console.log(age); // 18
    return "Adult";
  } else {
    return "Minor";
  }
}

console.log(checkAdultAssignmentOperator(12)); // Adult
console.log(checkAdultAssignmentOperator(1)); // Adult
console.log(checkAdultAssignmentOperator(35)); // Adult

function checkAdultEqualityComparisonOperator(age) {
  console.log(age); // 12 or 1 or 35

  // Here used strict equality comparison operator (===) instead of greater (<) or smaller than (>)
  if (age === 18) {
    // Without 18 === 18, not enter
    console.log(age); // 18
    return "Adult";
  } else {
    return "Minor";
  }
}

console.log(checkAdultEqualityComparisonOperator(12)); // Minor
console.log(checkAdultEqualityComparisonOperator(18)); // Adult
console.log(checkAdultEqualityComparisonOperator(35)); // Minor

// Right Logic
function checkAdult(age) {
  console.log(age); // 12 or 1 or 35

  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}

console.log(checkAdult(12)); // Minor
console.log(checkAdult(1)); // Minor
console.log(checkAdult(35)); // Adult

/**
 *
 * Brainstorming
 * 1) Should both condition be true to apply?
 * 2) Are we using the correct logical operation?
 */

function canApplyEquality(age, hasNID) {
  if (age == 18 || hasNID) {
    return "Eligible";
  }

  return "Not Eligible";
}

console.log(canApplyEquality(15, true)); // Eligible, except Not Eligible bcz age must equal to 18 (its 15) but hasNID true, that's why eligible (wrong logic - or used)
console.log(canApplyEquality(18, false)); // Eligible excerpt Not Eligible bcz age == 18 but hasNID = false
console.log(canApplyEquality(35, true)); // Eligible, except Not Eligible bcz age must equal to 18 (its 35) but hasNID true, that's why eligible (wrong logic - or used)

function canApplyOr(age, hasNID) {
  if (age > 18 || hasNID) {
    return "Eligible";
  }

  return "Not Eligible";
}

console.log(canApplyOr(15, true)); // Eligible, except Not Eligible bcz age less than 15 but hasNID true (wrong logic - or used)
console.log(canApplyOr(18, true)); // Eligible
console.log(canApplyOr(35, false)); // Eligible, except Not Eligible bcz age greater than 18 but hasNID false (wrong logic - or used)

function canApplyAnd(age, hasNID) {
  if (age > 18 && hasNID) {
    return "Eligible";
  }

  return "Not Eligible";
}

console.log(canApplyAnd(15, true)); // Not Eligible, Logically perfect
console.log(canApplyAnd(18, true)); // Not Eligible bcz here not used greater than or equal (>=)
console.log(canApplyAnd(35, false)); // Not Eligible, Logically fine

function canApply(age, hasNID) {
  if (age >= 18 && hasNID) {
    return "Eligible";
  }

  return "Not Eligible";
}

console.log(canApply(35, true)); // Eligible
console.log(canApply(15, true)); // Not Eligible
console.log(canApply(18, true)); // Eligible

/**
 *
 * condition:
 * - Scholarship: 90% or more attendance AND 80 or more assignment marks.
 * Final Exam: 80% or more attendance AND 50 or more assignment marks.
 * Otherwise, Not Eligible
 *
 * Brainstorming:
 * 1) Should exactly 90% attendance AND 80 assignment marks qualify the scholarship?
 * 2) Are we using the correct comparison operator  in both condition?
 *
 */

function canAttendanceFinalExam(attendance, assignmentMarks) {
  // if (attendance > 90 && assignmentMarks > 80) {
  if (attendance >= 90 && assignmentMarks >= 80) {
    return "Eligible with Scholarship";
  } else if (attendance >= 80 && assignmentMarks >= 50) {
    // } else if (attendance > 80 || assignmentMarks > 50) {
    return "Eligible with final Exam";
  } else {
    return "Not Eligible";
  }
}

// console.log(canAttendanceFinalExam(90, 80)); // Eligible with final Exam; > &&
console.log(canAttendanceFinalExam(90, 80)); // Eligible with Scholarship; >= &&

console.log(canAttendanceFinalExam(80, 50)); // Eligible with final Exam; >= &&
// console.log(canAttendanceFinalExam(75, 55)); // Eligible with final Exam; > ||
// console.log(canAttendanceFinalExam(85, 45)); // Eligible with final Exam; > ||
// console.log(canAttendanceFinalExam(80, 50)); // Not Eligible; > ||

console.log(canAttendanceFinalExam(79, 49)); // Not Eligible
