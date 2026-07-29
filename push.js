// Appends new elements to the end of an array, and returns the new length of the array.

const friends = ["balam", "kalam", "salam", "gelam", "khailam"];
console.log(friends);

// friends.push("ghumailam");
const last = friends.push("ghumailam");
console.log(friends); // [ 'balam', 'kalam', 'salam', 'gelam', 'khailam', 'ghumailam' ]
console.log(last); // 6

friends.push("mobialam");
console.log(friends);
