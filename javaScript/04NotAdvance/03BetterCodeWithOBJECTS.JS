var User = function (firstName, age, gender) {
    this.firstName = firstName;
    this.age = age;
    this.gender = gender;
    this.married = function() {
        console.log(`${this.firstName}, ${this.age}, not married`);

        
    };
};

User.prototype.getfirstName = function (){
    console.log(`myfirst  name is : ${this.firstName}`);
};

var vijay = new User("vijay", 24, "male");
// console.log(vijay);
vijay.married(); //vijay, 24, "not married
// vijay.getfirstName(); //myfirst  name is : vijay


// The above code is all running good, but line 2 'this.firstName' is like this 'this.firstNamee'
//  wt should happens , we will get undefined // this is the worest part of it
//  so we need to do onething here use if condition its really helps.

if (vijay.hasOwnProperty("firstName")) {
    vijay.getfirstName();
}
//  its all running good as like as previous code
// incase line 2 have 'this.firstNameee' its wont show up 
// thats why we shouud use 'if' condtion here
