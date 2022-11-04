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
}; // im not going for sourse im create out side like this its really helpfull for bigger projects


var vijay = new User("vijay", 24, "male");
// console.log(vijay);
vijay.married(); //vijay, 24, "not married
vijay.getfirstName(); //myfirst  name is : vijay


var anu = new User("anuragh", 2, "male");
// console.log(anu);
anu.married(); //anu, 2, "not married
anu.getfirstName(); //myfirst  name is : anuragh

////this is how proto is used in js

