var user = ["viz", "lee", "Aj", "rup", "kot", "jan"];

// console.log(user.slice(0, 3));
////  result was 'viz', 'lee', 'Aj'

// user.splice(1, 3);
// console.log(user);
// here from 1 value to 3 values are deleted

user.splice(1, 3, "hello");
console.log(user);
// result was 'viz', 'hello', 'kot', 'jan'
// using .splice keyword values were deleted
// you also adds the new value in that place




