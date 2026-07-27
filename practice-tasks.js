What is the output of the following code? function add(a, b) { return a + b; } console.log(add(5));

The output of the code is NaN (Not a Number).

Why this happens
1. Missing Argument: The add function is defined with two parameters: a and b. However, when calling add(5), you only provide one argument.

2. Implicit undefined: Because no second value is passed, JavaScript automatically sets the omitted parameter b to undefined.

3. The Math Operation: Inside the function, the code tries to evaluate a + b, which translates to 5 + undefined.

4. Result: Adding any number to undefined in JavaScript yields NaN.



To validate arguments in JavaScript before performing calculations, you can use type checks, default values, or explicit error handling.Here are the most efficient ways to secure your functions, ranked from simplest to most robust.


1. Default Parameters (Prevention)Instead of checking for missing values, assign default fallback values directly in the function signature.javascriptfunction add(a = 0, b = 0) {
  return a + b;
}
console.log(add(5)); // Output: 5 (b defaults to 0)

2. Type Checking with typeofEnsure both arguments are actual numbers before adding them. Use a conditional statement to handle invalid data.javascriptfunction add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Both arguments must be numbers';
  }
  return a + b;
}
console.log(add(5)); // Output: Error: Both arguments must be numbers

3. Strict Validation with Number.isFinite()The typeof check allows NaN and Infinity because JavaScript classifies them as numbers. For bulletproof math operations, use Number.isFinite().javascriptfunction add(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('Valid, finite numbers are required.');
  }
  return a + b;
}

try {
  console.log(add(5)); 
} catch (error) {
  console.error(error.message); // Output: Valid, finite numbers are required.
}

4. Requiring a Specific Number of ArgumentsIf your function strictly requires both inputs to exist, check the arguments.length property.javascriptfunction add(a, b) {
  if (arguments.length < 2) {
    return 'Error: Missing arguments';
  }
  return a + b;
}
console.log(add(5)); // Output: Error: Missing arguments



To set default parameter values in JavaScript, assign a fallback value directly in the function signature using the equals (=) operator.

1. Basic SyntaxThe default value is used only if an argument is omitted or passed as undefined.javascriptfunction greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet());          // Output: "Hello, Guest!"
console.log(greet(undefined)); // Output: "Hello, Guest!"
console.log(greet("Alice"));   // Output: "Hello, Alice!"


2. Math CalculationsYou can use defaults to prevent math operations from failing with NaN.javascriptfunction multiply(a = 1, b = 1) {
  return a * b;
}

console.log(multiply(5)); // Output: 5 (5 * 1)
console.log(multiply());  // Output: 1 (1 * 1)


3. Using Prior ParametersDefault values can reference parameters that were defined before them.javascriptfunction calculatePrice(price, tax = price * 0.1) {
  return price + tax;
}

console.log(calculatePrice(100)); // Output: 110 (Tax defaults to 10)


4. Destructured Object DefaultsWhen passing configuration objects to a function, you can set default values for specific properties.javascriptfunction createUser({ role = "user", status = "active" } = {}) {
  return `User role: ${role}, Status: ${status}`;
}

console.log(createUser()); // Output: "User role: user, Status: active"