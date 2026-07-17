// string concatenation
const orangePrice = 20;
const mangoPrice = "20";
const totalPrice = orangePrice + mangoPrice;

console.log(orangePrice, typeof orangePrice);
console.log(mangoPrice, typeof mangoPrice);
console.log(totalPrice, typeof totalPrice);

const firstName = "Deep";
const lastName = "Akand";
const fullName = firstName + lastName;
console.log(fullName);

// const numberString = "20";
const numberString = "20.6";
console.log(Number(numberString)); // 20.6

const number = parseInt(numberString);
console.log(typeof number); // number
console.log(number); // 20

const number1 = parseFloat(numberString);
console.log(number1, typeof number1); // 20.6 number

const numberString1 = "Deep";
console.log(Number(numberString1)); // NaN
console.log(parseInt(numberString1)); // NaN
console.log(parseFloat(numberString1)); // NaN

const numberString2 = "2050Deep";
console.log(Number(numberString2)); // NaN
console.log(parseInt(numberString2)); // 2050
console.log(parseFloat(numberString2)); // 2050

const numberString3 = "Deep2050";
console.log(Number(numberString3)); // NaN
console.log(parseInt(numberString3)); // 2050
console.log(parseFloat(numberString3)); // 2050

// Add two fraction number arise a problem
const firstNumber = 0.1;
const secondNumber = 0.2;
const total = firstNumber + secondNumber;
console.log(total, typeof total); // 0.30000000000000004 number

// To solve this use, toFixed() - built in method
const totalTwoDecimal = total.toFixed(2);
console.log(totalTwoDecimal, typeof totalTwoDecimal); // 0.30 string

// to convert into number
const totalTwoDecimalNumber = parseFloat(totalTwoDecimal);
console.log(totalTwoDecimalNumber, typeof totalTwoDecimalNumber); // 0.3 number
