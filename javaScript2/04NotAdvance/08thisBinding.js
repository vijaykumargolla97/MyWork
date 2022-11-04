// function doAddition(x) {
//     return function (y) {
//         return x + y;
//     };
// }

// var add = doAddition(4);
// console.log(add(5)); // 9

// console.log(doAddition(5)(7));  // 12

// doAddition () () () // this is called as curring


const vijay ={
    firstName: "vijaykumar",
    lastName: "golla",
    role: "student",
    courseCount: 3,
    getInfo: function () {
        console.log(`
        first name is ${this.firstName}
        last name is ${this.lastName}
        his role is ${this.role}
        and he studying ${this.courseCount} courses
        `);
    }
}
// if you run this code in a chrome  the result  was good but you should notice --proto-- there

const vj = {
    firstName: "vijay",
    lastName: "vj",
    role : "god",
    coursecCount: 7,
};



vijay.getInfo();
// first name is vijaykumar
// last name is golla      
// his role is student     
// and he studying 3 courses
vj.getInfo(); // u will get error here
// because only reason is you won't run a code on method
//  so we will barrow the code from the top
/// listen carefully we will pointouting the 'this' this keyword to vj not vijay

// i will show this in o8thisBinding2.js
