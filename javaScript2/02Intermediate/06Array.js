// var name;
// var name2;
// var name3;

//  we are not going to add every single variable, we have other option too.

var countries = ["India", "USA", "Japan", "Russia", "Korea"];

var states = new Array("Andra pradesh", "Karnataka", "Delhi", "Assam");

console.log(states[1]);
// technically arrays start counting like 0, 1, 2, 3, 4 ....

console.log(states.length);
//  here it shows the length of the array


states[0]  = "punjab";
console.log(states);
// you will get replace the value 
//  you will notice punjab is replaced in the place of andra pradesh



var user = ["vijay", "v7@gmail.com", 7, 24, true];
console.log(user);
// w'll get all the values Dumped here

user.pop();  // using this pop you will lost the last value,
user.pop();  // using 2nd pop youu will lost 2 value from the last.
console.log(user);



user.unshift("im v7"); // u will notice here the value is added in front
console.log(user);

// user.shift(); // undo the value of unshift one
// console.log(user);


