// reverse() method: Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.

// একটি অ্যারের উপাদানগুলোকে নিজ স্থানে উল্টে দেয়। এই মেথডটি অ্যারেটিকে পরিবর্তন করে এবং একই অ্যারের একটি রেফারেন্স ফেরত দেয়।

const numbers = [87, 54, 12, 63, 41, 87, 51];

const reversed = numbers.reverse();
console.log(reversed); // [51, 87, 41, 63, 12, 54, 87];
console.log(numbers); // [51, 87, 41, 63, 12, 54, 87];

const friends = ["balam", "kalam", "salam", "gelam", "khailam"];

const afterReverse = [];
for (const friend of friends) {
  console.log(friend);

  afterReverse.unshift(friend);
  console.log(afterReverse);
}
/* 
balam
[ 'balam' ]
kalam
[ 'kalam', 'balam' ]
salam
[ 'salam', 'kalam', 'balam' ]
gelam
[ 'gelam', 'salam', 'kalam', 'balam' ]
khailam
[ 'khailam', 'gelam', 'salam', 'kalam', 'balam' ] */

const digits = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < digits.length; i++) {
  console.log(i, digits[i]);
}

const reversedDigit = [];
// reverse for loop to get array elements
for (let i = digits.length - 1; i >= 0; i--) {
  console.log(i, digits[i]);
  reversedDigit.push(digits[i]);
  console.log(reversedDigit);
}

/* 5 6
[ 6 ]
4 5
[ 6, 5 ]
3 4
[ 6, 5, 4 ]
2 3
[ 6, 5, 4, 3 ]
1 2
[ 6, 5, 4, 3, 2 ]
0 1
[ 6, 5, 4, 3, 2, 1 ] */
