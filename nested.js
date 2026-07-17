const money = 500;

if (money > 500) {
  console.log("You rich, please treat me");

  if (money > 1000) {
    console.log("You get salary");

    if (money > 5000) {
      console.log("Where you get this money");
    } else {
      console.log("You can not find money");
    }
  } else {
    console.log("Do not get salary");
  }
} else {
  console.log("I have no rich friend");
  const isHungry = false;
  if (isHungry) {
    console.log("Eat food");
  } else {
    console.log("You did not get food");
  }
}
