// THESE ARE FALSY VALUES

// undefined
// null
// 0
// ''    -means empty strings
// NaN

var user = null;

if (user) {
    console.log("condition is true");
}else {
    console.log("condition is false");
}

// note : falsy values are not run here


var user = "null";

if (user) {
    console.log("condition is true");
}
// this code runs because null in bwt ""



console.log(2+2);
// we get 4 here

console.log(2+"2");
// we get 22 here because numbers + strings cant understand javaScript



var user = "2";

if (2 === user) {
    console.log("condition is true");
}
//  here the false statement because we use === , these can find numbers and strings are different.
