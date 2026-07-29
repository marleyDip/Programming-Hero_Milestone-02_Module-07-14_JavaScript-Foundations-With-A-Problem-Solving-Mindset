// indexing start from 0

// length counts elements starting from 1 - indexes start from 0, so they're never equal to length

const players = ["abul", "babul", "cabul", "dabul", "kabul"]; // 0, 1, 2, 3, 4

console.log(players.length);

const player1 = players[0];
console.log(player1); // abul

const player4 = players[3];
console.log(player4); // dabul

// the Nth item always sits at index N - 1
// Last value of a array
console.log(players[players.length - 1]); // kabul

// Out-of-Range Index; players[5] which not exits, gives = undefined
console.log(players[players.length]); // undefined
console.log(players[50]); // undefined

// Set a exiting array value
players[1] = "ebul";
console.log(players); // [ 'abul', 'ebul', 'cabul', 'dabul', 'kabul' ]
