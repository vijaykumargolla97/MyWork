// we use 'new' keyword here

var User = function (firstName, age, gender) {
    this.firstName = firstName;
    this.age = age;
    this.gender = gender;
    this.married = function() {
        console.log(`${this.firstName}, ${this.age}, "not married`);

        
    }
}

// var vijay = User("vijay", 24);
// console.log(vijay);
// // undefined only issue we are having in the code we use 'this' keyword
// // so we need to pointing  this keyword using 'new' keyword


var vijay = new User("vijay", 24, "male");
console.log(vijay);
// firstName: 'vijay',
// age: 24,
// gender: 'male',
// married: [Function (anonymous)] //// dont worry about this


var anu = new User("anu", 2, "male");
console.log(anu);
// User {
    // firstName: 'anu',
    // age: 2,
    // gender: 'male',
    // married: [Function (anonymous)]

