// Regular for loops

const numbers = [87, 54, 12, 63, 41, 87, 51];

const length = numbers.length;

// Here not start i = 1 because index start at 0
for (let i = 0; i < numbers.length; i++) {
  console.log("index value", i);

  const item = numbers[i];
  console.log("Value of the item is:", item);
}
