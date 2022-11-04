// function isEven(element) {
//     if  (element % 2 === 0) {
//     return true; 
// }
// return false;
// }

// console.log(isEven(2)); // you  will get true
// console.log(isEven(3));  // you will gett false here


function isEven(element) {

    return element%2===0;
}

console.log(isEven(2));  // this is also a correct code


var isEven =  (element) => {

    return element % 2 ===0;
}

console.log(isEven(2));
//  the above code is true even remove {} and return keyword
// note use the ()  in the plac {}


