// /// ...args this 3 dots we called as args

// var  returnedValue = Math.max(2, 4 ,7,  8, 3, 6);
// console.log(returnedValue);// 9 i will remove 9 from that
// console.log(returnedValue);// 8 it shows maxx number in the list

// var myObj = {};
// Object.assign(myObj, {a: 1, b: 2, c: 3}, {z: 9, y: 8, x: 7});
// console.log(myObj);
// // { a: 1, b: 2, c: 3, z: 9, y: 8, x: 7 }
// // i get all the things are mixxing up 

function sumOne(a, b) {
    return a + b;
}
// console.log(sumOne(4, 3)); // 7
var myArrey = [4, 3];
// console.log(sumOne(myArrey)); // 4,3undefined
// the function expects individual values but we r come with [a, b] bulk
// ypu dont want change function ...args ganna help u here

// console.log(sumOne(...myArrey)); // 7 // this is called a spread operator
/// if u try to one more value in arrey line no 17 it will ignore that
/// keep eye on that

function sumTwo (...args) {
    // console.log(args); // this arg converts indivduals into arrey
    let sum = 0;
    for (const arg of args) {
        // sum = sum + arg // i will write a short form here
        sum += arg;
    }
    return sum;
}
 console.log(sumTwo(2, 3, 4, 7, 9, 45, 9, 7));  // 86

 function sumThree (a, b, ...args) {
    let sum = 0;
    let multi = a * b;
    for (const arg of args) {
        sum = sum + arg;
    }
    return [sum, multi];
 };
  console.log(sumThree(2, 3, 5, 1, 1, 1, 1)); // [ 9, 6 ]
  // 9 //adding all numbers expect first 2 values
  // 6 //the value of multiplaying first 2 values
  