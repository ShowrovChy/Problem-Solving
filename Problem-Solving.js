/**********************/
// Problem Solving 1
/**********************/
function seerToMon(seer) {
  // user can't enter negative value
  if (seer < 0) {
    return "Please enter positive value";
  }
  const mon = seer / 40;
  return mon;
}
// checking function by console.log
// console.log(seerToMon(160));
/**********************/
// Problem Solving 2
/**********************/
function totalSales(shirts, pants, shoes) {
  if (
    typeof shirts != "number" ||
    typeof pants != "number" ||
    typeof shoes != "number"
  ) {
    return "Please Enter Number Value";
  }
  const shirtCost = 100 * shirts;
  const pantsCost = 200 * pants;
  const shoesCost = 500 * shoes;
  const totalCost = shirtCost + pantsCost + shoesCost;
  return totalCost;
}
// checking function by console.log
// console.log(totalSales(4, 5, 2));
/**********************/
// Problem Solving 3
/**********************/
function deliveryCost(shirtQuantity) {
  if (shirtQuantity < 0) {
    return "Enter valid Quantity..!";
  } else {
    if (shirtQuantity <= 100) {
      let totalCost = shirtQuantity * 100; // ( shirt Quantity * delivery Cost per shirt )
      return totalCost;
    } else if (shirtQuantity <= 200) {
      let first100Cost = 100 * 100;
      let remainingQuantity = shirtQuantity - 100; // (upto 100 shirt Quantity - 100 shirt Quantity)
      let second100Cost = remainingQuantity * 80; // ( Remaining Quantity * delivery Cost per shirt )
      let totalCost = second100Cost + first100Cost;
      return totalCost;
    } else {
      let first100Cost = 100 * 100; // ( shirt Quantity * delivery Cost per shirt)
      let second100Cost = 100 * 80; // ( shirt Quantity * delivery Cost per shirt)
      let remainingQuantity = shirtQuantity - 200; // ( upto 200 shirt Quantity - 200 shirt Quantity )
      let upto200Cost = remainingQuantity * 50; // ( Remaining Quantity * delivery Cost per shirt )
      let totalCost = first100Cost + second100Cost + upto200Cost;
      return totalCost;
    }
  }
}
// checking function by console.log
// console.log(deliveryCost(-1));
// console.log(deliveryCost(50));
// console.log(deliveryCost(150));
// console.log(deliveryCost(250));
/***********************/
// Problem Solving 4
/**********************/
function perfectFriend(friends) {
  let perfectFriendName = [];
  for (const name of friends) {
    if (name.length == 5) {
      perfectFriendName = name;
      return perfectFriendName; // As soon as Loop get the name belonging 5 characters.It stops looping further.
    }
  }
}
// checking function by console.log
// console.log(perfectFriend(["Showrov","Joy","Rony","Royal","Opu","Tushan","Hasan","Nanto"]));
//As all these console.log for checking. so, didn't take any extra variable for the arguments/value. I just put them directly in console.log !
