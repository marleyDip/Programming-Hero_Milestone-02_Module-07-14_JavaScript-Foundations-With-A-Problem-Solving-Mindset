const isLoggedIn = false;

if (isLoggedIn) {
  console.log("Please log In");
}

// logical not, it opposite the meaning...!true = false or !false = true
// !isLoggedIn make it true
if (!isLoggedIn) {
  console.log("Please log In");
}

if (isLoggedIn === false) {
  console.log("Please login");
}

if (isLoggedIn) {
  console.log("Add your comment");
} else {
  console.log("Please login");
}

const number = 0;
// !!number = falsy value to => boolean true then boolean false
